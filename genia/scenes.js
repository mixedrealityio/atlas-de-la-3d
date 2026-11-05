export const SPECS = [
 {
  "key": "hybride",
  "title": "Le rendu hybride",
  "sub": "rasteriser, puis raffiner",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Rasterisation",
    "s": "image basse résolution",
    "pal": "blue"
   },
   {
    "n": "Tampons",
    "s": "profondeur, normales, mouvement",
    "pal": "blue"
   },
   {
    "n": "Réseau léger",
    "s": "super-résolution, débruitage",
    "pal": "red"
   },
   {
    "n": "Génération d’images",
    "s": "remplacer les textures (style)",
    "pal": "red"
   },
   {
    "n": "Image finale",
    "s": ""
   }
  ],
  "x0": 0
 },
 {
  "key": "local",
  "title": "La génération dans l’application",
  "sub": "du serveur au casque",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Demande",
    "s": "voix, texte, geste"
   },
   {
    "n": "Modèle de langage",
    "s": "local ou serveur",
    "pal": "blue"
   },
   {
    "n": "Génération 3D",
    "s": "objet en secondes",
    "pal": "red"
   },
   {
    "n": "Optimisation",
    "s": "LOD, compression"
   },
   {
    "n": "Insertion",
    "s": "ancrée dans la scène",
    "pal": "blue"
   }
  ],
  "x0": 40
 }
];
