export const SPECS = [
 {
  "key": "terrain",
  "title": "Un terrain fractal",
  "sub": "octave par octave",
  "kind": "noise",
  "x0": 0
 },
 {
  "key": "outils",
  "title": "Les outils procéduraux",
  "sub": "de la règle à la scène",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Bruits",
    "s": "Perlin, Simplex, Worley",
    "pal": "blue"
   },
   {
    "n": "WFC",
    "s": "tuiles et contraintes",
    "pal": "red"
   },
   {
    "n": "L-systèmes",
    "s": "réécriture : plantes",
    "pal": "blue"
   },
   {
    "n": "Grammaires",
    "s": "bâtiments, villes"
   },
   {
    "n": "Geometry Nodes",
    "s": "Blender",
    "pal": "red"
   },
   {
    "n": "Houdini",
    "s": "graphes procéduraux",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
