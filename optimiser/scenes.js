export const SPECS = [
 {
  "key": "budget",
  "title": "Le budget d’une image",
  "sub": "millisecondes disponibles selon la fréquence",
  "kind": "cbars",
  "bars": [
   {
    "n": "60 Hz (écran)",
    "v": 16.7,
    "pal": "paper",
    "s": "16,7 ms"
   },
   {
    "n": "72 Hz",
    "v": 13.9,
    "pal": "blue",
    "s": "13,9 ms"
   },
   {
    "n": "90 Hz (VR)",
    "v": 11.1,
    "pal": "blue",
    "s": "11,1 ms"
   },
   {
    "n": "120 Hz",
    "v": 8.3,
    "pal": "red",
    "s": "8,3 ms"
   }
  ],
  "max": 17,
  "x0": 0
 },
 {
  "key": "archi",
  "title": "Trois architectures",
  "sub": "comment éclairer",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Forward",
    "s": "toutes les lumières par objet",
    "pal": "blue"
   },
   {
    "n": "Deferred",
    "s": "G-buffer, puis éclairage",
    "pal": "red"
   },
   {
    "n": "Forward+ / clustered",
    "s": "lumières triées par cellule",
    "pal": "red"
   },
   {
    "n": "Transparence",
    "s": "forward obligatoire"
   },
   {
    "n": "Casques mobiles",
    "s": "forward + MSAA",
    "pal": "blue"
   }
  ],
  "x0": 40
 }
];
