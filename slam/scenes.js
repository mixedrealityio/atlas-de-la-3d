export const SPECS = [
 {
  "key": "carte",
  "title": "Le SLAM",
  "sub": "localisation et cartographie simultanées",
  "kind": "slam",
  "x0": 0
 },
 {
  "key": "ancres",
  "title": "Les ancres spatiales",
  "sub": "attacher le virtuel au réel",
  "kind": "slam",
  "mode": "anchor",
  "x0": 40
 },
 {
  "key": "etapes",
  "title": "Le pipeline d’un SLAM visuel",
  "sub": "d’une image à la carte",
  "kind": "pipeline",
  "per": 4,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Image",
    "s": "caméras"
   },
   {
    "n": "Points d’intérêt",
    "s": "ORB, FAST, réseaux",
    "pal": "blue"
   },
   {
    "n": "Appariement",
    "s": "image précédente, carte",
    "pal": "blue"
   },
   {
    "n": "Pose",
    "s": "PnP + IMU",
    "pal": "red"
   },
   {
    "n": "Images clés",
    "s": "ajout à la carte"
   },
   {
    "n": "Optimisation",
    "s": "ajustement de faisceaux",
    "pal": "red"
   },
   {
    "n": "Boucles",
    "s": "reconnaître un lieu déjà vu",
    "pal": "red"
   }
  ],
  "x0": 80
 }
];
