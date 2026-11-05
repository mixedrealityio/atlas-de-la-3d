export const SPECS = [
 {
  "key": "chaine",
  "title": "Capturer en volume",
  "sub": "du dôme au fichier",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Rig synchronisé",
    "s": "dizaines de caméras"
   },
   {
    "n": "Segmentation",
    "s": "isoler la personne",
    "pal": "blue"
   },
   {
    "n": "Reconstruction",
    "s": "par image",
    "pal": "blue"
   },
   {
    "n": "Suivi temporel",
    "s": "maillage cohérent",
    "pal": "red"
   },
   {
    "n": "Texture",
    "s": "par image"
   },
   {
    "n": "Compression",
    "s": "streaming",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "repr",
  "title": "Les représentations",
  "sub": "d’une performance en 3D",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Maillages dynamiques",
    "s": "un maillage par image",
    "pal": "blue"
   },
   {
    "n": "Maillage suivi",
    "s": "même topologie, sommets qui bougent",
    "pal": "blue"
   },
   {
    "n": "Avatar paramétrique",
    "s": "SMPL, blendshapes"
   },
   {
    "n": "Gaussiennes 4D",
    "s": "chapitre 40",
    "pal": "red"
   },
   {
    "n": "Champs neuronaux",
    "s": "NeRF dynamiques",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
