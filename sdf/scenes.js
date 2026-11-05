export const SPECS = [
 {
  "key": "trace",
  "title": "Le lancer de sphères",
  "sub": "sphere tracing",
  "kind": "sdf",
  "x0": 0
 },
 {
  "key": "ops",
  "title": "Combiner des champs",
  "sub": "les booléens deviennent min et max",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Union",
    "s": "min(d₁, d₂)",
    "pal": "blue"
   },
   {
    "n": "Intersection",
    "s": "max(d₁, d₂)",
    "pal": "blue"
   },
   {
    "n": "Différence",
    "s": "max(d₁, −d₂)",
    "pal": "red"
   },
   {
    "n": "Union douce",
    "s": "smooth min",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
