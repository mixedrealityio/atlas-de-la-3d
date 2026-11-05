export const SPECS = [
 {
  "key": "sds",
  "title": "Le Score Distillation Sampling",
  "sub": "DreamFusion, 2022",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Représentation 3D",
    "s": "NeRF ou gaussiennes",
    "pal": "blue"
   },
   {
    "n": "Vue au hasard",
    "s": "rendu différentiable",
    "pal": "blue"
   },
   {
    "n": "Diffusion 2D",
    "s": "critique pré-entraîné",
    "pal": "red"
   },
   {
    "n": "Gradient SDS",
    "s": "« rends cette vue plus plausible »",
    "pal": "red"
   },
   {
    "n": "Mise à jour",
    "s": "des milliers d’itérations"
   }
  ],
  "x0": 0
 },
 {
  "key": "direct",
  "title": "Les générateurs directs",
  "sub": "en un passage",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Image ou texte",
    "s": ""
   },
   {
    "n": "Vues multiples",
    "s": "diffusion multi-vues cohérente",
    "pal": "blue"
   },
   {
    "n": "Reconstruction",
    "s": "LRM, LGM, InstantMesh",
    "pal": "red"
   },
   {
    "n": "Ou : diffusion 3D native",
    "s": "latent 3D (chapitre 41)",
    "pal": "red"
   },
   {
    "n": "Maillage + texture",
    "s": "PBR",
    "pal": "blue"
   },
   {
    "n": "Retouche",
    "s": "Blender"
   }
  ],
  "x0": 40
 }
];
