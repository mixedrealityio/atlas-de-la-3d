export const SPECS = [
 {
  "key": "nuage",
  "title": "L’optimisation des gaussiennes",
  "sub": "du désordre à la forme",
  "kind": "cloud",
  "x0": 0
 },
 {
  "key": "rendu",
  "title": "Rendre des gaussiennes",
  "sub": "la rasterisation par splats",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Gaussiennes 3D",
    "s": "μ, Σ, α, SH",
    "pal": "blue"
   },
   {
    "n": "Projection",
    "s": "ellipses 2D à l’écran",
    "pal": "blue"
   },
   {
    "n": "Tuiles",
    "s": "16 × 16 pixels"
   },
   {
    "n": "Tri",
    "s": "par profondeur, sur GPU",
    "pal": "red"
   },
   {
    "n": "Mélange alpha",
    "s": "de l’avant vers l’arrière",
    "pal": "red"
   },
   {
    "n": "Image",
    "s": ""
   }
  ],
  "x0": 40
 }
];
