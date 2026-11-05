export const SPECS = [
 {
  "key": "tailles",
  "title": "Combien d’objets ?",
  "sub": "ordres de grandeur (échelle logarithmique)",
  "kind": "cbars",
  "bars": [
   {
    "n": "ScanNet (scènes)",
    "v": 3.2,
    "pal": "blue",
    "s": "≈ 1 500"
   },
   {
    "n": "CO3D (vidéos)",
    "v": 4.3,
    "pal": "blue",
    "s": "≈ 19 000"
   },
   {
    "n": "ShapeNetCore",
    "v": 4.7,
    "pal": "paper",
    "s": "≈ 51 000"
   },
   {
    "n": "Objaverse",
    "v": 5.9,
    "pal": "paper",
    "s": "≈ 800 000"
   },
   {
    "n": "Objaverse-XL",
    "v": 7.0,
    "pal": "red",
    "s": "≈ 10 millions"
   }
  ],
  "max": 7.0,
  "sp": 2.4,
  "x0": 0
 },
 {
  "key": "prep",
  "title": "Préparer un jeu de données",
  "sub": "des fichiers bruts aux lots",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Collecte",
    "s": "licences, sources"
   },
   {
    "n": "Nettoyage",
    "s": "doublons, objets cassés",
    "pal": "blue"
   },
   {
    "n": "Normalisation",
    "s": "échelle, orientation",
    "pal": "blue"
   },
   {
    "n": "Rendus",
    "s": "vues, profondeur, normales",
    "pal": "red"
   },
   {
    "n": "Annotations",
    "s": "classes, légendes, poses",
    "pal": "red"
   },
   {
    "n": "Formats",
    "s": "lots prêts à charger"
   }
  ],
  "x0": 40
 }
];
