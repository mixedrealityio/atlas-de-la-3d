export const SPECS = [
 {
  "key": "pose",
  "title": "Estimer la pose d’un objet",
  "sub": "les grandes approches",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Détection 2D",
    "s": "boîte dans l’image",
    "pal": "blue"
   },
   {
    "n": "Points clés",
    "s": "coins, votes vers des points 3D",
    "pal": "red"
   },
   {
    "n": "PnP + RANSAC",
    "s": "pose à partir de correspondances",
    "pal": "red"
   },
   {
    "n": "Raffinement",
    "s": "ICP, rendu-comparaison",
    "pal": "blue"
   },
   {
    "n": "Suivi",
    "s": "image après image"
   },
   {
    "n": "Ancre",
    "s": "hologramme posé"
   }
  ],
  "x0": 0
 },
 {
  "key": "local",
  "title": "L’IA locale sur un casque",
  "sub": "sans nuage",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Caméra du casque",
    "s": "photo/vidéo, profondeur"
   },
   {
    "n": "Modèle ONNX",
    "s": "quantifié 8 bits",
    "pal": "blue"
   },
   {
    "n": "Moteur",
    "s": "ONNX Runtime, Windows ML, Sentis",
    "pal": "blue"
   },
   {
    "n": "Détection + pose",
    "s": "quelques images/s",
    "pal": "red"
   },
   {
    "n": "Fusion SLAM",
    "s": "ancre stable",
    "pal": "red"
   },
   {
    "n": "Option : PC proche",
    "s": "Wi-Fi, remoting"
   }
  ],
  "x0": 40
 }
];
