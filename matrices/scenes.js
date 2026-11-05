export const SPECS = [
 {
  "key": "trs",
  "title": "Une matrice 4×4",
  "sub": "translation, rotation, échelle",
  "kind": "xform",
  "x0": 0
 },
 {
  "key": "chaine",
  "title": "La chaîne des repères",
  "sub": "d’un sommet au pixel",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Objet",
    "s": "coordonnées locales"
   },
   {
    "n": "Monde",
    "s": "× matrice modèle",
    "pal": "blue"
   },
   {
    "n": "Vue",
    "s": "× matrice vue (caméra)",
    "pal": "blue"
   },
   {
    "n": "Découpage",
    "s": "× matrice projection",
    "pal": "red"
   },
   {
    "n": "NDC",
    "s": "÷ w",
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
