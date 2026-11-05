export const SPECS = [
 {
  "key": "pipe",
  "title": "Le pipeline graphique",
  "sub": "du triangle au pixel",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Sommets",
    "s": "vertex shader",
    "pal": "blue"
   },
   {
    "n": "Assemblage",
    "s": "triangles"
   },
   {
    "n": "Découpage",
    "s": "clipping, ÷ w"
   },
   {
    "n": "Rasterisation",
    "s": "pixels couverts",
    "pal": "red"
   },
   {
    "n": "Fragments",
    "s": "fragment shader",
    "pal": "blue"
   },
   {
    "n": "Tests et fusion",
    "s": "profondeur, mélange",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "zbuf",
  "title": "Rasteriser et départager",
  "sub": "le Z-buffer",
  "kind": "raster",
  "x0": 40
 }
];
