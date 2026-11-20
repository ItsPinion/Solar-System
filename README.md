# Solar System Model

An interactive, cinematic 3D solar-system model built with Three.js, TypeScript, and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Included catalogue

### Central star and major planets
- The Sun is rendered as a G2V yellow-dwarf-inspired photosphere with animated plasma, a turbulent corona, evolving prominences, and coronal streamers.
- Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune use distinct procedural surface styles.
- Ring meshes are provided for Jupiter, Saturn, Uranus, and Neptune.

### Dwarf planets and named moons
- Ceres, Pluto, Haumea, Makemake, and Eris.
- 27 named satellites, including Earth's Moon; Phobos and Deimos; Io, Europa, Ganymede, Callisto; Titan, Enceladus, Rhea, Iapetus and Mimas; Titania, Oberon and Ariel; Triton and Nereid; Charon, Nix, Hydra; Hiʻiaka, Namaka, Dysnomia, MK2; Dactyl and Dimorphos.
- 180 procedurally generated minor moonlets orbiting planetary, dwarf-planet, and asteroid hosts. These are illustrative bodies, not individually catalogued discoveries.

### Small-body populations
- 3,200 main-belt asteroid particles with vertical spread, density variation, and schematic resonance gaps.
- Faceted, lit 3D asteroid instances are mixed into the main belt, near-Earth population, Trojans, and centaurs.
- Particles receive per-object orbital-plane variation so the populations occupy a shallow 3D volume rather than a perfect flat tube.
- 220 near-Earth asteroid particles sampled from individual eccentric and inclined orbits; they do not form a second continuous ring.
- 1,050 Trojan particles around Jupiter's L4/L5 regions.
- 680 centaur particles.
- 4,200 Kuiper-belt particles.
- 1,600 scattered-disc particles and named detached objects such as Sedna.
- A 3,800-point spherical Oort-cloud representation.
- Named asteroids include 243 Ida, 65803 Didymos, Bennu, Ryugu, and Apophis.

### Comets: orbital paths, recent trajectories, and tails
- Seven moving comet nuclei: Halley, Encke, Hale–Bopp, 67P, Borrelly, Wild 2, and Leonard.
- A faint reference curve shows each comet's complete eccentric, inclined orbit.
- A brighter recent-position trace records the path the nucleus has actually travelled.
- The ion tail extends away from the Sun.
- The dust tail is curved by the comet's orbital velocity; both material tails grow brighter and longer near perihelion.

### Interplanetary environment
- Interplanetary dust and meteoroid particles.
- Continuously streaming solar-wind parcels and a wireframe heliopause/heliosphere boundary.

### Human-made objects
- Voyager 1, Voyager 2, New Horizons, Parker Solar Probe, Juno, Cassini.
- Hubble Space Telescope and the International Space Station.
- Viking 1, Viking 2, InSight, Huygens, and Philae landers.
- Perseverance and Curiosity Mars rovers.

## Scene layers

Use the **Layers** control to show or hide eight independent groups:
1. Dwarf planets
2. Moons and moonlets
3. Asteroid populations (irregular main belt, scattered near-Earth objects, Trojans, centaurs)
4. Kuiper belt, scattered disc, detached objects, and Oort cloud
5. Comets (orbital tracks, recent motion traces, ion and dust tails)
6. Meteoroids, dust, and solar wind
7. Spacecraft, orbiters, landers, and rovers
8. Heliosphere and heliopause

## Scale, depth, and lighting

- The scene uses an intentionally expanded educational scale: orbital coordinates are multiplied by 1.65, major planet bodies by an additional 2.4, dwarf planets by 1.7, and named moons by 1.75 with wider local moon orbits.
- Faceted asteroid instances are kept much smaller than planets, while remaining distinct from the lightweight particle field.
- The default camera starts at a three-quarter, side-on perspective and closer overview distance.
- The 4,200 background stars occupy a distant 720–1,050 scene-unit shell, beyond the compressed Oort-cloud representation. Their small point and glow sizes use fixed screen-space footprints so they remain readable at overview zoom, with a tuned pick radius to preserve individual dragging.
- Major planetary and dwarf-planet orbits use distinct inclinations and ascending-node directions.
- Asteroid populations mix lightweight particles with shaded, faceted instanced meshes.
- A restrained cool fill light and shader rim/specular response make planetary and asteroid surfaces read as 3D forms.
- Orbit guides are deliberately dimmer than the celestial bodies.

## Camera and interaction

- **Mouse wheel:** Zoom from 8 to 1,120 scene units.
- **Drag empty space:** Orbit the camera.
- **Drag a major planet:** Temporarily move it; it returns to its tracked orbital position on release.
- **Drag a background star:** Temporarily move it; it returns to its original position on release.
- **Drag the Sun:** Move the complete system; it returns to its previous position on release.
- Press **R** or click **Reset system** to return the Sun to the origin.

The cursor is hidden while dragging an object.

## Implementation notes

This is an educational, cinematic visualization—not a scale-accurate ephemeris or a complete live catalogue. Orbital radii, speeds, object sizes, population distributions, and moonlet counts are illustrative. Generated small-body particles represent populations rather than individual known objects. The Oort cloud and heliosphere are compressed into a navigable scene scale.

## Production build

```bash
npm run build
npm run preview
```
