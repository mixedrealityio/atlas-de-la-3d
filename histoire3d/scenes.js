export const SPECS = [
 {
  "key": "frise",
  "title": "Une histoire de la 3D numérique",
  "sub": "1960 – 2025",
  "kind": "timeline",
  "from": 1960,
  "to": 2026,
  "spans": [
   {
    "a": 1963,
    "b": 1980,
    "n": "l’école de l’Utah"
   },
   {
    "a": 1995,
    "b": 2005,
    "n": "GPU et shaders"
   },
   {
    "a": 2016,
    "b": 2026,
    "n": "XR et rendu neuronal"
   }
  ],
  "events": [
   {
    "y": 1963,
    "n": "Sketchpad"
   },
   {
    "y": 1975,
    "n": "Phong, théière"
   },
   {
    "y": 1986,
    "n": "équation du rendu"
   },
   {
    "y": 1995,
    "n": "Toy Story"
   },
   {
    "y": 1999,
    "n": "GeForce 256"
   },
   {
    "y": 2016,
    "n": "Rift, Vive"
   },
   {
    "y": 2018,
    "n": "RTX"
   },
   {
    "y": 2020,
    "n": "NeRF"
   },
   {
    "y": 2023,
    "n": "3DGS"
   },
   {
    "y": 2024,
    "n": "Vision Pro"
   }
  ],
  "x0": 0
 },
 {
  "key": "espaces",
  "title": "Les espaces d’une donnée 3D",
  "sub": "chacun son repère",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Objet",
    "s": "centré sur l’objet",
    "pal": "blue"
   },
   {
    "n": "Monde",
    "s": "le repère global",
    "pal": "blue"
   },
   {
    "n": "Caméra",
    "s": "vu par l’œil"
   },
   {
    "n": "Découpage",
    "s": "après projection",
    "pal": "red"
   },
   {
    "n": "NDC",
    "s": "cube normalisé",
    "pal": "red"
   },
   {
    "n": "Écran",
    "s": "pixels"
   }
  ],
  "x0": 40
 }
];
