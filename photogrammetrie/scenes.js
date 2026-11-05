export const SPECS = [
 {
  "key": "sfm",
  "title": "Structure from motion",
  "sub": "des photos aux points 3D",
  "kind": "slam",
  "x0": 0
 },
 {
  "key": "chaine",
  "title": "La chaîne complète",
  "sub": "de la photo au modèle texturé",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Photos",
    "s": "60 à 80 % de recouvrement"
   },
   {
    "n": "Points d’intérêt",
    "s": "SIFT, appariement",
    "pal": "blue"
   },
   {
    "n": "SfM",
    "s": "poses + nuage épars",
    "pal": "red"
   },
   {
    "n": "MVS",
    "s": "nuage dense, cartes de profondeur",
    "pal": "red"
   },
   {
    "n": "Maillage",
    "s": "Poisson, Delaunay",
    "pal": "blue"
   },
   {
    "n": "Texture",
    "s": "projection des photos"
   }
  ],
  "x0": 40
 }
];
