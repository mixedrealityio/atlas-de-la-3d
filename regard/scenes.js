export const SPECS = [
 {
  "key": "fovea",
  "title": "Suivi du regard et rendu fovéal",
  "sub": "PCCR",
  "kind": "eye",
  "x0": 0
 },
 {
  "key": "chaine",
  "title": "Du reflet au regard",
  "sub": "le pipeline",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Diodes IR",
    "s": "éclairent l’œil"
   },
   {
    "n": "Caméra IR",
    "s": "100 à 200 Hz"
   },
   {
    "n": "Pupille + reflets",
    "s": "segmentation",
    "pal": "blue"
   },
   {
    "n": "Modèle de l’œil",
    "s": "rayon du regard",
    "pal": "blue"
   },
   {
    "n": "Calibration",
    "s": "fixer quelques points",
    "pal": "red"
   },
   {
    "n": "Regard 3D",
    "s": "par œil, convergence",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
