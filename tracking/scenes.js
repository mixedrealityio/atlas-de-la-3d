export const SPECS = [
 {
  "key": "fusion",
  "title": "La fusion de capteurs",
  "sub": "rapide + précis",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Gyroscope",
    "s": "vitesse angulaire, 1 kHz",
    "pal": "blue"
   },
   {
    "n": "Accéléromètre",
    "s": "gravité + accélération",
    "pal": "blue"
   },
   {
    "n": "Intégration",
    "s": "orientation, position"
   },
   {
    "n": "Caméras",
    "s": "30 à 90 Hz, sans dérive",
    "pal": "red"
   },
   {
    "n": "Filtre",
    "s": "Kalman étendu, complémentaire",
    "pal": "red"
   },
   {
    "n": "Pose 6DoF",
    "s": "prédite pour l’affichage"
   }
  ],
  "x0": 0
 },
 {
  "key": "ddl",
  "title": "3DoF et 6DoF",
  "sub": "les degrés de liberté",
  "kind": "pipeline",
  "per": 6,
  "bw": 1.5,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Lacet",
    "s": "tourner la tête",
    "pal": "blue"
   },
   {
    "n": "Tangage",
    "s": "hocher",
    "pal": "blue"
   },
   {
    "n": "Roulis",
    "s": "pencher",
    "pal": "blue"
   },
   {
    "n": "x",
    "s": "gauche / droite",
    "pal": "red"
   },
   {
    "n": "y",
    "s": "haut / bas",
    "pal": "red"
   },
   {
    "n": "z",
    "s": "avant / arrière",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
