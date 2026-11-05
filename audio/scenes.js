export const SPECS = [
 {
  "key": "chaine",
  "title": "Spatialiser un son",
  "sub": "de la source aux oreilles",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Source",
    "s": "position 3D"
   },
   {
    "n": "Distance",
    "s": "atténuation, filtrage de l’air",
    "pal": "blue"
   },
   {
    "n": "Occlusion",
    "s": "obstacles entre source et oreille",
    "pal": "blue"
   },
   {
    "n": "HRTF",
    "s": "filtre propre à chaque direction",
    "pal": "red"
   },
   {
    "n": "Réverbération",
    "s": "la pièce",
    "pal": "red"
   },
   {
    "n": "Casque audio",
    "s": "gauche + droite"
   }
  ],
  "x0": 0
 },
 {
  "key": "indices",
  "title": "Comment on localise un son",
  "sub": "les indices du cerveau",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "ITD",
    "s": "différence de temps entre les oreilles",
    "pal": "blue"
   },
   {
    "n": "ILD",
    "s": "différence d’intensité",
    "pal": "blue"
   },
   {
    "n": "Spectre",
    "s": "filtrage du pavillon",
    "pal": "red"
   },
   {
    "n": "Mouvement de tête",
    "s": "lever les ambiguïtés",
    "pal": "red"
   },
   {
    "n": "Réverbération",
    "s": "rapport direct / réverbéré = distance"
   }
  ],
  "x0": 40
 }
];
