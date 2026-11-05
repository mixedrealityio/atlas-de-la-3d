export const SPECS = [
 {
  "key": "casteljau",
  "title": "La courbe de Bézier",
  "sub": "l’algorithme de de Casteljau",
  "kind": "bezier",
  "x0": 0
 },
 {
  "key": "csg",
  "title": "Géométrie constructive (CSG)",
  "sub": "combiner des solides",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.8,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Cube",
    "s": "solide A",
    "pal": "blue"
   },
   {
    "n": "Sphère",
    "s": "solide B",
    "pal": "blue"
   },
   {
    "n": "Union",
    "s": "A ∪ B"
   },
   {
    "n": "Différence",
    "s": "A − B",
    "pal": "red"
   },
   {
    "n": "Intersection",
    "s": "A ∩ B"
   }
  ],
  "x0": 40
 }
];
