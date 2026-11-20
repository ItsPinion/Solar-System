import * as THREE from "three";

const noiseFunctions = `
  float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  float noise3(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash31(i);
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
    float amplitude = 0.5;
    for (int octave = 0; octave < 5; octave++) {
      value += noise3(p) * amplitude;
      p = p * 2.03 + 17.17;
      amplitude *= 0.49;
    }
    return value;
  }
`;

const surfaceVertexShader = `
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  void main() {
    vLocalPosition = position;
    vUv = uv;

    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);

    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vViewPosition = -viewPosition.xyz;

    gl_Position = projectionMatrix * viewPosition;
  }
`;


const sunVertexShader = `
  uniform float uTime;
  varying vec3 vLocalPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;
  ${noiseFunctions}

  void main() {
    vLocalPosition = position;
    float cellNoise = fbm(position * 11.0 + vec3(0.0, uTime * 0.035, 0.0));
    float bulge = (cellNoise - 0.48) * 0.025;
    vec3 displaced = position + normal * bulge;

    vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
    vec4 viewPosition = modelViewMatrix * vec4(displaced, 1.0);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vViewPosition = -viewPosition.xyz;
    gl_Position = projectionMatrix * viewPosition;
  }
`;


const planetVertexShader = `
  uniform float uTime;
  uniform float uStyle;
  uniform float uSeed;

  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  ${noiseFunctions}

  void main() {
    vec3 displaced = position;

    // Small real vertex relief gives rocky bodies a broken, non-perfect silhouette.
    if (uStyle < 0.5) {
      float highlands = fbm(position * 22.0 + vec3(uSeed * 3.0));
      float ridges = noise3(position * 48.0 + vec3(2.0, uSeed, 5.0));
      float relief = ((highlands - 0.48) * 0.10 + (ridges - 0.5) * 0.035) * length(position);
      displaced += normal * relief;
    } else if (uStyle > 1.5) {
      float turbulence = fbm(position * 8.0 + vec3(uSeed, uTime * 0.006, 0.0));
      displaced += normal * ((turbulence - 0.5) * 0.008);
    }

    vLocalPosition = displaced;
    vUv = uv;

    vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
    vec4 viewPosition = modelViewMatrix * vec4(displaced, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vViewPosition = -viewPosition.xyz;

    gl_Position = projectionMatrix * viewPosition;
  }
`;

const sunFragmentShader = `
  uniform float uTime;
  varying vec3 vLocalPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;

  ${noiseFunctions}

  void main() {
    vec3 spherePoint = normalize(vLocalPosition);
    vec3 warpedPoint = spherePoint * 4.2;

    // Convective cells and turbulent plasma flow at several scales.
    vec3 warp = vec3(
      fbm(warpedPoint * 1.4 + vec3(0.0, uTime * 0.055, 0.0)),
      fbm(warpedPoint * 1.4 + vec3(8.2, 3.1, 5.7)),
      fbm(warpedPoint * 1.4 + vec3(4.4, 9.3, 2.6))
    );

    float convection = fbm(warpedPoint * 4.8 + warp * 2.0 + vec3(0.0, uTime * 0.055, uTime * 0.018));
    float granulation = fbm(warpedPoint * 13.0 + warp * 1.8 + vec3(uTime * 0.075, 0.0, uTime * 0.035));
    float filaments = abs(noise3(warpedPoint * 8.5 + warp * 2.7 + vec3(0.0, uTime * 0.06, 0.0)) - 0.5);

    float hotCells = smoothstep(0.36, 0.70, convection);
    float granularLight = smoothstep(0.32, 0.73, granulation);
    float darkLanes = 1.0 - smoothstep(0.02, 0.14, filaments);

    vec3 deepOrange = vec3(0.78, 0.075, 0.006);
    vec3 orange = vec3(1.0, 0.25, 0.018);
    vec3 gold = vec3(1.0, 0.66, 0.12);
    vec3 hotYellow = vec3(1.0, 0.94, 0.62);

    vec3 plasma = mix(deepOrange, orange, hotCells);
    plasma = mix(plasma, gold, granularLight * 0.68);
    plasma = mix(plasma, hotYellow, smoothstep(0.68, 0.86, convection) * 0.72);
    // The photosphere is self-luminous: keep its baseline radiance high everywhere.
    plasma *= 0.90 + granularLight * 0.25;
    plasma *= 1.0 - darkLanes * 0.18;

    // A few slowly evolving sunspot groups break the otherwise spherical surface.
    float spotA = length((spherePoint.xz - vec2(-0.28, 0.28)) * vec2(1.0, 1.6));
    float spotB = length((spherePoint.xz - vec2(0.34, -0.18)) * vec2(1.4, 1.0));
    float spots = (1.0 - smoothstep(0.035, 0.105, spotA)) * 0.55;
    spots += (1.0 - smoothstep(0.025, 0.075, spotB)) * 0.38;
    // Sunspots are local surface features, not a light/shadow boundary.
    plasma *= 1.0 - spots * 0.22;

    // Emit the same base radiance across the entire visible disk. Texture variation
    // comes from plasma convection and granulation, never from an external light vector.
    gl_FragColor = vec4(plasma * 1.62, 1.0);
  }
`;

const coronaFragmentShader = `
  uniform float uTime;
  varying vec3 vLocalPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;

  ${noiseFunctions}

  void main() {
    vec3 p = normalize(vLocalPosition);
    vec3 viewDirection = normalize(vViewPosition);
    float fresnel = 1.0 - max(dot(normalize(vWorldNormal), viewDirection), 0.0);
    float turbulence = fbm(p * 8.0 + vec3(0.0, uTime * 0.035, 0.0));
    float threads = fbm(p * 19.0 + vec3(uTime * 0.025, 4.0, 2.0));

    float rim = pow(fresnel, 2.4);
    float filaments = smoothstep(0.32, 0.78, threads + turbulence * 0.35);
    float alpha = rim * (0.018 + filaments * 0.075);
    vec3 corona = mix(vec3(0.42, 0.025, 0.002), vec3(1.0, 0.28, 0.025), filaments);

    gl_FragColor = vec4(corona * (0.22 + turbulence * 0.42), alpha);
  }
`;



const prominenceVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const prominenceFragmentShader = `
  uniform float uTime;
  uniform float uOpacity;
  varying vec2 vUv;

  void main() {
    float wave = 0.5 + 0.5 * sin(uTime * 2.4 + vUv.x * 12.0);
    float filament = 0.5 + 0.5 * sin(vUv.x * 38.0 - uTime * 3.2 + sin(vUv.x * 9.0) * 2.0);
    float brightness = 0.5 + wave * 0.28 + filament * 0.22;
    vec3 deep = vec3(0.82, 0.045, 0.004);
    vec3 hot = vec3(1.0, 0.58, 0.12);
    vec3 color = mix(deep, hot, filament * 0.62 + wave * 0.2);
    float edgeFade = smoothstep(0.0, 0.10, vUv.y) * (1.0 - smoothstep(0.90, 1.0, vUv.y));
    float core = 1.0 - smoothstep(0.0, 0.22, abs(vUv.y - 0.5));
    color = mix(color, vec3(1.0, 0.82, 0.48), core * 0.58);
    gl_FragColor = vec4(color * brightness * 1.35, (0.42 + brightness * 0.26) * uOpacity * edgeFade);
  }
`;

const atmosphereFragmentShader = `
  uniform float uTime;
  uniform vec3 uAtmosphereColor;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;

  void main() {
    vec3 normal = normalize(vWorldNormal);
    vec3 viewDirection = normalize(vViewPosition);
    float facing = max(dot(normal, viewDirection), 0.0);
    float rim = pow(1.0 - facing, 2.7);
    float softWave = 0.82 + 0.18 * sin(uTime * 0.7 + normal.y * 8.0);
    float alpha = rim * 0.24 * softWave;
    vec3 color = uAtmosphereColor * (0.45 + rim * 1.5);
    gl_FragColor = vec4(color, alpha);
  }
`;

const planetFragmentShader = `
  uniform float uTime;
  uniform float uStyle;
  uniform float uSeed;
  uniform vec3 uBaseColor;
  uniform vec3 uDetailColor;
  uniform vec3 uSunPosition;

  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  ${noiseFunctions}

  void main() {
    vec3 n = normalize(vLocalPosition);
    vec3 surface = uBaseColor;
    float relief = 0.0;

    if (uStyle < 0.5) {
      // Rocky worlds: mottled mineral regions, eroded ridges, impact basins.
      vec3 p = n * (7.0 + uSeed * 0.31);
      float continents = fbm(p * 2.2);
      float rockGrain = fbm(p * 18.0);
      float fineGrain = noise3(p * 52.0);
      float craterNoise = fbm(p * 10.0 + vec3(3.1, 8.2, uSeed));
      float ridges = abs(noise3(p * 8.0) - 0.5);

      surface = mix(uBaseColor * 0.62, uDetailColor, smoothstep(0.34, 0.68, continents) * 0.72);
      surface *= 0.72 + rockGrain * 0.54 + ridges * 0.28;
      surface *= 0.88 + fineGrain * 0.26;
      surface *= 1.0 - smoothstep(0.66, 0.82, craterNoise) * 0.30;
      relief = (rockGrain - 0.48) * 0.12;
    } else if (uStyle < 1.5) {
      // Earth-like worlds: deep oceans, fragmented continents, moving cloud decks.
      float continentNoise = fbm(n * 5.6 + vec3(uSeed, 2.0, 7.0));
      float landMask = smoothstep(0.43, 0.57, continentNoise);
      float terrain = fbm(n * 17.0);
      vec3 ocean = uBaseColor * vec3(0.43, 0.72, 1.25);
      vec3 land = mix(uDetailColor * 0.62, uDetailColor * 1.34, terrain);
      vec3 desert = vec3(0.47, 0.31, 0.13);
      land = mix(land, desert, smoothstep(0.54, 0.68, terrain) * 0.42);
      surface = mix(ocean, land, landMask);

      float polarIce = smoothstep(0.79, 0.94, abs(n.y));
      surface = mix(surface, vec3(0.78, 0.88, 0.94), polarIce * 0.82);

      float cloudNoise = fbm(n * 18.0 + vec3(uTime * 0.018, uSeed * 3.0, uTime * 0.009));
      float cloudStreak = fbm(n * 34.0 + vec3(-uTime * 0.012, 2.0, uSeed));
      float clouds = smoothstep(0.57, 0.72, cloudNoise + cloudStreak * 0.22);
      surface = mix(surface, vec3(0.82, 0.89, 0.96), clouds * 0.62);
      relief = (terrain - 0.5) * 0.08;
    } else {
      // Gas giants: flowing latitude bands and a rotating storm system.
      float bandWarp = fbm(n * 5.0 + vec3(uTime * 0.012, uSeed, 3.0));
      float latitude = n.y + (bandWarp - 0.5) * 0.11;
      float bands = sin((latitude * (25.0 + uSeed * 1.8) + uSeed) * 3.14159);
      float bandMask = smoothstep(-0.34, 0.44, bands);
      float turbulence = fbm(n * 15.0 + vec3(0.0, uTime * 0.016, uSeed * 2.0));
      surface = mix(uBaseColor * 0.62, uDetailColor * 1.12, bandMask * 0.72);
      surface *= 0.83 + turbulence * 0.38;

      vec2 stormCenter = vec2(0.35 * cos(uSeed), 0.22 * sin(uSeed));
      vec2 stormPoint = n.xz - stormCenter;
      float stormRadius = length(stormPoint * vec2(1.0, 1.65));
      float storm = 1.0 - smoothstep(0.045, 0.18, stormRadius + (turbulence - 0.5) * 0.035);
      float swirl = sin(atan(stormPoint.y, stormPoint.x) * 3.0 + turbulence * 8.0 + uTime * 0.12);
      vec3 stormColor = mix(uDetailColor * 0.48, uDetailColor * 1.25, swirl * 0.5 + 0.5);
      surface = mix(surface, stormColor, storm * 0.92);
      relief = (turbulence - 0.5) * 0.06;
    }

    vec3 normal = normalize(vWorldNormal);
    vec3 lightDirection = normalize(uSunPosition - vWorldPosition);
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float diffuse = max(dot(normal, lightDirection), 0.0);
    float ambient = 0.21;
    float lighting = ambient + diffuse * 0.98;

    // A restrained broad specular glint and stronger atmospheric rim help
    // the spherical silhouette read as a lit 3D body at system-wide zoom.
    vec3 halfVector = normalize(lightDirection + viewDirection);
    float specular = pow(max(dot(normal, halfVector), 0.0), 28.0) * 0.16;
    float rim = pow(1.0 - max(dot(normal, viewDirection), 0.0), 3.0);
    vec3 rimColor = uStyle > 0.5 && uStyle < 1.5
      ? vec3(0.10, 0.46, 0.95)
      : mix(uDetailColor, vec3(0.32, 0.42, 0.72), 0.45);

    surface *= lighting;
    surface += vec3(1.0, 0.82, 0.62) * specular;
    surface += rimColor * rim * 0.40;
    surface += vec3(0.012, 0.018, 0.035) * (1.0 - diffuse) * 0.35;
    surface *= 1.0 + relief;

    gl_FragColor = vec4(surface, 1.0);
  }
`;

export interface PlanetSurfaceOptions {
  baseColor: string;
  detailColor: string;
  style: "rocky" | "earth" | "bands";
  seed: number;
}

export function createSunSurfaceMaterial(): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: sunVertexShader,
    fragmentShader: sunFragmentShader,
    side: THREE.FrontSide,
  });
}

export function createCoronaMaterial(): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: surfaceVertexShader,
    fragmentShader: coronaFragmentShader,
    side: THREE.BackSide,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
  });
}

export function createProminenceMaterial(): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uOpacity: { value: 0 },
    },
    vertexShader: prominenceVertexShader,
    fragmentShader: prominenceFragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
    side: THREE.DoubleSide,
  });
}

export function createAtmosphereMaterial(color: string): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uAtmosphereColor: { value: new THREE.Color(color) },
    },
    vertexShader: surfaceVertexShader,
    fragmentShader: atmosphereFragmentShader,
    side: THREE.BackSide,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
  });
}

export function createPlanetSurfaceMaterial(options: PlanetSurfaceOptions): THREE.ShaderMaterial {
  const style = options.style === "rocky" ? 0 : options.style === "earth" ? 1 : 2;

  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uStyle: { value: style },
      uSeed: { value: options.seed },
      uBaseColor: { value: new THREE.Color(options.baseColor) },
      uDetailColor: { value: new THREE.Color(options.detailColor) },
      uSunPosition: { value: new THREE.Vector3(0, 0, 0) },
    },
    vertexShader: planetVertexShader,
    fragmentShader: planetFragmentShader,
    side: THREE.FrontSide,
  });
}

export function updateDynamicSurface(material: THREE.ShaderMaterial, time: number): void {
  const timeUniform = material.uniforms.uTime as { value: number } | undefined;
  if (timeUniform) timeUniform.value = time;
}
