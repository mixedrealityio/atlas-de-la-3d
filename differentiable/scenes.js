export const SPECS = [
 {
  "key": "boucle",
  "title": "La boucle",
  "sub": "apprendre la 3D avec des images",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Paramètres 3D",
    "s": "sommets, textures, gaussiennes",
    "pal": "blue"
   },
   {
    "n": "Rendu différentiable",
    "s": "image prédite",
    "pal": "red"
   },
   {
    "n": "Image réelle",
    "s": "photo"
   },
   {
    "n": "Perte",
    "s": "pixels, masque, profondeur"
   },
   {
    "n": "Gradient",
    "s": "rétropropagé jusqu’à la 3D",
    "pal": "red"
   },
   {
    "n": "Mise à jour",
    "s": "optimiseur",
    "pal": "blue"
   }
  ],
  "x0": 0
 },
 {
  "key": "ray",
  "title": "Rendu volumique différentiable",
  "sub": "le cas le plus simple",
  "kind": "nerf",
  "x0": 40
 }
];
