export const SPECS = [
 {
  "key": "tokens",
  "title": "Un transformer 3D",
  "sub": "des jetons d’espace",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Données 3D",
    "s": "points, voxels, gaussiennes, images"
   },
   {
    "n": "Tokenisation",
    "s": "patchs, groupes de points",
    "pal": "blue"
   },
   {
    "n": "Encodage de position",
    "s": "3D",
    "pal": "blue"
   },
   {
    "n": "Attention",
    "s": "chaque jeton regarde les autres",
    "pal": "red"
   },
   {
    "n": "Têtes",
    "s": "segmentation, détection, génération",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "vae",
  "title": "Un 3D-VAE",
  "sub": "compresser la forme",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Forme 3D",
    "s": "points, SDF"
   },
   {
    "n": "Encodeur",
    "s": "vers un latent",
    "pal": "blue"
   },
   {
    "n": "Latent compact",
    "s": "quelques milliers de nombres",
    "pal": "red"
   },
   {
    "n": "Décodeur",
    "s": "champ d’occupation ou SDF",
    "pal": "blue"
   },
   {
    "n": "Maillage",
    "s": "marching cubes"
   }
  ],
  "x0": 40
 }
];
