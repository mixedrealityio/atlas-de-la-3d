export const SPECS = [
 {
  "key": "gizmo",
  "title": "Transformer au clavier",
  "sub": "G, R, S et les axes",
  "kind": "gizmo",
  "x0": 0
 },
 {
  "key": "modes",
  "title": "Les modes de travail",
  "sub": "un objet, plusieurs façons de le toucher",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Objet",
    "s": "placer, dupliquer"
   },
   {
    "n": "Édition",
    "s": "sommets, arêtes, faces",
    "pal": "blue"
   },
   {
    "n": "Sculpture",
    "s": "pinceaux sur la forme",
    "pal": "red"
   },
   {
    "n": "Peinture",
    "s": "textures, poids"
   },
   {
    "n": "Pose",
    "s": "squelette",
    "pal": "blue"
   },
   {
    "n": "Nœuds",
    "s": "géométrie procédurale",
    "pal": "red"
   }
  ],
  "x0": 40
 },
 {
  "key": "entrees",
  "title": "Les périphériques",
  "sub": "souris, tablette, 3D, VR",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Souris 3 boutons",
    "s": "molette : orbiter"
   },
   {
    "n": "Pavé tactile",
    "s": "gestes, émuler 3 boutons"
   },
   {
    "n": "Tablette graphique",
    "s": "pression pour sculpter",
    "pal": "blue"
   },
   {
    "n": "SpaceMouse",
    "s": "6DoF : naviguer en continu",
    "pal": "blue"
   },
   {
    "n": "Casque VR",
    "s": "inspecter la scène (OpenXR)",
    "pal": "red"
   }
  ],
  "x0": 80
 }
];
