export const SPECS = [
 {
  "key": "chaine",
  "title": "La chaîne de post-traitement",
  "sub": "après le rendu",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Image HDR",
    "s": "valeurs > 1",
    "pal": "blue"
   },
   {
    "n": "Anticrénelage",
    "s": "TAA, MSAA",
    "pal": "red"
   },
   {
    "n": "Bloom",
    "s": "halos lumineux"
   },
   {
    "n": "Flou",
    "s": "mouvement, profondeur"
   },
   {
    "n": "Tone mapping",
    "s": "HDR → écran",
    "pal": "red"
   },
   {
    "n": "Couleur",
    "s": "étalonnage, gamma",
    "pal": "blue"
   }
  ],
  "x0": 0
 },
 {
  "key": "aa",
  "title": "Les anticrénelages",
  "sub": "lisser les bords",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "SSAA",
    "s": "rendre plus grand, réduire"
   },
   {
    "n": "MSAA",
    "s": "plusieurs échantillons de profondeur",
    "pal": "blue"
   },
   {
    "n": "FXAA, SMAA",
    "s": "détecter les bords dans l’image"
   },
   {
    "n": "TAA",
    "s": "accumuler sur plusieurs images",
    "pal": "red"
   },
   {
    "n": "DLSS, FSR",
    "s": "reconstruction par IA",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
