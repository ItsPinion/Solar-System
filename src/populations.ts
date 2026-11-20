import * as THREE from "three";

export interface PlanetAnchor {
  name: string;
  mesh: THREE.Mesh;
  pivot: THREE.Group;
  orbitRadius: number;
  orbitSpeed: number;
}

type PopulationLayerName =
  | "dwarfs"
  | "moons"
  | "asteroids"
  | "transneptunian"
  | "comets"
  | "medium"
  | "spacecraft"
  | "heliosphere";

interface DwarfConfig {
  name: string;
  distance: number;
  radius: number;
  color: number;
  speed: number;
  phase: number;
  flattening?: number;
  hasRing?: boolean;
  inclination: number;
  ascendingNode: number;
}

interface DwarfBody {
  name: string;
  mesh: THREE.Mesh;
  pivot: THREE.Group;
  radius: number;
  distance: number;
  speed: number;
  phase: number;
}

interface MoonRecord {
  name: string;
  parent: string;
  radius: number;
  distance: number;
  speed: number;
  color: number;
}

interface MoonAnimator {
  anchor: THREE.Group;
  orbit: THREE.Group;
  parent: THREE.Object3D;
  mesh: THREE.Object3D;
  speed: number;
  spin: number;
}

interface OrbitAnimator {
  pivot: THREE.Group;
  mesh: THREE.Mesh;
  speed: number;
  spin: number;
}

interface CometRecord {
  head: THREE.Mesh;
  orbitA: number;
  eccentricity: number;
  inclination: number;
  period: number;
  phase: number;
  ascendingNode: number;
  orbitTrack: THREE.LineLoop;
  motionTrail: THREE.Line;
  history: THREE.Vector3[];
  historyTimer: number;
  tailIon: THREE.Line;
  tailDust: THREE.Line;
  tailLength: number;
  tailSegments: number;
}

interface ProbeRecord {
  group: THREE.Group;
  base: THREE.Vector3;
  travel: THREE.Vector3;
  speed: number;
  phase: number;
}

export interface ExtendedSolarSystem {
  layers: Record<PopulationLayerName, THREE.Group>;
  update(delta: number, elapsedTime: number): void;
  counts: {
    dwarfPlanets: number;
    namedMoons: number;
    generatedMoonlets: number;
    namedAsteroids: number;
    smallBodies: number;
    comets: number;
    spacecraft: number;
  };
}

const randomBetween = (min: number, max: number): number => min + Math.random() * (max - min);

function createLabel(text: string, color = "rgba(218,232,255,0.94)"): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 96;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas 2D context is unavailable.");

  context.font = "500 34px monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = color;
  context.fillText(text.toUpperCase(), 256, 48);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false,
  }));
  sprite.scale.set(0.92, 0.17, 1);
  sprite.renderOrder = 5;
  return sprite;
}

function addOrbit(parent: THREE.Object3D, radius: number, opacity = 0.12, inclination = 0): THREE.LineLoop {
  const points: THREE.Vector3[] = [];
  const segments = 180;
  for (let i = 0; i < segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.LineLoop(geometry, new THREE.LineBasicMaterial({
    color: 0x91a7c9,
    transparent: true,
    opacity,
    depthWrite: false,
  }));
  line.rotation.x = inclination;
  parent.add(line);
  return line;
}

function addBeltPoints(
  parent: THREE.Group,
  count: number,
  radiusMin: number,
  radiusMax: number,
  thickness: number,
  palette: readonly number[],
  size: number,
  opacity: number,
  inclination = 0,
  clusterCenters?: readonly number[],
  radialGaps?: readonly { center: number; width: number }[],
  inclinationSpread = 0.08,
): THREE.Points {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const colorObjects = palette.map((color) => new THREE.Color(color));

  for (let i = 0; i < count; i += 1) {
    let radius = randomBetween(radiusMin, radiusMax);
    if (radialGaps?.length) {
      for (let attempt = 0; attempt < 18; attempt += 1) {
        const insideGap = radialGaps.some((gap) => Math.abs(radius - gap.center) < gap.width);
        if (!insideGap) break;
        radius = randomBetween(radiusMin, radiusMax);
      }
    }
    let angle: number;

    if (clusterCenters?.length) {
      const center = clusterCenters[Math.floor(Math.random() * clusterCenters.length)]!;
      angle = center + (Math.random() - 0.5) * 0.72;
    } else {
      angle = Math.random() * Math.PI * 2;
    }

    const orbitalPerturbation = (Math.random() - 0.5) * thickness * 0.08;
    radius += orbitalPerturbation;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    // Each particle belongs to a slightly different orbital plane. The random
    // node and inclination create genuine volumetric depth instead of a perfect tube.
    const particleInclination = randomBetween(-inclinationSpread, inclinationSpread);
    const particleNode = Math.random() * Math.PI * 2;
    const orbitalDepth = radius * Math.sin(particleInclination) * Math.sin(angle - particleNode);
    const verticalEnvelope = 0.58 + 0.42 * Math.abs(Math.sin(angle * 2.7 + radius * 1.8));
    const y = orbitalDepth + (Math.random() - 0.5) * thickness * verticalEnvelope;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    const color = colorObjects[Math.floor(Math.random() * colorObjects.length)]!;
    const tint = randomBetween(0.55, 1.2);
    colors[i * 3] = color.r * tint;
    colors[i * 3 + 1] = color.g * tint;
    colors[i * 3 + 2] = color.b * tint;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const points = new THREE.Points(geometry, new THREE.PointsMaterial({
    size,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity,
    depthWrite: false,
  }));
  points.rotation.x = inclination;
  points.frustumCulled = false;
  parent.add(points);
  return points;
}

function addNearEarthScatter(
  parent: THREE.Group,
  count: number,
  palette: readonly number[],
  size: number,
  opacity: number,
): THREE.Points {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const colorObjects = palette.map((color) => new THREE.Color(color));

  for (let i = 0; i < count; i += 1) {
    // Each near-Earth object is sampled from its own eccentric, inclined orbit,
    // not from a shared annular radius band.
    const semiMajorAxis = randomBetween(2.7, 5.5);
    const eccentricity = randomBetween(0.12, 0.58);
    const anomaly = Math.random() * Math.PI * 2;
    const inclination = randomBetween(-0.42, 0.42);
    const x = semiMajorAxis * (Math.cos(anomaly) - eccentricity);
    const orbitZ = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity) * Math.sin(anomaly);
    const y = orbitZ * Math.sin(inclination) + randomBetween(-0.08, 0.08);
    const z = orbitZ * Math.cos(inclination);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    const color = colorObjects[Math.floor(Math.random() * colorObjects.length)]!;
    const tint = randomBetween(0.58, 1.12);
    colors[i * 3] = color.r * tint;
    colors[i * 3 + 1] = color.g * tint;
    colors[i * 3 + 2] = color.b * tint;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const points = new THREE.Points(geometry, new THREE.PointsMaterial({
    size,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity,
    depthWrite: false,
  }));
  points.frustumCulled = false;
  parent.add(points);
  return points;
}

function addAsteroidInstances(
  parent: THREE.Group,
  count: number,
  positionFactory: () => THREE.Vector3,
  minScale: number,
  maxScale: number,
  palette: readonly number[],
): THREE.InstancedMesh {
  const geometry = new THREE.IcosahedronGeometry(1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.88,
    metalness: 0.015,
    emissive: 0x493322,
    emissiveIntensity: 0.58,
    flatShading: true,
    vertexColors: true,
  });
  const rocks = new THREE.InstancedMesh(geometry, material, count);
  rocks.frustumCulled = false;
  rocks.castShadow = false;
  rocks.receiveShadow = false;

  const transform = new THREE.Object3D();
  const colors = palette.map((color) => new THREE.Color(color));

  for (let index = 0; index < count; index += 1) {
    const position = positionFactory();
    const scale = randomBetween(minScale, maxScale);
    transform.position.copy(position);
    transform.rotation.set(
      randomBetween(0, Math.PI * 2),
      randomBetween(0, Math.PI * 2),
      randomBetween(0, Math.PI * 2),
    );
    transform.scale.set(
      scale * randomBetween(0.72, 1.3),
      scale * randomBetween(0.65, 1.05),
      scale * randomBetween(0.72, 1.2),
    );
    transform.updateMatrix();
    rocks.setMatrixAt(index, transform.matrix);

    const baseColor = colors[Math.floor(Math.random() * colors.length)]!;
    rocks.setColorAt(index, baseColor.clone().multiplyScalar(randomBetween(0.72, 1.16)));
  }

  rocks.instanceMatrix.needsUpdate = true;
  if (rocks.instanceColor) rocks.instanceColor.needsUpdate = true;
  parent.add(rocks);
  return rocks;
}

function randomInclinedBeltPosition(
  minRadius: number,
  maxRadius: number,
  verticalThickness: number,
  inclinationSpread: number,
): THREE.Vector3 {
  const radius = randomBetween(minRadius, maxRadius);
  const angle = Math.random() * Math.PI * 2;
  const inclination = randomBetween(-inclinationSpread, inclinationSpread);
  const node = Math.random() * Math.PI * 2;
  const y = radius * Math.sin(inclination) * Math.sin(angle - node)
    + randomBetween(-verticalThickness * 0.5, verticalThickness * 0.5);
  return new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
}

function addSphericalCloud(
  parent: THREE.Group,
  count: number,
  minRadius: number,
  maxRadius: number,
  palette: readonly number[],
  size: number,
  opacity: number,
): THREE.Points {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const colorObjects = palette.map((color) => new THREE.Color(color));

  for (let i = 0; i < count; i += 1) {
    const y = randomBetween(-1, 1);
    const azimuth = Math.random() * Math.PI * 2;
    const radial = Math.sqrt(1 - y * y);
    const radius = randomBetween(minRadius, maxRadius);
    positions[i * 3] = Math.cos(azimuth) * radial * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(azimuth) * radial * radius;

    const color = colorObjects[Math.floor(Math.random() * colorObjects.length)]!;
    const tint = randomBetween(0.45, 1.15);
    colors[i * 3] = color.r * tint;
    colors[i * 3 + 1] = color.g * tint;
    colors[i * 3 + 2] = color.b * tint;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const cloud = new THREE.Points(geometry, new THREE.PointsMaterial({
    size,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity,
    depthWrite: false,
  }));
  cloud.frustumCulled = false;
  parent.add(cloud);
  return cloud;
}

function makeRock(radius: number, color: number): THREE.Mesh {
  const geometry = new THREE.IcosahedronGeometry(radius, 1);
  const positions = geometry.getAttribute("position") as THREE.BufferAttribute;
  for (let i = 0; i < positions.count; i += 1) {
    const factor = randomBetween(0.88, 1.12);
    positions.setXYZ(i, positions.getX(i) * factor, positions.getY(i) * factor, positions.getZ(i) * factor);
  }
  geometry.computeVertexNormals();

  return new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
    color,
    roughness: 0.94,
    metalness: 0.02,
    emissive: color,
    emissiveIntensity: 0.08,
  }));
}

function addNamedMoon(
  parent: THREE.Object3D,
  layer: THREE.Group,
  record: MoonRecord,
  animators: MoonAnimator[],
  showOrbit: boolean,
): THREE.Mesh {
  const anchor = new THREE.Group();
  layer.add(anchor);

  const orbit = new THREE.Group();
  orbit.rotation.y = Math.random() * Math.PI * 2;
  orbit.rotation.z = randomBetween(-0.12, 0.12);
  anchor.add(orbit);

  const MOON_BODY_SCALE = 1.75;
  const MOON_ORBIT_SCALE = 2.0;
  if (showOrbit) {
    addOrbit(orbit, record.distance * MOON_ORBIT_SCALE, 0.17, randomBetween(-0.08, 0.08));
  }
  const moon = makeRock(record.radius, record.color);
  moon.scale.setScalar(MOON_BODY_SCALE);
  moon.position.set(record.distance * MOON_ORBIT_SCALE, 0, 0);
  moon.userData.celestialName = record.name;
  orbit.add(moon);

  animators.push({
    anchor,
    orbit,
    parent,
    mesh: moon,
    speed: record.speed,
    spin: randomBetween(-0.3, 0.3),
  });
  return moon;
}

function createProbeModel(name: string, color = 0xc9d6e4): THREE.Group {
  const group = new THREE.Group();
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.72,
    roughness: 0.35,
    emissive: 0x24364c,
    emissiveIntensity: 0.18,
  });
  const panelMaterial = new THREE.MeshStandardMaterial({
    color: 0x244c86,
    metalness: 0.5,
    roughness: 0.42,
    emissive: 0x10294d,
    emissiveIntensity: 0.32,
  });
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xc99b4e,
    metalness: 0.78,
    roughness: 0.32,
  });

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.055, 0.085), bodyMaterial);
  group.add(body);

  for (const side of [-1, 1]) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.06, 0.006), panelMaterial);
    panel.position.set(side * 0.115, 0, 0);
    group.add(panel);
    for (let line = -2; line <= 2; line += 1) {
      const cell = new THREE.Mesh(
        new THREE.BoxGeometry(0.002, 0.055, 0.007),
        goldMaterial,
      );
      cell.position.set(side * 0.115 + line * 0.026, 0, 0.004);
      group.add(cell);
    }
  }

  const antenna = new THREE.Mesh(
    new THREE.ConeGeometry(0.045, 0.025, 12, 1, true),
    new THREE.MeshStandardMaterial({ color: 0xdde4e9, metalness: 0.82, roughness: 0.28, side: THREE.DoubleSide }),
  );
  antenna.rotation.x = Math.PI / 2;
  antenna.position.set(0, 0.042, 0);
  group.add(antenna);
  group.userData.celestialName = name;
  return group;
}

function createLine(color: number, opacity: number, pointCount = 2): THREE.Line {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(pointCount * 3), 3).setUsage(THREE.DynamicDrawUsage),
  );
  geometry.setDrawRange(0, pointCount);
  const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
  }));
  line.frustumCulled = false;
  return line;
}

function setCometOrbitPoint(
  x: number,
  orbitalZ: number,
  inclination: number,
  ascendingNode: number,
  target: THREE.Vector3,
): THREE.Vector3 {
  const tiltedY = orbitalZ * Math.sin(inclination);
  const tiltedZ = orbitalZ * Math.cos(inclination);
  const cosNode = Math.cos(ascendingNode);
  const sinNode = Math.sin(ascendingNode);

  return target.set(
    x * cosNode + tiltedZ * sinNode,
    tiltedY,
    -x * sinNode + tiltedZ * cosNode,
  );
}

export function createExtendedSolarSystem(
  solarSystem: THREE.Group,
  planets: readonly PlanetAnchor[],
): ExtendedSolarSystem {
  const layers: Record<PopulationLayerName, THREE.Group> = {
    dwarfs: new THREE.Group(),
    moons: new THREE.Group(),
    asteroids: new THREE.Group(),
    transneptunian: new THREE.Group(),
    comets: new THREE.Group(),
    medium: new THREE.Group(),
    spacecraft: new THREE.Group(),
    heliosphere: new THREE.Group(),
  };
  for (const [name, group] of Object.entries(layers)) {
    group.name = name;
    solarSystem.add(group);
  }

  const planetByName = new Map(planets.map((planet) => [planet.name, planet]));
  const dwarfByName = new Map<string, DwarfBody>();
  const dwarfAnimators: OrbitAnimator[] = [];
  const moonAnimators: MoonAnimator[] = [];
  const cometAnimators: CometRecord[] = [];
  const probeAnimators: ProbeRecord[] = [];
  const rotatingClouds: Array<{ group: THREE.Group; speed: number }> = [];

  // --- Dwarf planets ---------------------------------------------------------

  const dwarfConfigs: DwarfConfig[] = [
    { name: "CERES", distance: 6.12, radius: 0.052, color: 0x958f86, speed: 0.17, phase: 1.1, inclination: 0.08, ascendingNode: 0.7 },
    { name: "PLUTO", distance: 16.2, radius: 0.078, color: 0xb98d75, speed: 0.032, phase: 2.4, inclination: 0.28, ascendingNode: 1.9 },
    { name: "HAUMEA", distance: 17.1, radius: 0.069, color: 0xbcb9b2, speed: 0.028, phase: 4.2, flattening: 0.56, hasRing: true, inclination: 0.18, ascendingNode: 2.8 },
    { name: "MAKEMAKE", distance: 18.45, radius: 0.066, color: 0xa96d45, speed: 0.025, phase: 0.55, inclination: 0.22, ascendingNode: 4.1 },
    { name: "ERIS", distance: 20.6, radius: 0.075, color: 0xc9d0d6, speed: 0.021, phase: 5.4, inclination: 0.31, ascendingNode: 5.3 },
  ];

  for (const config of dwarfConfigs) {
    const pivot = new THREE.Group();
    pivot.rotation.order = "YXZ";
    pivot.rotation.y = config.phase;
    pivot.rotation.z = config.inclination;
    pivot.rotation.x = config.ascendingNode;
    solarSystem.add(pivot);
    const dwarfOrbit = addOrbit(layers.dwarfs, config.distance, 0.10);
    dwarfOrbit.rotation.order = "YXZ";
    dwarfOrbit.rotation.z = config.inclination;
    dwarfOrbit.rotation.x = config.ascendingNode;

    const mesh = makeRock(config.radius, config.color);
    mesh.position.set(config.distance, 0, 0);
    if (config.flattening) {
      mesh.scale.set(1.25 * 1.7, config.flattening * 1.7, 0.9 * 1.7);
    } else {
      mesh.scale.setScalar(1.7);
    }
    pivot.add(mesh);

    const label = createLabel(config.name, "rgba(225,235,250,0.92)");
    label.position.set(config.distance, config.radius * 1.7 + 0.20, 0);
    label.scale.set(0.65, 0.12, 1);
    pivot.add(label);

    if (config.hasRing) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(config.radius * 1.25, config.radius * 1.7, 72),
        new THREE.MeshStandardMaterial({
          color: 0xb9b4a9,
          transparent: true,
          opacity: 0.25,
          side: THREE.DoubleSide,
          roughness: 0.8,
          depthWrite: false,
        }),
      );
      ring.rotation.x = -Math.PI / 2;
      mesh.add(ring);
    }

    const body: DwarfBody = {
      name: config.name,
      mesh,
      pivot,
      radius: config.radius,
      distance: config.distance,
      speed: config.speed,
      phase: config.phase,
    };
    dwarfByName.set(config.name, body);
    dwarfAnimators.push({
      pivot,
      mesh,
      speed: config.speed,
      spin: randomBetween(0.25, 0.8),
    });
  }

  // --- Ring systems around all four giant planets ---------------------------

  const ringSpecs: Record<string, Array<{ inner: number; outer: number; color: number; opacity: number }>> = {
    JUPITER: [
      { inner: 0.36, outer: 0.40, color: 0xbda98a, opacity: 0.17 },
      { inner: 0.405, outer: 0.43, color: 0x8d806b, opacity: 0.10 },
    ],
    SATURN: [
      { inner: 0.67, outer: 0.73, color: 0xead8b1, opacity: 0.44 },
      { inner: 0.75, outer: 0.92, color: 0xc9b18d, opacity: 0.26 },
      { inner: 0.95, outer: 1.04, color: 0xe5d5b5, opacity: 0.34 },
    ],
    URANUS: [
      { inner: 0.37, outer: 0.405, color: 0x8099a2, opacity: 0.18 },
    ],
    NEPTUNE: [
      { inner: 0.235, outer: 0.265, color: 0x7894b3, opacity: 0.18 },
      { inner: 0.275, outer: 0.30, color: 0x536987, opacity: 0.10 },
    ],
  };

  for (const [planetName, specs] of Object.entries(ringSpecs)) {
    const parent = planetByName.get(planetName);
    if (!parent) continue;
    const ringGroup = new THREE.Group();
    parent.mesh.add(ringGroup);
    for (const spec of specs) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(spec.inner, spec.outer, 128),
        new THREE.MeshStandardMaterial({
          color: spec.color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: spec.opacity,
          roughness: 0.9,
          metalness: 0.05,
          depthWrite: false,
        }),
      );
      ring.rotation.x = -Math.PI / 2;
      ring.rotation.z = randomBetween(-0.1, 0.1);
      ringGroup.add(ring);
    }
  }

  // Named asteroids and small near-Earth bodies, including two asteroid-moon systems.
  const asteroidMeshes = new Map<string, THREE.Mesh>();
  const namedAsteroidConfigs = [
    { name: "243 IDA", key: "IDA", distance: 6.02, radius: 0.028, color: 0x8e8175, speed: 0.18, phase: 0.9 },
    { name: "65803 DIDYMOS", key: "DIDYMOS", distance: 4.92, radius: 0.026, color: 0x9c8a78, speed: 0.32, phase: 2.3 },
    { name: "BENNU", key: "BENNU", distance: 3.82, radius: 0.019, color: 0x776b60, speed: 0.48, phase: 4.5 },
    { name: "RYUGU", key: "RYUGU", distance: 4.16, radius: 0.022, color: 0x665c54, speed: 0.41, phase: 1.8 },
    { name: "APOPHIS", key: "APOPHIS", distance: 4.65, radius: 0.018, color: 0xa08f7e, speed: 0.35, phase: 5.4 },
  ];

  for (const config of namedAsteroidConfigs) {
    const pivot = new THREE.Group();
    pivot.rotation.y = config.phase;
    layers.asteroids.add(pivot);
    addOrbit(layers.asteroids, config.distance, 0.085, randomBetween(-0.08, 0.08));

    const mesh = makeRock(config.radius, config.color);
    mesh.position.set(config.distance, 0, 0);
    mesh.userData.celestialName = config.name;
    pivot.add(mesh);
    asteroidMeshes.set(config.key, mesh);

    const label = createLabel(config.name, "rgba(191,180,166,0.9)");
    label.position.set(config.distance, config.radius + 0.1, 0);
    label.scale.set(0.7, 0.12, 1);
    pivot.add(label);

    dwarfAnimators.push({ pivot, mesh, speed: config.speed, spin: randomBetween(0.2, 0.75) });
  }

  // --- Named major moons ----------------------------------------------------

  const namedMoons: MoonRecord[] = [
    { name: "Moon", parent: "EARTH", radius: 0.044, distance: 0.43, speed: 1.8, color: 0xb9bdc6 },
    { name: "Phobos", parent: "MARS", radius: 0.014, distance: 0.18, speed: 2.6, color: 0x77736d },
    { name: "Deimos", parent: "MARS", radius: 0.011, distance: 0.25, speed: 1.5, color: 0x9c9284 },
    { name: "Io", parent: "JUPITER", radius: 0.034, distance: 0.56, speed: 1.15, color: 0xd8b65f },
    { name: "Europa", parent: "JUPITER", radius: 0.029, distance: 0.72, speed: 0.84, color: 0xc8c1a8 },
    { name: "Ganymede", parent: "JUPITER", radius: 0.047, distance: 0.91, speed: 0.62, color: 0x8c8172 },
    { name: "Callisto", parent: "JUPITER", radius: 0.042, distance: 1.12, speed: 0.46, color: 0x5d544c },
    { name: "Amalthea", parent: "JUPITER", radius: 0.014, distance: 0.43, speed: 1.5, color: 0x9a5940 },
    { name: "Titan", parent: "SATURN", radius: 0.047, distance: 0.72, speed: 0.62, color: 0xb88748 },
    { name: "Enceladus", parent: "SATURN", radius: 0.019, distance: 0.47, speed: 1.2, color: 0xdde6eb },
    { name: "Rhea", parent: "SATURN", radius: 0.027, distance: 0.89, speed: 0.48, color: 0xc4c6c8 },
    { name: "Iapetus", parent: "SATURN", radius: 0.024, distance: 1.16, speed: 0.32, color: 0xa49a8c },
    { name: "Mimas", parent: "SATURN", radius: 0.015, distance: 0.38, speed: 1.6, color: 0xb5b9c0 },
    { name: "Titania", parent: "URANUS", radius: 0.027, distance: 0.42, speed: 0.64, color: 0xaaa9a3 },
    { name: "Oberon", parent: "URANUS", radius: 0.025, distance: 0.56, speed: 0.48, color: 0x8c8982 },
    { name: "Ariel", parent: "URANUS", radius: 0.018, distance: 0.34, speed: 0.85, color: 0xc0c3bf },
    { name: "Triton", parent: "NEPTUNE", radius: 0.031, distance: 0.46, speed: -0.72, color: 0xc8c1b8 },
    { name: "Nereid", parent: "NEPTUNE", radius: 0.014, distance: 0.68, speed: 0.32, color: 0x968d83 },
    { name: "Charon", parent: "PLUTO", radius: 0.036, distance: 0.16, speed: 0.58, color: 0xaaa49d },
    { name: "Nix", parent: "PLUTO", radius: 0.010, distance: 0.23, speed: 0.42, color: 0xb8b3a8 },
    { name: "Hydra", parent: "PLUTO", radius: 0.010, distance: 0.28, speed: 0.33, color: 0xb8b3a8 },
    { name: "Hiʻiaka", parent: "HAUMEA", radius: 0.014, distance: 0.15, speed: 0.78, color: 0xb9b8b2 },
    { name: "Namaka", parent: "HAUMEA", radius: 0.010, distance: 0.20, speed: 0.55, color: 0x8d8d89 },
    { name: "Dysnomia", parent: "ERIS", radius: 0.016, distance: 0.17, speed: 0.62, color: 0xa6a9ad },
    { name: "MK2", parent: "MAKEMAKE", radius: 0.010, distance: 0.14, speed: 0.7, color: 0x8f8277 },
    { name: "Dactyl", parent: "IDA", radius: 0.009, distance: 0.052, speed: 1.8, color: 0xaaa094 },
    { name: "Dimorphos", parent: "DIDYMOS", radius: 0.011, distance: 0.061, speed: 2.4, color: 0x8b8175 },
  ];

  const moonParents = new Map<string, THREE.Object3D>();
  const moonMeshes = new Map<string, THREE.Mesh>();
  for (const planet of planets) moonParents.set(planet.name, planet.mesh);
  for (const dwarf of dwarfByName.values()) moonParents.set(dwarf.name, dwarf.mesh);
  for (const [key, asteroid] of asteroidMeshes) moonParents.set(key, asteroid);

  for (const moon of namedMoons) {
    const parent = moonParents.get(moon.parent);
    if (parent) {
      moonMeshes.set(moon.name, addNamedMoon(parent, layers.moons, moon, moonAnimators, true));
    }
  }

  function addSurfaceLander(
    name: string,
    host: THREE.Object3D,
    hostRadius: number,
    longitude: number,
    latitude: number,
    modelScale: number,
  ): void {
    const anchor = new THREE.Group();
    layers.spacecraft.add(anchor);

    const mount = new THREE.Group();
    anchor.add(mount);

    const cosLatitude = Math.cos(latitude);
    const normal = new THREE.Vector3(
      cosLatitude * Math.cos(longitude),
      Math.sin(latitude),
      cosLatitude * Math.sin(longitude),
    ).normalize();
    mount.position.copy(normal).multiplyScalar(hostRadius * 1.012);
    mount.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);

    const model = createProbeModel(name, 0xc9ad7c);
    model.scale.setScalar(modelScale);
    mount.add(model);

    moonAnimators.push({
      anchor,
      orbit: mount,
      parent: host,
      mesh: model,
      speed: 0,
      spin: 0,
    });
  }

  // Landers and surface missions are separate spacecraft-layer objects, but
  // their anchors follow the host body's world position while it moves.
  const marsHost = planetByName.get("MARS");
  if (marsHost) {
    addSurfaceLander("VIKING 1 LANDER", marsHost.mesh, 0.105 * 2.4, 0.55, 0.22, 0.22);
    addSurfaceLander("VIKING 2 LANDER", marsHost.mesh, 0.105 * 2.4, 2.65, -0.18, 0.22);
    addSurfaceLander("INSIGHT LANDER", marsHost.mesh, 0.105 * 2.4, 4.7, 0.08, 0.22);
  }

  const titanMoon = moonMeshes.get("Titan");
  if (titanMoon) {
    addSurfaceLander("HUYGENS LANDER", titanMoon, 0.047 * 1.75, 1.2, 0.3, 0.075);
  }

  // Add 180 illustrative minor moonlets to the giant-planet and dwarf-planet
  // systems. These are generated visual objects, not claims of named discoveries.
  const moonletDistribution: Array<{ parent: string; count: number }> = [
    { parent: "JUPITER", count: 50 },
    { parent: "SATURN", count: 58 },
    { parent: "URANUS", count: 28 },
    { parent: "NEPTUNE", count: 26 },
    { parent: "EARTH", count: 3 },
    { parent: "MARS", count: 5 },
    { parent: "PLUTO", count: 3 },
    { parent: "HAUMEA", count: 2 },
    { parent: "MAKEMAKE", count: 2 },
    { parent: "ERIS", count: 3 },
  ];

  let generatedMoonlets = 0;
  for (const allocation of moonletDistribution) {
    const parent = moonParents.get(allocation.parent);
    if (!parent) continue;
    for (let i = 0; i < allocation.count; i += 1) {
      const orbitRadius = (randomBetween(0.34, 0.98) + i * 0.009) * 1.8;
      const anchor = new THREE.Group();
      layers.moons.add(anchor);

      const orbit = new THREE.Group();
      orbit.rotation.y = Math.random() * Math.PI * 2;
      orbit.rotation.z = randomBetween(-0.24, 0.24);
      anchor.add(orbit);

      const moonlet = makeRock(randomBetween(0.0065, 0.0125), [0x938f89, 0xb8b2a6, 0x6f777e, 0x9d8776][i % 4]!);
      moonlet.position.set(orbitRadius, 0, 0);
      orbit.add(moonlet);
      moonAnimators.push({
        anchor,
        orbit,
        parent,
        mesh: moonlet,
        speed: randomBetween(0.22, 1.35) * (Math.random() < 0.5 ? -1 : 1),
        spin: randomBetween(-0.5, 0.5),
      });
      generatedMoonlets += 1;
    }
  }

  // --- Asteroids: main belt, near-Earth objects, Trojans, and centaurs -------

  const rockyPalette = [0x776d63, 0x9b8d7a, 0xb6a894, 0x625f60, 0x8b7f73] as const;

  const mainBelt = new THREE.Group();
  layers.asteroids.add(mainBelt);
  // The main belt is a broad, irregular population with resonance gaps rather
  // than a solid torus. The gaps are schematic Kirkwood-like clearings.
  addBeltPoints(
    mainBelt,
    3200,
    5.50,
    6.88,
    1.15,
    rockyPalette,
    1.05,
    0.24,
    0.035,
    undefined,
    [
      { center: 5.82, width: 0.075 },
      { center: 6.06, width: 0.055 },
      { center: 6.39, width: 0.065 },
    ],
    0.16,
  );
  addAsteroidInstances(
    mainBelt,
    280,
    () => randomInclinedBeltPosition(5.5, 6.88, 0.62, 0.16),
    0.022,
    0.043,
    rockyPalette,
  );
  rotatingClouds.push({ group: mainBelt, speed: 0.012 });

  // Near-Earth asteroids are a sparse 3D cloud sampled from many eccentric,
  // inclined paths—not a second continuous circular belt.
  const nearEarth = new THREE.Group();
  layers.asteroids.add(nearEarth);
  addNearEarthScatter(nearEarth, 220, [0xc2a58b, 0x8c8178, 0xaaa39a], 1.0, 0.28);
  addAsteroidInstances(nearEarth, 80, () => {
    const semiMajorAxis = randomBetween(2.7, 5.5);
    const eccentricity = randomBetween(0.12, 0.58);
    const anomaly = Math.random() * Math.PI * 2;
    const inclination = randomBetween(-0.42, 0.42);
    const orbitalZ = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity) * Math.sin(anomaly);
    return new THREE.Vector3(
      semiMajorAxis * (Math.cos(anomaly) - eccentricity),
      orbitalZ * Math.sin(inclination),
      orbitalZ * Math.cos(inclination),
    );
  }, 0.020, 0.038, [0xc2a58b, 0x8c8178, 0xaaa39a]);
  rotatingClouds.push({ group: nearEarth, speed: 0.018 });

  const trojans = new THREE.Group();
  layers.asteroids.add(trojans);
  addBeltPoints(
    trojans,
    1050,
    6.82,
    7.48,
    0.48,
    [0x968879, 0x74675c, 0xb2a18b],
    1.15,
    0.34,
    0.06,
    [5.2 + Math.PI / 3, 5.2 - Math.PI / 3],
    undefined,
    0.13,
  );
  addAsteroidInstances(trojans, 90, () => {
    const center = Math.random() < 0.5 ? 5.2 + Math.PI / 3 : 5.2 - Math.PI / 3;
    const angle = center + (Math.random() - 0.5) * 0.72;
    const radius = randomBetween(6.82, 7.48);
    const y = randomBetween(-0.42, 0.42) + radius * Math.sin(randomBetween(-0.13, 0.13)) * Math.sin(angle);
    return new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
  }, 0.020, 0.038, [0x968879, 0x74675c, 0xb2a18b]);
  rotatingClouds.push({ group: trojans, speed: 0.21 });

  const centaurs = new THREE.Group();
  layers.asteroids.add(centaurs);
  addBeltPoints(centaurs, 680, 10.1, 14.9, 2.8, [0x8e8d91, 0x8e7c6c, 0x6d7589], 1.2, 0.28, 0.22, undefined, undefined, 0.18);
  addAsteroidInstances(
    centaurs,
    110,
    () => randomInclinedBeltPosition(10.1, 14.9, 2.8, 0.22),
    0.022,
    0.043,
    [0x8e8d91, 0x8e7c6c, 0x6d7589],
  );
  rotatingClouds.push({ group: centaurs, speed: 0.055 });

  // --- Trans-Neptunian regions and named objects ----------------------------

  const kuiperBelt = new THREE.Group();
  layers.transneptunian.add(kuiperBelt);
  addBeltPoints(kuiperBelt, 4200, 15.2, 19.4, 1.25, [0xa9a6a2, 0x887d80, 0x798a9b, 0x9a8173], 1.3, 0.36, 0.025, undefined, undefined, 0.10);
  rotatingClouds.push({ group: kuiperBelt, speed: 0.012 });

  const scatteredDisc = new THREE.Group();
  layers.transneptunian.add(scatteredDisc);
  addBeltPoints(scatteredDisc, 1600, 19.1, 30.0, 4.2, [0x998c89, 0x7d8595, 0x9d9ca1], 1.2, 0.30, 0.22, undefined, undefined, 0.28);
  rotatingClouds.push({ group: scatteredDisc, speed: 0.006 });

  const detachedObjects: Array<{ name: string; distance: number; radius: number; color: number; speed: number; phase: number }> = [
    { name: "SEDNA", distance: 34.0, radius: 0.045, color: 0x9c6e5f, speed: 0.0035, phase: 1.8 },
    { name: "GONGGONG", distance: 27.5, radius: 0.038, color: 0x8b5f55, speed: 0.005, phase: 4.4 },
    { name: "QUAOAR", distance: 23.2, radius: 0.034, color: 0x997c69, speed: 0.008, phase: 2.6 },
    { name: "ORCUS", distance: 21.7, radius: 0.031, color: 0x8b94a2, speed: 0.009, phase: 5.1 },
  ];

  for (const object of detachedObjects) {
    const pivot = new THREE.Group();
    pivot.rotation.y = object.phase;
    layers.transneptunian.add(pivot);
    addOrbit(layers.transneptunian, object.distance, 0.11, randomBetween(-0.22, 0.22));
    const mesh = makeRock(object.radius, object.color);
    mesh.position.set(object.distance, randomBetween(-0.4, 0.4), 0);
    mesh.scale.setScalar(1.25);
    pivot.add(mesh);
    const label = createLabel(object.name, "rgba(180,202,230,0.88)");
    label.position.set(object.distance, object.radius * 1.25 + 0.1, 0);
    label.scale.set(0.62, 0.11, 1);
    pivot.add(label);
    dwarfAnimators.push({
      pivot,
      mesh,
      speed: object.speed,
      spin: randomBetween(0.15, 0.5),
    });
  }

  // The Oort Cloud is a distant, sparse spherical reservoir rather than a flat belt.
  const oortCloud = new THREE.Group();
  layers.transneptunian.add(oortCloud);
  addSphericalCloud(
    oortCloud,
    3800,
    130,
    260,
    [0x8c9fc2, 0x7890b4, 0xb1a7a0, 0x78899d],
    1.1,
    0.20,
  );
  rotatingClouds.push({ group: oortCloud, speed: 0.0008 });

  // --- Comets with moving heads and anti-solar dust/ion tails ----------------

  const cometConfigs = [
    { name: "HALLEY", a: 18.2, e: 0.967, inclination: 0.42, node: 0.28, period: 0.016, phase: 0.2, color: 0x9cbde8, tail: 2.3 },
    { name: "ENCKE", a: 6.9, e: 0.85, inclination: 0.12, node: 1.72, period: 0.19, phase: 2.2, color: 0xb6c6dc, tail: 0.85 },
    { name: "HALE-BOPP", a: 25.0, e: 0.995, inclination: 0.31, node: 2.48, period: 0.008, phase: 4.2, color: 0xd2c7b5, tail: 3.4 },
    { name: "67P / CHURYUMOV-GERASIMENKO", a: 8.9, e: 0.64, inclination: 0.25, node: 3.36, period: 0.09, phase: 1.5, color: 0x77736c, tail: 1.1 },
    { name: "BORRELLY", a: 10.2, e: 0.62, inclination: 0.38, node: 4.12, period: 0.065, phase: 5.3, color: 0x6d6b68, tail: 1.2 },
    { name: "WILD 2", a: 9.7, e: 0.54, inclination: 0.09, node: 5.18, period: 0.075, phase: 3.2, color: 0x85817b, tail: 1.0 },
    { name: "LEONARD", a: 22.0, e: 0.98, inclination: 0.58, node: 5.78, period: 0.011, phase: 0.9, color: 0x9aa9bc, tail: 2.6 },
  ];

  const cometHeads = new Map<string, THREE.Mesh>();
  const COMET_TAIL_SEGMENTS = 24;
  const COMET_HISTORY_POINTS = 48;

  for (const config of cometConfigs) {
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 12, 10),
      new THREE.MeshBasicMaterial({ color: config.color }),
    );
    layers.comets.add(head);
    head.userData.celestialName = config.name;
    cometHeads.set(config.name, head);

    // The full predicted orbit is a thin, low-contrast reference. The brighter
    // motion trace below is built from positions the comet has actually visited.
    const orbitPoints: THREE.Vector3[] = [];
    for (let step = 0; step < 260; step += 1) {
      const eccentricAnomaly = (step / 260) * Math.PI * 2;
      const x = config.a * (Math.cos(eccentricAnomaly) - config.e);
      const orbitalZ = config.a * Math.sqrt(1 - config.e * config.e) * Math.sin(eccentricAnomaly);
      orbitPoints.push(setCometOrbitPoint(
        x,
        orbitalZ,
        config.inclination,
        config.node,
        new THREE.Vector3(),
      ));
    }

    const orbitTrack = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(orbitPoints),
      new THREE.LineBasicMaterial({
        // Keep predicted comet paths as subdued reference guides. With seven
        // highly eccentric ellipses crossing near perihelion, brighter lines
        // accumulate into a distracting white bundle around the inner system.
        color: 0x607895,
        transparent: true,
        opacity: 0.045,
        depthTest: true,
        depthWrite: false,
      }),
    );
    orbitTrack.frustumCulled = false;
    layers.comets.add(orbitTrack);

    const motionTrail = createLine(config.color, 0.62, COMET_HISTORY_POINTS);
    motionTrail.geometry.setDrawRange(0, 0);
    layers.comets.add(motionTrail);

    const tailIon = createLine(0x72c9ff, 0.66, COMET_TAIL_SEGMENTS);
    const tailDust = createLine(0xffd39b, 0.38, COMET_TAIL_SEGMENTS);
    layers.comets.add(tailIon, tailDust);

    const label = createLabel(config.name, "rgba(168,213,255,0.94)");
    label.scale.set(0.82, 0.15, 1);
    layers.comets.add(label);
    head.userData.label = label;

    cometAnimators.push({
      head,
      orbitA: config.a,
      eccentricity: config.e,
      inclination: config.inclination,
      period: config.period,
      phase: config.phase,
      ascendingNode: config.node,
      orbitTrack,
      motionTrail,
      history: [],
      historyTimer: 0,
      tailIon,
      tailDust,
      tailLength: config.tail,
      tailSegments: COMET_TAIL_SEGMENTS,
    });
  }

  const philaeComet = cometHeads.get("67P / CHURYUMOV-GERASIMENKO");
  if (philaeComet) {
    addSurfaceLander("PHILAE LANDER", philaeComet, 0.035, 2.1, 0.18, 0.045);
  }

  // --- Meteoroids, interplanetary dust, solar wind, and heliosphere ----------

  const dustGroup = new THREE.Group();
  layers.medium.add(dustGroup);
  addSphericalCloud(
    dustGroup,
    2600,
    0.65,
    26.0,
    [0x7e8a9c, 0x9a9083, 0xb8aa91, 0x62758f],
    0.95,
    0.22,
  );
  rotatingClouds.push({ group: dustGroup, speed: 0.0035 });

  const windCount = 460;
  const windPositions = new Float32Array(windCount * 3);
  const windDirections: THREE.Vector3[] = [];
  const windPhases = new Float32Array(windCount);
  const windSpeeds = new Float32Array(windCount);
  for (let i = 0; i < windCount; i += 1) {
    const y = randomBetween(-1, 1);
    const angle = Math.random() * Math.PI * 2;
    const radial = Math.sqrt(1 - y * y);
    windDirections.push(new THREE.Vector3(Math.cos(angle) * radial, y, Math.sin(angle) * radial));
    windPhases[i] = Math.random();
    windSpeeds[i] = randomBetween(0.035, 0.12);
  }
  const windGeometry = new THREE.BufferGeometry();
  windGeometry.setAttribute("position", new THREE.BufferAttribute(windPositions, 3).setUsage(THREE.DynamicDrawUsage));
  const solarWind = new THREE.Points(windGeometry, new THREE.PointsMaterial({
    color: 0xffc57b,
    size: 1.25,
    sizeAttenuation: false,
    transparent: true,
    opacity: 0.32,
    depthWrite: false,
  }));
  solarWind.frustumCulled = false;
  layers.medium.add(solarWind);

  // Heliosphere / heliopause is deliberately a subtle wire boundary, not a solid disk.
  // This is a compressed educational scale relative to the outer Oort reservoir.
  const heliosphereRadius = 32;
  for (let axis = 0; axis < 3; axis += 1) {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < 240; i += 1) {
      const angle = (i / 240) * Math.PI * 2;
      const c = Math.cos(angle) * heliosphereRadius;
      const s = Math.sin(angle) * heliosphereRadius;
      if (axis === 0) points.push(new THREE.Vector3(c, s, 0));
      else if (axis === 1) points.push(new THREE.Vector3(c, 0, s));
      else points.push(new THREE.Vector3(0, c, s));
    }
    const line = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(points),
      new THREE.LineBasicMaterial({
        color: 0x4b8fbd,
        transparent: true,
        opacity: 0.085,
        depthWrite: false,
      }),
    );
    layers.heliosphere.add(line);
  }
  const heliopauseLabel = createLabel("HELIOPAUSE", "rgba(116,173,218,0.8)");
  heliopauseLabel.position.set(0, heliosphereRadius * 0.78, heliosphereRadius * 0.42);
  heliopauseLabel.scale.set(1.6, 0.28, 1);
  layers.heliosphere.add(heliopauseLabel);

  // --- Human-made spacecraft, probes, landers and rovers --------------------

  const probeConfigs = [
    { name: "VOYAGER 1", x: 29, y: 2.2, z: -8, speed: 0.014, phase: 0.2, drift: 1.0 },
    { name: "VOYAGER 2", x: -27, y: -1.8, z: 11, speed: 0.012, phase: 2.4, drift: 0.9 },
    { name: "NEW HORIZONS", x: 22, y: 2.6, z: 13, speed: 0.018, phase: 3.5, drift: 0.8 },
    { name: "PARKER SOLAR PROBE", x: 2.1, y: 0.3, z: -0.8, speed: 0.14, phase: 1.2, drift: 0.24 },
    { name: "JUNO", x: 7.8, y: 0.3, z: 0.2, speed: 0.055, phase: 3.0, drift: 0.22 },
    { name: "CASSINI", x: 10.2, y: -0.35, z: -0.5, speed: 0.041, phase: 4.4, drift: 0.18 },
  ];

  for (const config of probeConfigs) {
    const group = createProbeModel(config.name);
    group.position.set(config.x, config.y, config.z);
    group.scale.setScalar(config.name.startsWith("VOYAGER") ? 0.75 : 0.62);
    layers.spacecraft.add(group);
    const label = createLabel(config.name, "rgba(174,217,255,0.9)");
    label.scale.set(0.88, 0.15, 1);
    group.add(label);
    label.position.set(0, 0.15, 0);
    probeAnimators.push({
      group,
      base: new THREE.Vector3(config.x, config.y, config.z),
      travel: new THREE.Vector3(config.z * 0.3, config.drift, -config.x * 0.25),
      speed: config.speed,
      phase: config.phase,
    });
  }

  // Earth orbiters: Hubble and the International Space Station.
  const earth = planetByName.get("EARTH");
  if (earth) {
    for (const [name, distance, speed] of [
      ["HUBBLE SPACE TELESCOPE", 0.22, 1.7],
      ["INTERNATIONAL SPACE STATION", 0.28, 2.0],
    ] as const) {
      const anchor = new THREE.Group();
      layers.spacecraft.add(anchor);
      const pivot = new THREE.Group();
      anchor.add(pivot);
      const craft = createProbeModel(name, 0xd4dce7);
      craft.scale.setScalar(0.55);
      craft.position.set(distance * 2.0, 0, 0);
      pivot.add(craft);
      moonAnimators.push({
        anchor,
        orbit: pivot,
        parent: earth.mesh,
        mesh: craft,
        speed,
        spin: 0.2,
      });
    }
  }

  // Mars rovers are small tracked vehicles attached to the Mars surface.
  const mars = planetByName.get("MARS");
  if (mars) {
    for (const [name, angle] of [["PERSEVERANCE", 0.25], ["CURIOSITY", 2.2]] as const) {
      const rover = new THREE.Group();
      const chassis = new THREE.Mesh(
        new THREE.BoxGeometry(0.034, 0.018, 0.046),
        new THREE.MeshStandardMaterial({ color: 0xc5a06a, metalness: 0.45, roughness: 0.6 }),
      );
      rover.add(chassis);
      const mast = new THREE.Mesh(
        new THREE.CylinderGeometry(0.0035, 0.004, 0.025, 8),
        new THREE.MeshStandardMaterial({ color: 0xd4d9df, metalness: 0.7, roughness: 0.3 }),
      );
      mast.position.y = 0.018;
      rover.add(mast);
      rover.position.set(
        Math.cos(angle) * 0.10 * 2.4,
        Math.sin(angle) * 0.10 * 2.4,
        0.045 * 2.4,
      );
      rover.scale.setScalar(1.35);
      rover.rotation.z = angle;
      rover.userData.celestialName = name;

      const anchor = new THREE.Group();
      layers.spacecraft.add(anchor);
      const roverOrbit = new THREE.Group();
      anchor.add(roverOrbit);
      roverOrbit.add(rover);
      moonAnimators.push({
        anchor,
        orbit: roverOrbit,
        parent: mars.mesh,
        mesh: rover,
        speed: 0,
        spin: 0,
      });
    }
  }

  // Named detached objects are orbiting with the trans-Neptunian population.
  const counts = {
    dwarfPlanets: dwarfConfigs.length,
    namedMoons: namedMoons.length,
    generatedMoonlets,
    namedAsteroids: namedAsteroidConfigs.length,
    smallBodies: 3200 + 220 + 1050 + 680 + 4200 + 1600 + 3800 + 2600,
    comets: cometConfigs.length,
    spacecraft: probeConfigs.length + 4 + 5,
  };

  const cometPosition = new THREE.Vector3();
  const cometDirection = new THREE.Vector3();
  const cometVelocity = new THREE.Vector3();
  const cometVelocityDirection = new THREE.Vector3();
  const cometIonPoint = new THREE.Vector3();
  const cometDustPoint = new THREE.Vector3();

  function update(delta: number, elapsedTime: number): void {
    for (const body of dwarfAnimators) {
      body.pivot.rotation.y += body.speed * delta;
      body.mesh.rotation.y += body.spin * delta;
    }

    // Moon and near-planet spacecraft layers are independent visibility groups.
    // Their anchors follow each parent body's current world position every frame.
    solarSystem.updateMatrixWorld(true);
    for (const moon of moonAnimators) {
      const parentWorldPosition = moon.parent.getWorldPosition(new THREE.Vector3());
      solarSystem.worldToLocal(parentWorldPosition);
      moon.anchor.position.copy(parentWorldPosition);
      moon.orbit.rotation.y += moon.speed * delta;
      moon.mesh.rotation.y += moon.spin * delta;
    }

    for (const cloud of rotatingClouds) {
      cloud.group.rotation.y += cloud.speed * delta;
    }

    // Kepler's equation gives each comet a distinct eccentric ellipse.
    for (const comet of cometAnimators) {
      const meanAnomaly = elapsedTime * comet.period + comet.phase;
      let eccentricAnomaly = meanAnomaly;
      for (let iteration = 0; iteration < 5; iteration += 1) {
        eccentricAnomaly -= (
          eccentricAnomaly - comet.eccentricity * Math.sin(eccentricAnomaly) - meanAnomaly
        ) / (1 - comet.eccentricity * Math.cos(eccentricAnomaly));
      }

      const a = comet.orbitA;
      const e = comet.eccentricity;
      const rootOneMinusESquared = Math.sqrt(1 - e * e);
      const cosE = Math.cos(eccentricAnomaly);
      const sinE = Math.sin(eccentricAnomaly);
      const x = a * (cosE - e);
      const orbitalZ = a * rootOneMinusESquared * sinE;

      setCometOrbitPoint(
        x,
        orbitalZ,
        comet.inclination,
        comet.ascendingNode,
        cometPosition,
      );
      comet.head.position.copy(cometPosition);
      cometDirection.copy(cometPosition).normalize();

      // Velocity is the derivative of the same Kepler ellipse used for the head.
      // This lets the dust tail curve naturally with the comet's orbital motion.
      const eccentricAnomalyRate = comet.period / (1 - e * cosE);
      const velocityX = -a * sinE * eccentricAnomalyRate;
      const velocityZ = a * rootOneMinusESquared * cosE * eccentricAnomalyRate;
      setCometOrbitPoint(
        velocityX,
        velocityZ,
        comet.inclination,
        comet.ascendingNode,
        cometVelocity,
      );
      cometVelocityDirection.copy(cometVelocity).normalize();

      // Record actual visited positions. This is the bright curved wake following
      // the comet's path; it is distinct from the physical anti-solar material tails.
      comet.historyTimer += delta;
      if (comet.historyTimer >= 0.075) {
        comet.historyTimer %= 0.075;
        comet.history.push(cometPosition.clone());
        if (comet.history.length > COMET_HISTORY_POINTS) comet.history.shift();
      }

      const historyAttribute = comet.motionTrail.geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let index = 0; index < comet.history.length; index += 1) {
        const point = comet.history[index]!;
        historyAttribute.setXYZ(index, point.x, point.y, point.z);
      }
      historyAttribute.needsUpdate = true;
      comet.motionTrail.geometry.setDrawRange(0, comet.history.length);
      (comet.motionTrail.material as THREE.LineBasicMaterial).opacity =
        0.12 + 0.48 * (comet.history.length / COMET_HISTORY_POINTS);

      // Tail activity rises near perihelion and fades farther from the Sun.
      const heliocentricDistance = cometPosition.length();
      const activity = 1 - THREE.MathUtils.smoothstep(heliocentricDistance, 4.5, 24.0);
      const activeTailLength = comet.tailLength * (0.04 + activity * 1.35);

      const ionMaterial = comet.tailIon.material as THREE.LineBasicMaterial;
      const dustMaterial = comet.tailDust.material as THREE.LineBasicMaterial;
      ionMaterial.opacity = 0.015 + activity * 0.74;
      dustMaterial.opacity = 0.01 + activity * 0.46;

      const ionPositions = comet.tailIon.geometry.getAttribute("position") as THREE.BufferAttribute;
      const dustPositions = comet.tailDust.geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let segment = 0; segment < comet.tailSegments; segment += 1) {
        const t = segment / (comet.tailSegments - 1);
        const taper = 1 - t;

        // Ion tail: nearly straight, directed away from the Sun by solar wind.
        cometIonPoint.copy(cometPosition)
          .addScaledVector(cometDirection, activeTailLength * t);
        const ionFlutter = Math.sin(elapsedTime * 3.2 + t * 7.0 + comet.phase) * 0.012 * activity * t;
        cometIonPoint.addScaledVector(cometVelocityDirection, ionFlutter);
        ionPositions.setXYZ(segment, cometIonPoint.x, cometIonPoint.y, cometIonPoint.z);

        // Dust tail: broad and gently curved by the nucleus' orbital velocity.
        cometDustPoint.copy(cometPosition)
          .addScaledVector(cometDirection, activeTailLength * 0.78 * t)
          .addScaledVector(cometVelocityDirection, activeTailLength * 0.34 * t * t);
        const dustWave = Math.sin(elapsedTime * 1.7 + t * 5.5 + comet.phase) * 0.025 * activity * t;
        cometDustPoint.addScaledVector(cometVelocityDirection, dustWave);
        // Taper the distal dust stream so it does not look like a rigid second orbit.
        cometDustPoint.addScaledVector(cometDirection, -activeTailLength * 0.08 * t * t * (1 - taper));
        dustPositions.setXYZ(segment, cometDustPoint.x, cometDustPoint.y, cometDustPoint.z);
      }
      ionPositions.needsUpdate = true;
      dustPositions.needsUpdate = true;

      const label = comet.head.userData.label as THREE.Sprite | undefined;
      if (label) label.position.copy(cometPosition).add(new THREE.Vector3(0, 0.22, 0));
    }

    // Solar wind parcels continuously stream outward and recycle near the Sun.
    const windAttribute = windGeometry.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < windCount; i += 1) {
      const travel = (windPhases[i]! + elapsedTime * windSpeeds[i]!) % 1;
      const radius = 1.35 + travel * 26;
      const direction = windDirections[i]!;
      windAttribute.setXYZ(i, direction.x * radius, direction.y * radius, direction.z * radius);
    }
    windAttribute.needsUpdate = true;

    for (const probe of probeAnimators) {
      const drift = Math.sin(elapsedTime * probe.speed + probe.phase);
      probe.group.position.copy(probe.base).addScaledVector(probe.travel, drift);
      probe.group.rotation.y += delta * 0.16;
    }
  }

  return {
    layers,
    update,
    counts,
  };
}

[executed on device: prottoy-pc (e2d79a0a-6a9d-46e8-bde9-bb02e51fa3f3)]