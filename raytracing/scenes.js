export const SPECS = [
 {
  "key": "bvh",
  "title": "La BVH",
  "sub": "ne tester que ce qui est sur le chemin",
  "kind": "bvh",
  "x0": 0
 },
 {
  "key": "path",
  "title": "Le path tracing",
  "sub": "estimer l’équation du rendu",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Rayon caméra",
    "s": "un par pixel",
    "pal": "blue"
   },
   {
    "n": "Intersection",
    "s": "BVH",
    "pal": "red"
   },
   {
    "n": "Rebond",
    "s": "direction tirée selon la BRDF",
    "pal": "blue"
   },
   {
    "n": "Lumière",
    "s": "rayon d’ombre vers une source"
   },
   {
    "n": "Accumuler",
    "s": "moyenne de nombreux chemins",
    "pal": "red"
   },
   {
    "n": "Débruiter",
    "s": "réseau de neurones"
   }
  ],
  "x0": 40
 }
];
