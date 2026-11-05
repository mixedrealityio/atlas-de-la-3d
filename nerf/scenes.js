export const SPECS = [
 {
  "key": "rayon",
  "title": "Le rendu volumique",
  "sub": "un rayon, des échantillons",
  "kind": "nerf",
  "x0": 0
 },
 {
  "key": "entrain",
  "title": "Entraîner un NeRF",
  "sub": "la boucle",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Photos + poses",
    "s": "COLMAP"
   },
   {
    "n": "Rayons",
    "s": "un lot de pixels",
    "pal": "blue"
   },
   {
    "n": "Échantillons",
    "s": "le long des rayons",
    "pal": "blue"
   },
   {
    "n": "MLP",
    "s": "couleur, densité",
    "pal": "red"
   },
   {
    "n": "Rendu volumique",
    "s": "couleur prédite",
    "pal": "red"
   },
   {
    "n": "Perte",
    "s": "vs photo réelle"
   }
  ],
  "x0": 40
 }
];
