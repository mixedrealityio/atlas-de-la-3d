export const SPECS = [
 {
  "key": "chaine",
  "title": "La gestion de la couleur",
  "sub": "de la texture à l’écran",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Texture sRGB",
    "s": "courbe gamma"
   },
   {
    "n": "Décoder",
    "s": "en linéaire",
    "pal": "blue"
   },
   {
    "n": "Éclairer",
    "s": "calcul en linéaire, HDR",
    "pal": "red"
   },
   {
    "n": "Tone mapping",
    "s": "ACES, AgX",
    "pal": "red"
   },
   {
    "n": "Encoder",
    "s": "sRGB, P3, HDR10",
    "pal": "blue"
   },
   {
    "n": "Écran",
    "s": ""
   }
  ],
  "x0": 0
 },
 {
  "key": "gamuts",
  "title": "Les espaces de couleur",
  "sub": "part des couleurs visibles couverte (ordre de grandeur, %)",
  "kind": "cbars",
  "bars": [
   {
    "n": "sRGB",
    "v": 36,
    "pal": "paper",
    "s": "≈ 35 %"
   },
   {
    "n": "Display P3",
    "v": 46,
    "pal": "blue",
    "s": "≈ 45 %"
   },
   {
    "n": "Rec.2020",
    "v": 76,
    "pal": "red",
    "s": "≈ 75 %"
   }
  ],
  "max": 80,
  "x0": 40
 }
];
