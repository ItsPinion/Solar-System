import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createCinematicSpace } from "./cinematic";
import { createExtendedSolarSystem } from "./populations";
import {
  createAtmosphereMaterial,
  createCoronaMaterial,
  createPlanetSurfaceMaterial,
  createProminenceMaterial,
  createSunSurfaceMaterial,
  updateDynamicSurface,
} from "./surfaces";
import "./style.css";

const appRoot = document.querySelector<HTMLElement>("#app");
const canvas = document.querySelector<HTMLCanvasElement>("#scene-canvas");
const statusLabel = document.querySelector<HTMLSpanElement>("#status-label");
const statusDot = document.querySelector<HTMLSpanElement>("#status-dot");
const centerHint = document.querySelector<HTMLDivElement>("#center-hint");
const resetButton = document.querySelector<HTMLButtonElement>("#reset-button");
const layersToggle = document.querySelector<HTMLButtonElement>("#layers-toggle");
const layersPanel = document.querySelector<HTMLElement>("#layers-panel");

if (!appRoot || !canvas || !statusLabel || !statusDot || !centerHint || !resetButton || !layersToggle || !layersPanel) {
  throw new Error("The scene could not be initialized: required UI elements are missing.");
}

// -----------------------------------------------------------------------------
// Scene and camera
// -----------------------------------------------------------------------------

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x030711);

const camera = new THREE.PerspectiveCamera(
  44,
  window.innerWidth / window.innerHeight,
  0.1,
  4200,
);
camera.position.set(9, 18, 30);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.98;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.enablePan = false;

// Zoom is handled explicitly below so wheel input works consistently over
// the canvas and the floating HUD. OrbitControls remains responsible for orbiting.
controls.enableZoom = false;
controls.minDistance = 8;
controls.maxDistance = 1120;
controls.maxPolarAngle = Math.PI * 0.49;
controls.target.set(0, 0, 0);
controls.update();
renderer.domElement.style.touchAction = "none";

function handleSceneZoom(event: WheelEvent): void {
  event.preventDefault();
  if (!controls.enabled) return;

  const offset = camera.position.clone().sub(controls.target);
  const distance = offset.length();
  const nextDistance = THREE.MathUtils.clamp(
    distance * Math.exp(event.deltaY * 0.0012),
    controls.minDistance,
    controls.maxDistance,
  );

  offset.setLength(nextDistance);
  camera.position.copy(controls.target).add(offset);
  controls.update();
}

window.addEventListener("wheel", handleSceneZoom, { passive: false, capture: true });

// A small amount of ambient light lets the dark side of planets remain visible.
scene.add(new THREE.AmbientLight(0x7184b5, 0.30));

const depthFillLight = new THREE.DirectionalLight(0x9bb9e8, 0.62);
depthFillLight.position.set(18, 14, 22);
scene.add(depthFillLight);

// Procedural nebula sky, cinematic color grade, and HDR-style bloom.
const cinematicSpace = createCinematicSpace(scene, camera, renderer);

// -----------------------------------------------------------------------------
// Deep-space star field
// -----------------------------------------------------------------------------

const STAR_COUNT = 4200;
const starHomePositions = new Float32Array(STAR_COUNT * 3);
const starBaseColors = new Float32Array(STAR_COUNT * 3);
const starPulsePhase = new Float32Array(STAR_COUNT);
const starPulseFrequency = new Float32Array(STAR_COUNT);
const starPulseStrength = new Float32Array(STAR_COUNT);
const starGlowIndexByStar = new Int32Array(STAR_COUNT).fill(-1);

function makeStarGlowMap(): THREE.CanvasTexture {
  const glowCanvas = document.createElement("canvas");
  glowCanvas.width = 64;
  glowCanvas.height = 64;
  const context = glowCanvas.getContext("2d");
  if (!context) throw new Error("Canvas 2D context is unavailable.");

  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255,255,255,0.95)");
  gradient.addColorStop(0.12, "rgba(255,255,255,0.72)");
  gradient.addColorStop(0.35, "rgba(255,255,255,0.22)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(glowCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createStarField(): { points: THREE.Points; glowPoints: THREE.Points } {
  const positions = new Float32Array(STAR_COUNT * 3);
  const colors = new Float32Array(STAR_COUNT * 3);
  const glowPositions: number[] = [];
  const glowColors: number[] = [];
  const palette = [
    new THREE.Color(0xffffff),
    new THREE.Color(0xb9d7ff),
    new THREE.Color(0xffe1bd),
    new THREE.Color(0x829dff),
    new THREE.Color(0x9effed),
  ];

  for (let i = 0; i < STAR_COUNT; i += 1) {
    const direction = new THREE.Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
    ).normalize();
    // Keep stars beyond the expanded Oort-cloud representation, but close
    // enough to remain inside the camera's useful depth range.
    const distance = 720 + Math.random() * 330;
    const x = direction.x * distance;
    const y = direction.y * distance;
    const z = direction.z * distance;
    positions.set([x, y, z], i * 3);
    starHomePositions.set([x, y, z], i * 3);

    const tint = palette[Math.floor(Math.random() * palette.length)]!;
    // A wide brightness range makes distant stars feel less uniform.
    const brightness = 0.32 + Math.pow(Math.random(), 1.45) * 1.28;
    starPulsePhase[i] = Math.random() * Math.PI * 2;
    starPulseFrequency[i] = 0.6 + Math.random() * 2.8;
    // A minority of stars have sharp, occasional flashes; others shimmer gently.
    starPulseStrength[i] = Math.random() < 0.16
      ? 0.65 + Math.random() * 0.32
      : 0.08 + Math.random() * 0.2;

    const red = tint.r * brightness;
    const green = tint.g * brightness;
    const blue = tint.b * brightness;
    starBaseColors.set([red, green, blue], i * 3);
    colors.set([red, green, blue], i * 3);

    // Reserve a small subset for larger additive glow halos.
    if (Math.random() < 0.09) {
      starGlowIndexByStar[i] = glowPositions.length / 3;
      glowPositions.push(x, y, z);
      glowColors.push(red, green, blue);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    // A fixed, small pixel footprint keeps distant stars readable.
    size: 2.0,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: 0.94,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;

  const glowGeometry = new THREE.BufferGeometry();
  glowGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(glowPositions), 3),
  );
  glowGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(glowColors), 3),
  );

  const glowMaterial = new THREE.PointsMaterial({
    map: makeStarGlowMap(),
    size: 7.5,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: 0.86,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const glowPoints = new THREE.Points(glowGeometry, glowMaterial);
  glowPoints.frustumCulled = false;
  return { points, glowPoints };
}

const starFieldBundle = createStarField();
const starField = starFieldBundle.points;
const starGlowField = starFieldBundle.glowPoints;
scene.add(starField, starGlowField);

// -----------------------------------------------------------------------------
// Procedural textures and glow sprites
// -----------------------------------------------------------------------------

function makeSurfaceTexture(
  baseColor: string,
  detailColor: string,
  style: "rocky" | "earth" | "bands",
): THREE.CanvasTexture {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 1024;
  textureCanvas.height = 512;
  const context = textureCanvas.getContext("2d");

  if (!context) throw new Error("Canvas 2D context is unavailable.");

  context.fillStyle = baseColor;
  context.fillRect(0, 0, textureCanvas.width, textureCanvas.height);

  if (style === "bands") {
    for (let i = 0; i < 18; i += 1) {
      const y = (i / 18) * textureCanvas.height;
      const height = 8 + Math.random() * 28;
      context.fillStyle = i % 2 === 0 ? detailColor : baseColor;
      context.globalAlpha = 0.28 + Math.random() * 0.36;
      context.beginPath();
      context.moveTo(0, y);
      context.bezierCurveTo(260, y + height, 720, y - height, 1024, y + height * 0.25);
      context.lineTo(1024, y + height + 28);
      context.bezierCurveTo(700, y + height * 0.5, 300, y + height * 1.5, 0, y + height + 28);
      context.closePath();
      context.fill();
    }
  } else if (style === "earth") {
    context.fillStyle = detailColor;
    context.globalAlpha = 0.92;
    const landShapes = [
      [135, 155, 90, 52], [210, 245, 45, 85], [430, 125, 120, 48],
      [500, 220, 65, 100], [690, 135, 115, 62], [790, 280, 55, 82],
      [930, 170, 68, 44], [320, 365, 65, 30],
    ];
    for (const [x, y, rx, ry] of landShapes) {
      context.beginPath();
      context.ellipse(x!, y!, rx!, ry!, Math.random() * 0.8, 0, Math.PI * 2);
      context.fill();
    }
  } else {
    for (let i = 0; i < 150; i += 1) {
      const x = Math.random() * textureCanvas.width;
      const y = Math.random() * textureCanvas.height;
      const radius = 2 + Math.random() * 18;
      context.globalAlpha = 0.08 + Math.random() * 0.2;
      context.fillStyle = detailColor;
      context.beginPath();
      context.ellipse(x, y, radius * 1.5, radius, Math.random() * Math.PI, 0, Math.PI * 2);
      context.fill();
    }
  }

  context.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function makeSunTexture(): THREE.CanvasTexture {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 1024;
  textureCanvas.height = 512;
  const context = textureCanvas.getContext("2d");

  if (!context) throw new Error("Canvas 2D context is unavailable.");

  const gradient = context.createLinearGradient(0, 0, 0, 512);
  gradient.addColorStop(0, "#ff9b22");
  gradient.addColorStop(0.28, "#ffcc45");
  gradient.addColorStop(0.56, "#ff7b1d");
  gradient.addColorStop(0.82, "#ffb52c");
  gradient.addColorStop(1, "#ff681e");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 1024, 512);

  for (let i = 0; i < 520; i += 1) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    const radius = 2 + Math.random() * 18;
    context.globalAlpha = 0.04 + Math.random() * 0.17;
    context.fillStyle = i % 3 === 0 ? "#fff2a0" : "#a92e0c";
    context.beginPath();
    context.ellipse(x, y, radius * 2.4, radius * 0.55, Math.random() * Math.PI, 0, Math.PI * 2);
    context.fill();
  }

  context.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  return texture;
}

function makeGlowTexture(): THREE.CanvasTexture {
  const glowCanvas = document.createElement("canvas");
  glowCanvas.width = 256;
  glowCanvas.height = 256;
  const context = glowCanvas.getContext("2d");

  if (!context) throw new Error("Canvas 2D context is unavailable.");

  const gradient = context.createRadialGradient(128, 128, 8, 128, 128, 128);
  gradient.addColorStop(0, "rgba(255, 245, 190, 0.92)");
  gradient.addColorStop(0.18, "rgba(255, 170, 55, 0.55)");
  gradient.addColorStop(0.42, "rgba(255, 104, 20, 0.18)");
  gradient.addColorStop(1, "rgba(255, 70, 0, 0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);

  const texture = new THREE.CanvasTexture(glowCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const glowTexture = makeGlowTexture();

// -----------------------------------------------------------------------------
// Solar system root and the Sun
// -----------------------------------------------------------------------------

const SUN_RADIUS = 1.12;
const HELD_HEIGHT = 2.0;
const RETURN_DURATION = 0.72;
const RETURN_ARC_HEIGHT = 0.9;

const SYSTEM_DISTANCE_SCALE = 1.65;
const PLANET_BODY_SCALE = 2.4;

const solarSystem = new THREE.Group();
solarSystem.scale.setScalar(SYSTEM_DISTANCE_SCALE);
scene.add(solarSystem);

const sunGlow = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: glowTexture,
    color: 0xffa13b,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }),
);
sunGlow.scale.set(4.6, 4.6, 1);
solarSystem.add(sunGlow);

const sunHalo = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: glowTexture,
    color: 0xffc36b,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }),
);
sunHalo.scale.set(2.35, 2.35, 1);
solarSystem.add(sunHalo);

const sunAxis = new THREE.Group();
sunAxis.rotation.z = THREE.MathUtils.degToRad(7.25);
solarSystem.add(sunAxis);

const sunSurfaceMaterial = createSunSurfaceMaterial();
const sunMesh = new THREE.Mesh(
  new THREE.SphereGeometry(SUN_RADIUS, 128, 96),
  sunSurfaceMaterial,
);

// A separate animated corona shell adds turbulent plasma around the photosphere.
const coronaMaterial = createCoronaMaterial();
const coronaMesh = new THREE.Mesh(
  new THREE.SphereGeometry(SUN_RADIUS * 1.055, 96, 72),
  coronaMaterial,
);
coronaMesh.renderOrder = 2;
sunAxis.add(coronaMesh);
sunMesh.castShadow = false;
sunMesh.receiveShadow = false;
sunAxis.add(sunMesh);

const sunLight = new THREE.PointLight(0xffb04f, 145, 100, 2);
solarSystem.add(sunLight);

// Prominences are live surface eruptions. Their ribbon geometry is rebuilt in-place
// every frame: each arc grows from the photosphere, curls outward, then fades away.
interface SolarProminence {
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  direction: THREE.Vector3;
  tangent: THREE.Vector3;
  phase: number;
  cycleSpeed: number;
  height: number;
  spread: number;
  bend: number;
  segments: number;
  cycleIndex: number;
  index: number;
}

const prominences: SolarProminence[] = [];
const prominenceMaterials: THREE.ShaderMaterial[] = [];
const PROMINENCE_SEGMENTS = 34;
const PROMINENCE_COUNT = 9;

// Distribute eruption points over the complete 3D photosphere, not a
// camera-facing hemisphere. A Fibonacci sequence keeps the initial points spread
// evenly; later cycles continue the sequence with a small independent angular jitter.
const SOLAR_GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const SOLAR_GOLDEN_FRACTION = 0.6180339887498949;

function randomSolarSurfaceDirection(index: number, count: number, cycle = 0): THREE.Vector3 {
  const sample = index + cycle * count;
  const fraction = (sample * SOLAR_GOLDEN_FRACTION) % 1;
  const y = 1 - 2 * fraction;
  const radial = Math.sqrt(Math.max(0, 1 - y * y));
  const azimuth = sample * SOLAR_GOLDEN_ANGLE + (Math.random() - 0.5) * 0.22;

  return new THREE.Vector3(
    radial * Math.cos(azimuth),
    y,
    radial * Math.sin(azimuth),
  ).normalize();
}

function makeSurfaceTangent(direction: THREE.Vector3): THREE.Vector3 {
  const helperAxis = Math.abs(direction.y) > 0.88
    ? new THREE.Vector3(1, 0, 0)
    : new THREE.Vector3(0, 1, 0);
  return new THREE.Vector3().crossVectors(direction, helperAxis).normalize();
}

function addSolarProminence(index: number): void {
  const direction = randomSolarSurfaceDirection(index, PROMINENCE_COUNT);
  const tangent = makeSurfaceTangent(direction);

  const geometry = new THREE.BufferGeometry();
  const vertexCount = (PROMINENCE_SEGMENTS + 1) * 2;
  const positions = new Float32Array(vertexCount * 3);
  const uvs = new Float32Array(vertexCount * 2);
  const indices: number[] = [];

  for (let segment = 0; segment <= PROMINENCE_SEGMENTS; segment += 1) {
    const along = segment / PROMINENCE_SEGMENTS;
    const vertex = segment * 2;
    uvs[vertex * 2] = along;
    uvs[vertex * 2 + 1] = 0;
    uvs[(vertex + 1) * 2] = along;
    uvs[(vertex + 1) * 2 + 1] = 1;

    if (segment < PROMINENCE_SEGMENTS) {
      indices.push(vertex, vertex + 1, vertex + 2);
      indices.push(vertex + 1, vertex + 3, vertex + 2);
    }
  }

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage),
  );
  geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(indices);

  const material = createProminenceMaterial();
  prominenceMaterials.push(material);

  const arc = new THREE.Mesh(geometry, material);
  arc.frustumCulled = false;
  arc.renderOrder = 3;
  sunAxis.add(arc);

  prominences.push({
    geometry,
    material,
    direction,
    tangent,
    phase: (index / PROMINENCE_COUNT + Math.random() * 0.08) % 1,
    cycleSpeed: 0.12 + Math.random() * 0.11,
    height: 0.13 + Math.random() * 0.21,
    spread: 0.075 + Math.random() * 0.10,
    bend: (Math.random() - 0.5) * 0.42,
    segments: PROMINENCE_SEGMENTS,
    cycleIndex: 0,
    index,
  });
}

for (let i = 0; i < PROMINENCE_COUNT; i += 1) {
  addSolarProminence(i);
}

const prominenceStart = new THREE.Vector3();
const prominenceEnd = new THREE.Vector3();
const prominenceControl = new THREE.Vector3();
const prominenceCenter = new THREE.Vector3();
const prominenceDerivative = new THREE.Vector3();
const prominenceSide = new THREE.Vector3();
const prominenceNormal = new THREE.Vector3();
const flareCameraWorld = new THREE.Vector3();
const flareCameraLocal = new THREE.Vector3();

function updateFlareCameraDirection(): void {
  camera.getWorldPosition(flareCameraWorld);
  flareCameraLocal.copy(sunAxis.worldToLocal(flareCameraWorld.clone())).normalize();
}

function updateSolarProminences(time: number): void {
  for (const flare of prominences) {
    const cyclePosition = time * flare.cycleSpeed + flare.phase;
    const cycleIndex = Math.floor(cyclePosition);
    const cycle = cyclePosition - cycleIndex;

    // Pick a new, independent surface location and eruption shape every cycle.
    if (cycleIndex !== flare.cycleIndex) {
      flare.cycleIndex = cycleIndex;
      flare.direction.copy(randomSolarSurfaceDirection(flare.index, PROMINENCE_COUNT, cycleIndex));
      flare.tangent.copy(makeSurfaceTangent(flare.direction));
      flare.height = 0.13 + Math.random() * 0.21;
      flare.spread = 0.075 + Math.random() * 0.10;
      flare.bend = (Math.random() - 0.5) * 0.42;
    }

    const grow = THREE.MathUtils.smoothstep(cycle, 0.02, 0.22);
    const fade = 1 - THREE.MathUtils.smoothstep(cycle, 0.68, 0.98);
    const activity = grow * fade;
    const height = flare.height * activity;
    const spread = flare.spread * (0.45 + activity * 0.55);

    const cosSpread = Math.cos(spread);
    const sinSpread = Math.sin(spread);
    prominenceStart.copy(flare.direction).multiplyScalar(cosSpread)
      .addScaledVector(flare.tangent, -sinSpread)
      .multiplyScalar(SUN_RADIUS * 1.006);
    prominenceEnd.copy(flare.direction).multiplyScalar(cosSpread)
      .addScaledVector(flare.tangent, sinSpread)
      .multiplyScalar(SUN_RADIUS * 1.006);

    prominenceControl.copy(flare.direction).multiplyScalar(SUN_RADIUS + height)
      .addScaledVector(flare.tangent, flare.bend * height);

    const positions = flare.geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let segment = 0; segment <= flare.segments; segment += 1) {
      const t = segment / flare.segments;
      const oneMinusT = 1 - t;

      // Quadratic arch with a slight animated sideways sway.
      prominenceCenter.copy(prominenceStart).multiplyScalar(oneMinusT * oneMinusT)
        .addScaledVector(prominenceControl, 2 * oneMinusT * t)
        .addScaledVector(prominenceEnd, t * t);

      const sway = Math.sin(time * 2.6 + flare.phase * Math.PI * 2 + t * 5.0)
        * 0.018 * activity * Math.sin(Math.PI * t);
      prominenceCenter.addScaledVector(flare.tangent, sway);

      prominenceDerivative.copy(prominenceControl).sub(prominenceStart)
        .multiplyScalar(2 * oneMinusT)
        .addScaledVector(
          prominenceEnd.clone().sub(prominenceControl),
          2 * t,
        );

      // Face each plasma ribbon toward the current camera so it remains visible
      // from different surface locations and while the user orbits the Sun.
      prominenceNormal.copy(flareCameraLocal);
      prominenceSide.crossVectors(prominenceDerivative, prominenceNormal).normalize();
      if (prominenceSide.lengthSq() < 0.0001) prominenceSide.copy(flare.tangent);

      const taper = Math.pow(Math.sin(Math.PI * t), 0.72);
      const width = (0.003 + activity * 0.018) * taper;

      const left = prominenceCenter.clone().addScaledVector(prominenceSide, width);
      const right = prominenceCenter.clone().addScaledVector(prominenceSide, -width);

      positions.setXYZ(segment * 2, left.x, left.y, left.z);
      positions.setXYZ(segment * 2 + 1, right.x, right.y, right.z);
    }

    positions.needsUpdate = true;
    flare.material.uniforms.uTime!.value = time + flare.phase * 12.0;
    (flare.material.uniforms.uOpacity as { value: number }).value = activity;
  }
}


// Independent coronal streamers erupt from changing points around the solar limb.
// Unlike the prominences above, these are outward jets, created and faded on cycles.
interface SolarRay {
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  direction: THREE.Vector3;
  side: THREE.Vector3;
  phase: number;
  speed: number;
  length: number;
  bend: number;
  segments: number;
  cycleIndex: number;
  index: number;
}

const solarRays: SolarRay[] = [];
const SOLAR_RAY_COUNT = 14;
const SOLAR_RAY_SEGMENTS = 18;

function createSolarRay(index: number): void {
  const direction = randomSolarSurfaceDirection(
    PROMINENCE_COUNT + index,
    PROMINENCE_COUNT + SOLAR_RAY_COUNT,
  );
  const side = makeSurfaceTangent(direction);

  const vertexCount = (SOLAR_RAY_SEGMENTS + 1) * 2;
  const positions = new Float32Array(vertexCount * 3);
  const uvs = new Float32Array(vertexCount * 2);
  const indices: number[] = [];

  for (let segment = 0; segment <= SOLAR_RAY_SEGMENTS; segment += 1) {
    const t = segment / SOLAR_RAY_SEGMENTS;
    const vertex = segment * 2;
    uvs[vertex * 2] = t;
    uvs[vertex * 2 + 1] = 0;
    uvs[(vertex + 1) * 2] = t;
    uvs[(vertex + 1) * 2 + 1] = 1;

    if (segment < SOLAR_RAY_SEGMENTS) {
      indices.push(vertex, vertex + 1, vertex + 2);
      indices.push(vertex + 1, vertex + 3, vertex + 2);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage),
  );
  geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(indices);

  const material = createProminenceMaterial();
  prominenceMaterials.push(material);

  const ray = new THREE.Mesh(geometry, material);
  ray.frustumCulled = false;
  ray.renderOrder = 4;
  sunAxis.add(ray);

  solarRays.push({
    geometry,
    material,
    direction,
    side,
    phase: (index / SOLAR_RAY_COUNT + Math.random() * 0.06) % 1,
    speed: 0.17 + Math.random() * 0.10,
    length: 0.28 + Math.random() * 0.34,
    bend: (Math.random() - 0.5) * 0.18,
    segments: SOLAR_RAY_SEGMENTS,
    cycleIndex: 0,
    index,
  });
}

for (let i = 0; i < SOLAR_RAY_COUNT; i += 1) {
  createSolarRay(i);
}

const solarRayCenter = new THREE.Vector3();

function updateSolarRays(time: number): void {
  for (const ray of solarRays) {
    const cyclePosition = time * ray.speed + ray.phase;
    const cycleIndex = Math.floor(cyclePosition);
    const cycle = cyclePosition - cycleIndex;

    // Every new streamer cycle chooses a fresh point on the visible solar hemisphere.
    if (cycleIndex !== ray.cycleIndex) {
      ray.cycleIndex = cycleIndex;
      ray.direction.copy(randomSolarSurfaceDirection(
        PROMINENCE_COUNT + ray.index,
        PROMINENCE_COUNT + SOLAR_RAY_COUNT,
        cycleIndex,
      ));
      ray.side.copy(makeSurfaceTangent(ray.direction));
      ray.length = 0.28 + Math.random() * 0.34;
      ray.bend = (Math.random() - 0.5) * 0.18;
    }

    const grow = THREE.MathUtils.smoothstep(cycle, 0.04, 0.26);
    const fade = 1 - THREE.MathUtils.smoothstep(cycle, 0.65, 0.96);
    const activity = grow * fade;
    const extent = ray.length * activity;
    const positions = ray.geometry.getAttribute("position") as THREE.BufferAttribute;

    // Use a camera-facing width axis; the eruption's radial direction remains
    // attached to its randomly sampled point on the spherical photosphere.
    ray.side.crossVectors(ray.direction, flareCameraLocal).normalize();
    if (ray.side.lengthSq() < 0.0001) ray.side.copy(makeSurfaceTangent(ray.direction));

    for (let segment = 0; segment <= ray.segments; segment += 1) {
      const t = segment / ray.segments;
      const wave = Math.sin(time * 3.1 + t * 9.0 + ray.phase * 14.0);
      solarRayCenter.copy(ray.direction)
        .multiplyScalar(SUN_RADIUS * 1.004 + extent * t)
        .addScaledVector(ray.side, ray.bend * activity * t * t + wave * 0.012 * activity * t);

      const taper = Math.pow(1 - t, 1.25) * Math.sin(Math.PI * (t * 0.92 + 0.04));
      const width = (0.003 + activity * 0.018) * taper;
      const left = solarRayCenter.clone().addScaledVector(ray.side, width);
      const right = solarRayCenter.clone().addScaledVector(ray.side, -width);

      positions.setXYZ(segment * 2, left.x, left.y, left.z);
      positions.setXYZ(segment * 2 + 1, right.x, right.y, right.z);
    }

    positions.needsUpdate = true;
    ray.material.uniforms.uTime!.value = time + ray.phase * 10;
    (ray.material.uniforms.uOpacity as { value: number }).value = activity * 0.72;
  }
}


// -----------------------------------------------------------------------------
// Planet helpers, orbit paths, and planetary bodies
// -----------------------------------------------------------------------------

interface PlanetConfig {
  name: string;
  distance: number;
  radius: number;
  color: string;
  detail: string;
  textureStyle: "rocky" | "earth" | "bands";
  orbitSpeed: number;
  rotationSpeed: number;
  phase: number;
  inclination: number;
  ascendingNode: number;
  ring?: { inner: number; outer: number; color: number; opacity: number };
}

interface OrbitingPlanet {
  pivot: THREE.Group;
  mesh: THREE.Mesh;
  orbitPath: THREE.LineLoop;
  orbitRadius: number;
  orbitPhase: number;
  orbitSpeed: number;
  rotationSpeed: number;
  name: string;
  isReturning: boolean;
  returnStartAngle: number;
  returnStartRadius: number;
  returnElapsed: number;
}

interface StarReturnState {
  index: number;
  start: THREE.Vector3;
  elapsed: number;
}

const planetConfigs: PlanetConfig[] = [
  { name: "MERCURY", distance: 2.15, radius: 0.085, color: "#96918a", detail: "#ded3c3", textureStyle: "rocky", orbitSpeed: 0.92, rotationSpeed: 0.35, phase: 0.2, inclination: 0.12, ascendingNode: 0.35 },
  { name: "VENUS", distance: 3.05, radius: 0.125, color: "#bd8750", detail: "#f3c78b", textureStyle: "rocky", orbitSpeed: 0.68, rotationSpeed: -0.16, phase: 1.45, inclination: -0.075, ascendingNode: 1.4 },
  { name: "EARTH", distance: 4.15, radius: 0.14, color: "#2f73bd", detail: "#70b77b", textureStyle: "earth", orbitSpeed: 0.5, rotationSpeed: 0.95, phase: 2.65, inclination: 0.035, ascendingNode: 2.35 },
  { name: "MARS", distance: 5.25, radius: 0.105, color: "#b95132", detail: "#e99a68", textureStyle: "rocky", orbitSpeed: 0.39, rotationSpeed: 0.85, phase: 4.2, inclination: 0.08, ascendingNode: 3.1 },
  { name: "JUPITER", distance: 7.15, radius: 0.34, color: "#c18d65", detail: "#70432e", textureStyle: "bands", orbitSpeed: 0.21, rotationSpeed: 1.2, phase: 5.2, inclination: -0.055, ascendingNode: 4.2 },
  { name: "SATURN", distance: 9.55, radius: 0.29, color: "#d6b77d", detail: "#8c704b", textureStyle: "bands", orbitSpeed: 0.15, rotationSpeed: 0.9, phase: 3.35, inclination: 0.10, ascendingNode: 5.1 },
  { name: "URANUS", distance: 12.0, radius: 0.21, color: "#75c6ce", detail: "#d0ffff", textureStyle: "bands", orbitSpeed: 0.105, rotationSpeed: -0.56, phase: 0.95, inclination: -0.075, ascendingNode: 0.8 },
  { name: "NEPTUNE", distance: 14.35, radius: 0.22, color: "#386cce", detail: "#a0b9ff", textureStyle: "bands", orbitSpeed: 0.082, rotationSpeed: 0.82, phase: 4.65, inclination: 0.07, ascendingNode: 3.8 },
];

const orbitingPlanets: OrbitingPlanet[] = [];
const planetSurfaceMaterials: THREE.ShaderMaterial[] = [];
const planetAtmosphereMaterials: THREE.ShaderMaterial[] = [];
const sunWorldPosition = new THREE.Vector3();

// These canvas texture generators are retained for quick material experiments,
// but the live Sun and planets now use animated GLSL surface materials.
void makeSurfaceTexture;
void makeSunTexture;

function createOrbitPath(distance: number, opacity: number): THREE.LineLoop {
  const points: THREE.Vector3[] = [];
  const segments = 240;

  for (let i = 0; i < segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(
      Math.cos(angle) * distance,
      0,
      Math.sin(angle) * distance,
    ));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color: 0x8396bc,
    transparent: true,
    opacity,
    depthWrite: false,
  });

  return new THREE.LineLoop(geometry, material);
}

function createPlanetLabel(name: string): THREE.Sprite {
  const labelCanvas = document.createElement("canvas");
  labelCanvas.width = 512;
  labelCanvas.height = 96;
  const context = labelCanvas.getContext("2d");

  if (!context) throw new Error("Canvas 2D context is unavailable.");

  context.font = "500 34px monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "rgba(205, 221, 248, 0.92)";
  context.fillText(name, 256, 48);

  const texture = new THREE.CanvasTexture(labelCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    depthWrite: false,
  }));
  sprite.scale.set(1.25, 0.24, 1);
  sprite.renderOrder = 4;
  return sprite;
}

for (const config of planetConfigs) {
  // The orbit pivot rotates around the Sun; the planet mesh also spins locally.
  const pivot = new THREE.Group();
  pivot.rotation.order = "YXZ";
  pivot.rotation.y = config.phase;
  pivot.rotation.z = config.inclination;
  pivot.rotation.x = config.ascendingNode;
  solarSystem.add(pivot);

  const orbitPath = createOrbitPath(config.distance, 0.12);
  orbitPath.rotation.order = "YXZ";
  orbitPath.rotation.z = config.inclination;
  orbitPath.rotation.x = config.ascendingNode;
  solarSystem.add(orbitPath);

  const planetMaterial = createPlanetSurfaceMaterial({
    baseColor: config.color,
    detailColor: config.detail,
    style: config.textureStyle,
    seed: planetConfigs.indexOf(config) + 1,
  });
  planetSurfaceMaterials.push(planetMaterial);

  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(config.radius, 96, 64),
    planetMaterial,
  );
  planet.position.set(config.distance, 0, 0);
  planet.scale.setScalar(PLANET_BODY_SCALE);
  planet.rotation.z = THREE.MathUtils.degToRad(config.name === "URANUS" ? 82 : 8);
  planet.castShadow = false;
  planet.receiveShadow = false;
  pivot.add(planet);

  // Selected worlds get a separate animated atmospheric limb, not just a painted sphere.
  const atmosphereColors: Record<string, string> = {
    VENUS: "#ffb36b",
    EARTH: "#4c9eff",
    MARS: "#ff784f",
    NEPTUNE: "#397cff",
  };
  const atmosphereColor = atmosphereColors[config.name];
  if (atmosphereColor) {
    const atmosphereMaterial = createAtmosphereMaterial(atmosphereColor);
    planetAtmosphereMaterials.push(atmosphereMaterial);
    const atmosphereShell = new THREE.Mesh(
      new THREE.SphereGeometry(config.radius * 1.075, 64, 48),
      atmosphereMaterial,
    );
    atmosphereShell.renderOrder = 1;
    planet.add(atmosphereShell);
  }

  if (config.ring) {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(config.ring.inner, config.ring.outer, 128),
      new THREE.MeshStandardMaterial({
        color: config.ring.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: config.ring.opacity,
        roughness: 0.82,
        metalness: 0.08,
        depthWrite: false,
      }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.rotation.z = THREE.MathUtils.degToRad(18);
    planet.add(ring);
  }

  const label = createPlanetLabel(config.name);
  label.position.set(config.distance, config.radius * PLANET_BODY_SCALE + 0.4, 0);
  pivot.add(label);

  orbitingPlanets.push({
    pivot,
    mesh: planet,
    orbitPath,
    orbitRadius: config.distance,
    orbitPhase: config.phase,
    orbitSpeed: config.orbitSpeed,
    rotationSpeed: config.rotationSpeed,
    name: config.name,
    isReturning: false,
    returnStartAngle: config.phase,
    returnStartRadius: config.distance,
    returnElapsed: 0,
  });
}

// All extended populations are attached to the same moving solar-system root.
const extendedSystem = createExtendedSolarSystem(solarSystem, orbitingPlanets);
const populationSummary = document.querySelector<HTMLElement>("#population-summary");
if (populationSummary) {
  const counts = extendedSystem.counts;
  populationSummary.textContent =
    `${counts.dwarfPlanets} dwarf planets · ${counts.namedMoons} named moons + ${counts.generatedMoonlets} generated moonlets · ${counts.namedAsteroids} named asteroids · ${counts.smallBodies.toLocaleString()} generated small-body particles · ${counts.comets} comets · ${counts.spacecraft} spacecraft`;
}

layersToggle.addEventListener("click", () => {
  const isOpen = layersPanel.classList.toggle("is-open");
  layersToggle.setAttribute("aria-expanded", String(isOpen));
});

layersPanel.querySelectorAll<HTMLInputElement>("[data-layer]").forEach((control) => {
  const layerName = control.dataset.layer as keyof typeof extendedSystem.layers | undefined;
  if (!layerName) return;
  control.addEventListener("change", () => {
    extendedSystem.layers[layerName].visible = control.checked;
  });
});

// -----------------------------------------------------------------------------
// Solar system interaction: grab the Sun, move the system, and return it
// -----------------------------------------------------------------------------

const raycaster = new THREE.Raycaster();
// Distant stars are small on screen; keep a comfortable world-space pick radius.
raycaster.params.Points = { threshold: 3 };
const pointer = new THREE.Vector2();
const sunDragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -HELD_HEIGHT);
const planetDragPlane = new THREE.Plane();
const starDragPlane = new THREE.Plane();
const dragPoint = new THREE.Vector3();
const dragOffset = new THREE.Vector3();
const planetDragOffset = new THREE.Vector3();
const starDragPoint = new THREE.Vector3();
const starPlaneNormal = new THREE.Vector3();
const planetWorldPosition = new THREE.Vector3();
const planetLocalPosition = new THREE.Vector3();
const starReturnStates: StarReturnState[] = [];
const starReturnTarget = new THREE.Vector3();
const starReturnCurrent = new THREE.Vector3();
const STAR_RETURN_DURATION = 0.8;
const PLANET_RETURN_DURATION = 0.85;

let isDragging = false;
let isDraggingSun = false;
let draggingPlanet: OrbitingPlanet | null = null;
let draggingStarIndex: number | null = null;
let isReturning = false;
let returnProgress = 0;
let activePointerId: number | null = null;

const pickupPosition = new THREE.Vector3();
const returnStartPosition = new THREE.Vector3();
const returnTargetPosition = new THREE.Vector3();

function updatePointer(event: PointerEvent): void {
  const bounds = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
  pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
}

function setStatus(label: string): void {
  const returning = label.startsWith("RETURNING");
  statusLabel!.textContent = label;
  statusDot!.classList.toggle("is-active", label !== "READY" && !returning);
  statusDot!.classList.toggle("is-returning", returning);
}

function refreshIdleStatus(): void {
  const anyPlanetReturning = orbitingPlanets.some((planet) => planet.isReturning);
  if (!isDragging && !isReturning && !anyPlanetReturning && starReturnStates.length === 0) {
    setStatus("READY");
  }
}

function findPlanetForObject(object: THREE.Object3D): OrbitingPlanet | null {
  let current: THREE.Object3D | null = object;

  while (current) {
    const planet = orbitingPlanets.find((candidate) => candidate.mesh === current);
    if (planet) return planet;
    current = current.parent;
  }

  return null;
}

function beginDrag(event: PointerEvent): void {
  isDragging = true;
  activePointerId = event.pointerId;
  isReturning = false;
  controls.enabled = false;
  renderer.domElement.setPointerCapture(event.pointerId);
  appRoot!.classList.add("is-dragging");
  centerHint!.classList.add("is-hidden");
  event.preventDefault();
}

function onPointerDown(event: PointerEvent): void {
  if (event.button !== 0 || isDragging || isReturning) return;
  updatePointer(event);

  // Planets take priority over the Sun and background stars.
  const planetHits = raycaster.intersectObjects(
    orbitingPlanets.map((planet) => planet.mesh),
    true,
  );

  if (planetHits.length > 0) {
    const planet = findPlanetForObject(planetHits[0]!.object);
    if (planet) {
      planet.mesh.getWorldPosition(planetWorldPosition);
      planetDragPlane.setFromNormalAndCoplanarPoint(
        new THREE.Vector3(0, 1, 0),
        planetWorldPosition,
      );
      if (!raycaster.ray.intersectPlane(planetDragPlane, dragPoint)) return;

      draggingPlanet = planet;
      planet.isReturning = false;
      planetDragOffset.copy(planetWorldPosition).sub(dragPoint);
      planetDragOffset.y = 0;
      beginDrag(event);
      setStatus(`MOVING ${planet.name}`);
      return;
    }
  }

  // The Sun moves the complete solar system and returns when released.
  if (raycaster.intersectObject(sunMesh, false).length > 0) {
    if (!raycaster.ray.intersectPlane(sunDragPlane, dragPoint)) return;

    pickupPosition.copy(solarSystem.position);
    dragOffset.copy(solarSystem.position).sub(dragPoint);
    dragOffset.y = 0;
    solarSystem.position.y = HELD_HEIGHT;
    isDraggingSun = true;
    beginDrag(event);
    setStatus("MOVING SUN");
    return;
  }

  // The star field is one Points object, but each vertex is independently pickable.
  const starHits = raycaster.intersectObject(starField, false);
  const starHit = starHits[0];

  if (starHit && starHit.index !== undefined) {
    draggingStarIndex = starHit.index;
    for (let i = starReturnStates.length - 1; i >= 0; i -= 1) {
      if (starReturnStates[i]!.index === draggingStarIndex) starReturnStates.splice(i, 1);
    }
    starPlaneNormal.copy(camera.getWorldDirection(new THREE.Vector3()));
    starDragPlane.setFromNormalAndCoplanarPoint(starPlaneNormal, starHit.point);
    beginDrag(event);
    setStatus("MOVING STAR");
  }
}

function movePlanet(planet: OrbitingPlanet): void {
  if (!raycaster.ray.intersectPlane(planetDragPlane, dragPoint)) return;

  const targetWorldPosition = dragPoint.add(planetDragOffset);
  planetLocalPosition.copy(solarSystem.worldToLocal(targetWorldPosition));
  const radius = THREE.MathUtils.clamp(
    Math.hypot(planetLocalPosition.x, planetLocalPosition.z),
    SUN_RADIUS + 0.55,
    16.5,
  );

  // Update the orbit angle and radius; its normal orbit animation resumes on release.
  // This is only a temporary drag pose. The canonical orbit remains untouched.
  planet.pivot.rotation.y = Math.atan2(-planetLocalPosition.z, planetLocalPosition.x);
  planet.mesh.position.x = radius;
  planet.mesh.position.z = 0;
}

function setStarPosition(index: number, position: THREE.Vector3): void {
  const positions = starField.geometry.getAttribute("position") as THREE.BufferAttribute;
  positions.setXYZ(index, position.x, position.y, position.z);
  positions.needsUpdate = true;

  const glowIndex = starGlowIndexByStar[index]!;
  if (glowIndex >= 0) {
    const glowPositions = starGlowField.geometry.getAttribute("position") as THREE.BufferAttribute;
    glowPositions.setXYZ(glowIndex, position.x, position.y, position.z);
    glowPositions.needsUpdate = true;
  }
}

function moveStar(): void {
  if (draggingStarIndex === null) return;
  if (!raycaster.ray.intersectPlane(starDragPlane, starDragPoint)) return;

  const localPosition = starField.worldToLocal(starDragPoint.clone());
  setStarPosition(draggingStarIndex, localPosition);
}

function onPointerMove(event: PointerEvent): void {
  updatePointer(event);

  if (isDragging) {
    if (activePointerId !== event.pointerId) return;

    if (draggingPlanet) {
      movePlanet(draggingPlanet);
      return;
    }

    if (draggingStarIndex !== null) {
      moveStar();
      return;
    }

    if (isDraggingSun && raycaster.ray.intersectPlane(sunDragPlane, dragPoint)) {
      const nextPosition = dragPoint.add(dragOffset);
      solarSystem.position.x = THREE.MathUtils.clamp(nextPosition.x, -18, 18);
      solarSystem.position.z = THREE.MathUtils.clamp(nextPosition.z, -18, 18);
      solarSystem.position.y = HELD_HEIGHT;
    }
    return;
  }

  const hoveringPlanet = raycaster.intersectObjects(
    orbitingPlanets.map((planet) => planet.mesh),
    true,
  ).length > 0;
  const hoveringSun = raycaster.intersectObject(sunMesh, false).length > 0;
  const hoveringStar = raycaster.intersectObject(starField, false).length > 0;
  renderer.domElement.style.cursor = hoveringPlanet || hoveringSun || hoveringStar
    ? "grab"
    : "default";
}

function releaseDrag(event?: PointerEvent): void {
  if (!isDragging) return;
  if (event && activePointerId !== event.pointerId) return;

  const releasedPlanet = draggingPlanet;
  const releasedStarIndex = draggingStarIndex;
  const releasedSun = isDraggingSun;

  isDragging = false;
  activePointerId = null;
  controls.enabled = true;
  appRoot!.classList.remove("is-dragging");
  renderer.domElement.style.cursor = "default";

  if (releasedPlanet) {
    releasedPlanet.isReturning = true;
    releasedPlanet.returnStartAngle = releasedPlanet.pivot.rotation.y;
    releasedPlanet.returnStartRadius = releasedPlanet.mesh.position.x;
    releasedPlanet.returnElapsed = 0;
    setStatus(`RETURNING ${releasedPlanet.name}`);
  }

  if (releasedStarIndex !== null) {
    const positions = starField.geometry.getAttribute("position") as THREE.BufferAttribute;
    starReturnStates.push({
      index: releasedStarIndex,
      start: new THREE.Vector3(
        positions.getX(releasedStarIndex),
        positions.getY(releasedStarIndex),
        positions.getZ(releasedStarIndex),
      ),
      elapsed: 0,
    });
    setStatus("RETURNING STAR");
  }

  draggingPlanet = null;
  draggingStarIndex = null;

  if (releasedSun) {
    isDraggingSun = false;
    isReturning = true;
    returnProgress = 0;
    returnStartPosition.copy(solarSystem.position);
    returnTargetPosition.copy(pickupPosition);
    setStatus("RETURNING SUN");
  } else if (!releasedPlanet && releasedStarIndex === null) {
    refreshIdleStatus();
  }
}

renderer.domElement.addEventListener("pointerdown", onPointerDown);
renderer.domElement.addEventListener("pointermove", onPointerMove);
window.addEventListener("pointerup", releaseDrag);
window.addEventListener("pointercancel", releaseDrag);

// Reset the system's position without stopping orbital or axial rotation.
function resetSolarSystem(): void {
  isDragging = false;
  isDraggingSun = false;
  draggingPlanet = null;
  draggingStarIndex = null;
  isReturning = false;
  returnProgress = 0;
  activePointerId = null;
  controls.enabled = true;
  appRoot!.classList.remove("is-dragging");
  starReturnStates.length = 0;

  for (const planet of orbitingPlanets) {
    planet.isReturning = false;
    planet.pivot.rotation.y = planet.orbitPhase;
    planet.mesh.position.set(planet.orbitRadius, 0, 0);
  }

  for (let i = 0; i < STAR_COUNT; i += 1) {
    const offset = i * 3;
    setStarPosition(i, new THREE.Vector3(
      starHomePositions[offset]!,
      starHomePositions[offset + 1]!,
      starHomePositions[offset + 2]!,
    ));
  }

  solarSystem.position.set(0, 0, 0);
  renderer.domElement.style.cursor = "default";
  centerHint!.classList.remove("is-hidden");
  setStatus("READY");
}

resetButton.addEventListener("click", resetSolarSystem);
window.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key.toLowerCase() === "r") resetSolarSystem();
});

// -----------------------------------------------------------------------------
// Animation loop
// -----------------------------------------------------------------------------

const clock = new THREE.Clock();

function animate(): void {
  const delta = Math.min(clock.getDelta(), 0.04);
  const elapsedTime = clock.elapsedTime;

  // Animate the Sun's plasma, corona, and each planet's procedural atmosphere/surface.
  sunMesh.rotation.y += delta * 0.22;
  updateDynamicSurface(sunSurfaceMaterial, elapsedTime);
  updateDynamicSurface(coronaMaterial, elapsedTime);
  for (const material of prominenceMaterials) {
    updateDynamicSurface(material, elapsedTime);
  }
  updateFlareCameraDirection();
  updateSolarProminences(elapsedTime);
  updateSolarRays(elapsedTime);

  solarSystem.getWorldPosition(sunWorldPosition);
  for (const material of planetSurfaceMaterials) {
    updateDynamicSurface(material, elapsedTime);
    const sunPositionUniform = material.uniforms.uSunPosition as { value: THREE.Vector3 };
    sunPositionUniform.value.copy(sunWorldPosition);
  }

  for (const material of planetAtmosphereMaterials) {
    updateDynamicSurface(material, elapsedTime);
  }

  for (const planet of orbitingPlanets) {
    // The canonical orbital phase advances even while the planet is being dragged.
    planet.orbitPhase += planet.orbitSpeed * delta;

    if (draggingPlanet === planet) {
      // Keep the temporary pointer-controlled pose while held.
    } else if (planet.isReturning) {
      planet.returnElapsed += delta;
      const progress = Math.min(planet.returnElapsed / PLANET_RETURN_DURATION, 1);
      const eased = progress * progress * (3 - 2 * progress);

      // Follow the continuously advancing canonical phase, not the temporary drag pose.
      const angleDifference = Math.atan2(
        Math.sin(planet.orbitPhase - planet.returnStartAngle),
        Math.cos(planet.orbitPhase - planet.returnStartAngle),
      );
      planet.pivot.rotation.y = planet.returnStartAngle + angleDifference * eased;
      planet.mesh.position.x = THREE.MathUtils.lerp(
        planet.returnStartRadius,
        planet.orbitRadius,
        eased,
      );
      planet.mesh.position.z = 0;

      if (progress >= 1) {
        planet.pivot.rotation.y = planet.orbitPhase;
        planet.mesh.position.set(planet.orbitRadius, 0, 0);
        planet.isReturning = false;
        refreshIdleStatus();
      }
    } else {
      planet.pivot.rotation.y = planet.orbitPhase;
    }

    planet.mesh.rotation.y += planet.rotationSpeed * delta;

  }

  extendedSystem.update(delta, elapsedTime);

  // Unequal brightness, gentle shimmer, and occasional sharp stellar pulses.
  const starColors = starField.geometry.getAttribute("color") as THREE.BufferAttribute;
  const glowColors = starGlowField.geometry.getAttribute("color") as THREE.BufferAttribute;

  for (let i = 0; i < STAR_COUNT; i += 1) {
    const wave = (Math.sin(elapsedTime * starPulseFrequency[i]! + starPulsePhase[i]!) + 1) * 0.5;
    const strength = starPulseStrength[i]!;
    const pulse = strength > 0.55
      ? 0.2 + Math.pow(wave, 12) * (1.15 + strength * 0.45)
      : 0.82 + (wave - 0.5) * strength * 0.72;

    const r = starBaseColors[i * 3]! * pulse;
    const g = starBaseColors[i * 3 + 1]! * pulse;
    const b = starBaseColors[i * 3 + 2]! * pulse;
    starColors.setXYZ(i, r, g, b);

    const glowIndex = starGlowIndexByStar[i]!;
    if (glowIndex >= 0) {
      const glowPulse = pulse * 1.4;
      glowColors.setXYZ(
        glowIndex,
        starBaseColors[i * 3]! * glowPulse,
        starBaseColors[i * 3 + 1]! * glowPulse,
        starBaseColors[i * 3 + 2]! * glowPulse,
      );
    }
  }

  starColors.needsUpdate = true;
  glowColors.needsUpdate = true;

  // Stars move temporarily while held, then return to their exact generated coordinates.
  for (let i = starReturnStates.length - 1; i >= 0; i -= 1) {
    const state = starReturnStates[i]!;
    state.elapsed += delta;
    const progress = Math.min(state.elapsed / STAR_RETURN_DURATION, 1);
    const eased = progress * progress * (3 - 2 * progress);
    const offset = state.index * 3;

    starReturnTarget.set(
      starHomePositions[offset]!,
      starHomePositions[offset + 1]!,
      starHomePositions[offset + 2]!,
    );
    starReturnCurrent.lerpVectors(state.start, starReturnTarget, eased);
    setStarPosition(state.index, starReturnCurrent);

    if (progress >= 1) {
      setStarPosition(state.index, starReturnTarget);
      starReturnStates.splice(i, 1);
      refreshIdleStatus();
    }
  }

  if (isReturning && !isDragging) {
    returnProgress = Math.min(returnProgress + delta / RETURN_DURATION, 1);
    const easedProgress = returnProgress * returnProgress * (3 - 2 * returnProgress);

    solarSystem.position.lerpVectors(
      returnStartPosition,
      returnTargetPosition,
      easedProgress,
    );
    solarSystem.position.y += Math.sin(Math.PI * returnProgress) * RETURN_ARC_HEIGHT;

    if (returnProgress >= 1) {
      solarSystem.position.copy(returnTargetPosition);
      isReturning = false;
      refreshIdleStatus();
    }
  }

  cinematicSpace.update(elapsedTime);
  controls.update();
  cinematicSpace.render();
  requestAnimationFrame(animate);
}

function onResize(): void {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  cinematicSpace.resize(window.innerWidth, window.innerHeight, pixelRatio);
}

window.addEventListener("resize", onResize);
animate();
