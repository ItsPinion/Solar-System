import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

const nebulaVertexShader = `
  varying vec3 vDirection;

  void main() {
    vDirection = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const nebulaFragmentShader = `
  uniform float uTime;
  varying vec3 vDirection;

  float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  float noise3(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    float x00 = mix(n000, n100, f.x);
    float x10 = mix(n010, n110, f.x);
    float x01 = mix(n001, n101, f.x);
    float x11 = mix(n011, n111, f.x);
    return mix(mix(x00, x10, f.y), mix(x01, x11, f.y), f.z);
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.52;
    mat3 rotation = mat3(
       0.00,  0.80,  0.60,
      -0.80,  0.36, -0.48,
      -0.60, -0.48,  0.64
    );

    for (int i = 0; i < 5; i++) {
      value += noise3(p) * amplitude;
      p = rotation * p * 2.03 + 13.7;
      amplitude *= 0.49;
    }

    return value;
  }

  void main() {
    vec3 direction = normalize(vDirection);
    vec3 p = direction * 4.4;

    // Multi-scale turbulence makes the clouds look like layered gas, not smooth fog.
    vec3 warp = vec3(
      fbm(p * 1.05 + vec3(0.0, 0.0, uTime * 0.008)),
      fbm(p * 1.05 + vec3(17.2, 4.3, 2.1)),
      fbm(p * 1.05 + vec3(3.7, 19.1, 8.4))
    );
    float broadNoise = fbm(p * 2.0 + warp * 2.1);
    float fineNoise = fbm(p * 6.0 + warp * 3.7);
    float filament = pow(max(1.0 - abs(fineNoise - 0.49) * 3.1, 0.0), 3.0);

    // Four distinct nebula formations. Most of the sky between them stays black.
    // Place the formations on the far hemisphere seen from inside the sky dome.
    vec3 cloudA = normalize(vec3(-0.58, 0.52, -0.63));
    vec3 cloudB = normalize(vec3(0.62, 0.32, -0.72));
    vec3 cloudC = normalize(vec3(-0.20, -0.35, -0.91));
    vec3 cloudD = normalize(vec3(0.92, 0.18, -0.31));

    float lobeA = exp(-pow(acos(clamp(dot(direction, cloudA), -1.0, 1.0)) * 2.8, 2.0));
    float lobeB = exp(-pow(acos(clamp(dot(direction, cloudB), -1.0, 1.0)) * 2.6, 2.0));
    float lobeC = exp(-pow(acos(clamp(dot(direction, cloudC), -1.0, 1.0)) * 3.0, 2.0));
    float lobeD = exp(-pow(acos(clamp(dot(direction, cloudD), -1.0, 1.0)) * 3.1, 2.0));

    float cloudDensity = smoothstep(0.37, 0.66, broadNoise);
    float wisps = smoothstep(0.28, 0.72, filament);
    float blueCloud = lobeA * cloudDensity;
    float violetCloud = lobeB * smoothstep(0.34, 0.64, broadNoise);
    float tealCloud = lobeC * smoothstep(0.39, 0.68, broadNoise);
    float distantCloud = lobeD * smoothstep(0.42, 0.70, fineNoise);

    vec3 color = vec3(0.00035, 0.00065, 0.0022);
    color += vec3(0.002, 0.004, 0.014) * (0.5 + direction.y * 0.5);

    // Concentrated blue, violet, and teal gas with brighter textured filaments.
    color += vec3(0.018, 0.070, 0.19) * blueCloud * 1.15;
    color += vec3(0.070, 0.018, 0.16) * violetCloud * 1.05;
    color += vec3(0.012, 0.075, 0.13) * tealCloud * 0.95;
    color += vec3(0.10, 0.035, 0.022) * distantCloud * 0.55;

    float filamentMask = (blueCloud + violetCloud + tealCloud) * wisps;
    color += vec3(0.030, 0.085, 0.17) * filamentMask * 0.48;

    // A very dim galactic dust lane adds depth; it never becomes a white backdrop.
    float galacticBand = exp(-pow((direction.y + direction.x * 0.18) * 4.2, 2.0));
    float bandNoise = fbm(direction * 8.0 + vec3(2.0, 5.0, uTime * 0.004));
    color += vec3(0.0015, 0.004, 0.012) * galacticBand * (0.15 + bandNoise * 0.30);

    gl_FragColor = vec4(color, 1.0);
  }
`;

const cinematicGradeShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uTime: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    varying vec2 vUv;

    float grain(vec2 uv) {
      return fract(sin(dot(uv, vec2(127.1, 311.7)) + uTime * 17.0) * 43758.5453);
    }

    void main() {
      vec4 source = texture2D(tDiffuse, vUv);
      vec2 centered = (vUv - 0.5) * vec2(1.0, 0.86);
      // Use a defined smoothstep range: the reversed-edge form is undefined in GLSL.
      float vignette = 1.0 - smoothstep(0.18, 0.72, length(centered));
      source.rgb *= mix(0.48, 1.0, vignette);

      float fineGrain = (grain(vUv * vec2(1700.0, 950.0)) - 0.5) * 0.004;
      source.rgb += fineGrain;

      // Cool shadows and restrained highlights; keep the nebula saturated.
      source.rgb *= vec3(0.92, 0.94, 1.04);
      gl_FragColor = source;
    }
  `,
};

export function createCinematicSpace(
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
) {
  const nebulaMaterial = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: nebulaVertexShader,
    fragmentShader: nebulaFragmentShader,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false,
  });

  const nebulaDome = new THREE.Mesh(
    new THREE.SphereGeometry(1800, 96, 64),
    nebulaMaterial,
  );
  nebulaDome.renderOrder = -1000;
  scene.add(nebulaDome);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.68,
    0.42,
    0.72,
  );
  composer.addPass(bloom);

  const cinematicGrade = new ShaderPass(cinematicGradeShader);
  composer.addPass(cinematicGrade);
  composer.addPass(new OutputPass());

  return {
    update(time: number) {
      nebulaMaterial.uniforms.uTime!.value = time;
      cinematicGrade.uniforms.uTime!.value = time;
    },
    render() {
      composer.render();
    },
    resize(width: number, height: number, pixelRatio: number) {
      composer.setPixelRatio(pixelRatio);
      composer.setSize(width, height);
    },
  };
}
