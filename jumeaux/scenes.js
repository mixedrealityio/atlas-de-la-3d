export const SPECS = [
 {
  "key": "cycle",
  "title": "Le jumeau numérique",
  "sub": "le réel et sa copie",
  "kind": "cycle",
  "nodes": [
   {
    "n": "Usine réelle",
    "pal": null
   },
   {
    "n": "Capteurs",
    "pal": "blue"
   },
   {
    "n": "Jumeau 3D",
    "pal": "red"
   },
   {
    "n": "Simulation",
    "pal": "blue"
   },
   {
    "n": "Décision",
    "pal": null
   },
   {
    "n": "Action",
    "pal": "red"
   }
  ],
  "unit": "cycle",
  "speed": 0.45,
  "x0": 0
 },
 {
  "key": "pipeline",
  "title": "Construire un jumeau",
  "sub": "de la CAO à la réalité mixte",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "CAO, BIM, scans",
    "s": "sources 3D"
   },
   {
    "n": "Conversion",
    "s": "USD, glTF",
    "pal": "blue"
   },
   {
    "n": "Simplification",
    "s": "LOD, décimation",
    "pal": "blue"
   },
   {
    "n": "Données",
    "s": "capteurs reliés aux objets",
    "pal": "red"
   },
   {
    "n": "Simulation",
    "s": "physique, robots, flux",
    "pal": "red"
   },
   {
    "n": "Visualisation",
    "s": "PC, web, casque"
   }
  ],
  "x0": 40
 }
];
