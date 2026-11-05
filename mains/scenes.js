export const SPECS = [
 {
  "key": "squelette",
  "title": "Le squelette de la main",
  "sub": "21 articulations",
  "kind": "hand",
  "x0": 0
 },
 {
  "key": "chaine",
  "title": "Du pixel au squelette",
  "sub": "le pipeline d’un casque",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Caméras",
    "s": "mono ou stéréo, infrarouge"
   },
   {
    "n": "Détection",
    "s": "où sont les mains ?",
    "pal": "blue"
   },
   {
    "n": "Recadrage",
    "s": "une imagette par main"
   },
   {
    "n": "Points clés",
    "s": "réseau de neurones",
    "pal": "red"
   },
   {
    "n": "Ajustement",
    "s": "modèle cinématique 3D",
    "pal": "red"
   },
   {
    "n": "Lissage",
    "s": "filtre, prédiction",
    "pal": "blue"
   }
  ],
  "x0": 40
 }
];
