export const SPECS = [
 {
  "key": "nits",
  "title": "La luminosité à l’œil",
  "sub": "ordres de grandeur, en nits (cd/m²)",
  "kind": "cbars",
  "bars": [
   {
    "n": "casque VR",
    "v": 150,
    "pal": "paper",
    "s": "≈ 150"
   },
   {
    "n": "AR intérieure",
    "v": 800,
    "pal": "blue",
    "s": "≈ 800"
   },
   {
    "n": "AR plein jour",
    "v": 3000,
    "pal": "red",
    "s": "≥ 3 000"
   }
  ],
  "max": 3000,
  "x0": 0
 },
 {
  "key": "familles",
  "title": "Les familles d’écrans pour la XR",
  "sub": "forces et terrains",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "OLED",
    "s": "contraste, coût"
   },
   {
    "n": "Micro-OLED",
    "s": "densité extrême",
    "pal": "blue"
   },
   {
    "n": "Micro-LED",
    "s": "luminance, durée de vie",
    "pal": "red"
   },
   {
    "n": "Balayage laser",
    "s": "compact, rétinien",
    "pal": "red"
   },
   {
    "n": "LCD + pancake",
    "s": "coût, luminance",
    "pal": "blue"
   }
  ],
  "x0": 40
 }
];
