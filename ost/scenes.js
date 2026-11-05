export const SPECS = [
 {
  "key": "qr",
  "title": "Calibrer avec un QR code",
  "sub": "de l’image à la pose",
  "kind": "marker",
  "x0": 0
 },
 {
  "key": "chaine",
  "title": "La chaîne de calibration complète",
  "sub": "de l’œil au réel",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Caméra",
    "s": "intrinsèques : focale, distorsion",
    "pal": "blue"
   },
   {
    "n": "Caméra ↔ casque",
    "s": "extrinsèques",
    "pal": "blue"
   },
   {
    "n": "Casque ↔ monde",
    "s": "SLAM, marqueur",
    "pal": "red"
   },
   {
    "n": "Œil ↔ afficheur",
    "s": "SPAAM, eye tracking",
    "pal": "red"
   },
   {
    "n": "Validation",
    "s": "mesurer l’erreur"
   }
  ],
  "x0": 40
 }
];
