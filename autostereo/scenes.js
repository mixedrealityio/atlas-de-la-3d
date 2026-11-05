export const SPECS = [
 {
  "key": "lenti",
  "title": "La 3D sans lunettes",
  "sub": "une vue par direction",
  "kind": "headset",
  "mode": "lightfield",
  "x0": 0
 },
 {
  "key": "volumes",
  "title": "Les écrans volumétriques et de scène",
  "sub": "voir ensemble, sans casque",
  "kind": "pipeline",
  "per": 6,
  "bw": 1.6,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Balayage rotatif",
    "s": "un plan qui tourne (Voxon)",
    "pal": "blue"
   },
   {
    "n": "Milieux diffusants",
    "s": "brume, particules"
   },
   {
    "n": "Plasma laser",
    "s": "points dans l’air",
    "pal": "red"
   },
   {
    "n": "Pepper’s ghost",
    "s": "reflet sur une vitre"
   },
   {
    "n": "Ventilateurs LED",
    "s": "persistance rétinienne"
   },
   {
    "n": "Cabines",
    "s": "téléprésence",
    "pal": "blue"
   }
  ],
  "x0": 40
 }
];
