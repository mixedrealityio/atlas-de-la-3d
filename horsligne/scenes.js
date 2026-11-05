export const SPECS = [
 {
  "key": "vfx",
  "title": "Le pipeline VFX",
  "sub": "du plateau à l’image finale",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Modélisation, lookdev",
    "s": "Maya, Houdini, Blender"
   },
   {
    "n": "Lighting",
    "s": "Katana, Houdini",
    "pal": "blue"
   },
   {
    "n": "Rendu",
    "s": "path tracing, ferme",
    "pal": "red"
   },
   {
    "n": "Passes (AOV)",
    "s": "diffus, spéculaire, profondeur",
    "pal": "blue"
   },
   {
    "n": "Compositing",
    "s": "Nuke",
    "pal": "red"
   },
   {
    "n": "Étalonnage",
    "s": ""
   }
  ],
  "x0": 0
 }
];
