export const SPECS = [
 {
  "key": "quatre",
  "title": "Quatre représentations",
  "sub": "la même sphère",
  "kind": "reps",
  "x0": 0
 },
 {
  "key": "buffers",
  "title": "Ce que reçoit le GPU",
  "sub": "les tampons d’un maillage",
  "kind": "pipeline",
  "per": 4,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Sommets",
    "s": "positions",
    "pal": "blue"
   },
   {
    "n": "Attributs",
    "s": "normales, UV, couleurs",
    "pal": "blue"
   },
   {
    "n": "Indices",
    "s": "3 par triangle",
    "pal": "red"
   },
   {
    "n": "Vertex buffer",
    "s": "dans la mémoire GPU"
   }
  ],
  "x0": 40
 }
];
