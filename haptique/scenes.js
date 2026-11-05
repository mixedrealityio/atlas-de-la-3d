export const SPECS = [
 {
  "key": "familles",
  "title": "Les familles d’haptique",
  "sub": "du plus simple au plus riche",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Vibration ERM",
    "s": "moteur à balourd"
   },
   {
    "n": "LRA",
    "s": "résonateur linéaire, précis",
    "pal": "blue"
   },
   {
    "n": "Voice coil",
    "s": "large bande, textures",
    "pal": "blue"
   },
   {
    "n": "Gâchettes actives",
    "s": "résistance variable",
    "pal": "red"
   },
   {
    "n": "Gants à force",
    "s": "freins sur les doigts",
    "pal": "red"
   },
   {
    "n": "Ultrasons",
    "s": "haptique dans l’air"
   }
  ],
  "x0": 0
 },
 {
  "key": "manette",
  "title": "Une manette 6DoF",
  "sub": "ce qu’elle contient",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Anneau ou caméras",
    "s": "suivi optique",
    "pal": "blue"
   },
   {
    "n": "IMU",
    "s": "orientation, accélération",
    "pal": "blue"
   },
   {
    "n": "Boutons et capteurs",
    "s": "gâchettes, présence des doigts"
   },
   {
    "n": "Haptique",
    "s": "LRA",
    "pal": "red"
   },
   {
    "n": "Radio",
    "s": "liaison avec le casque"
   }
  ],
  "x0": 40
 }
];
