export const SPECS = [
 {
  "key": "m2p",
  "title": "Le budget motion-to-photon",
  "sub": "exemple à 90 Hz",
  "kind": "timing",
  "segs": [
   {
    "n": "capteurs",
    "ms": 1,
    "pal": "dark"
   },
   {
    "n": "prédiction",
    "ms": 1,
    "pal": "blue"
   },
   {
    "n": "rendu de l’application",
    "ms": 10,
    "pal": "paper"
   },
   {
    "n": "timewarp",
    "ms": 1.5,
    "pal": "red"
   },
   {
    "n": "balayage de l’écran",
    "ms": 5,
    "pal": "blue"
   },
   {
    "n": "pixels",
    "ms": 1,
    "pal": "red"
   }
  ],
  "note": "réduit par la prédiction",
  "x0": 0
 },
 {
  "key": "warp",
  "title": "Reprojeter au dernier moment",
  "sub": "timewarp et spacewarp",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Pose prédite",
    "s": "début du rendu",
    "pal": "blue"
   },
   {
    "n": "Rendu",
    "s": "8 à 11 ms"
   },
   {
    "n": "Pose réelle",
    "s": "juste avant l’écran",
    "pal": "blue"
   },
   {
    "n": "Timewarp",
    "s": "tourner l’image",
    "pal": "red"
   },
   {
    "n": "Spacewarp",
    "s": "extrapoler le mouvement",
    "pal": "red"
   },
   {
    "n": "Écran",
    "s": ""
   }
  ],
  "x0": 40
 }
];
