export const SPECS = [
 {
  "key": "aug",
  "title": "Augmenter un nuage de points",
  "sub": "à chaque époque, au hasard",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Centrer",
    "s": "sur le barycentre",
    "pal": "blue"
   },
   {
    "n": "Mettre à l’échelle",
    "s": "sphère unité",
    "pal": "blue"
   },
   {
    "n": "Tourner",
    "s": "autour de l’axe vertical",
    "pal": "red"
   },
   {
    "n": "Bruiter",
    "s": "jitter gaussien",
    "pal": "red"
   },
   {
    "n": "Sous-échantillonner",
    "s": "N points"
   },
   {
    "n": "Découper",
    "s": "patchs, retrait de zones"
   }
  ],
  "x0": 0
 },
 {
  "key": "normal",
  "title": "Normaliser l’espace",
  "sub": "un même repère pour tous",
  "kind": "xform",
  "x0": 40
 }
];
