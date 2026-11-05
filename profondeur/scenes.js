export const SPECS = [
 {
  "key": "mono",
  "title": "La profondeur monoculaire",
  "sub": "une photo, une carte de profondeur",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Photo",
    "s": "une seule image"
   },
   {
    "n": "Encodeur",
    "s": "transformer de vision",
    "pal": "blue"
   },
   {
    "n": "Décodeur",
    "s": "carte dense",
    "pal": "blue"
   },
   {
    "n": "Profondeur relative",
    "s": "ou métrique",
    "pal": "red"
   },
   {
    "n": "Points 3D",
    "s": "avec les paramètres de la caméra",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "points",
  "title": "Du pixel au point 3D",
  "sub": "rétroprojection",
  "kind": "frustum",
  "x0": 40
 }
];
