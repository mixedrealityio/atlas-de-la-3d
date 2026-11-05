export const SPECS = [
 {
  "key": "ecarts",
  "title": "L’écart avec l’œil humain",
  "sub": "casque actuel ÷ vision humaine (en %, ordre de grandeur)",
  "kind": "cbars",
  "bars": [
   {
    "n": "champ de vision",
    "v": 55,
    "pal": "blue",
    "s": "≈ 55 %"
   },
   {
    "n": "acuité (PPD)",
    "v": 50,
    "pal": "blue",
    "s": "≈ 40–60 %"
   },
   {
    "n": "plans focaux",
    "v": 10,
    "pal": "red",
    "s": "1 seul"
   }
  ],
  "max": 100,
  "x0": 0
 },
 {
  "key": "route",
  "title": "La feuille de route",
  "sub": "ce qui fera sauter les verrous",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Micro-OLED, micro-LED",
    "s": "densité, luminance",
    "pal": "blue"
   },
   {
    "n": "Pancake, holographique",
    "s": "minceur",
    "pal": "blue"
   },
   {
    "n": "Rendu fovéal",
    "s": "puissance utile",
    "pal": "red"
   },
   {
    "n": "Calcul déporté",
    "s": "5G, Wi-Fi, PC proche"
   },
   {
    "n": "Assistants IA",
    "s": "l’usage quotidien",
    "pal": "red"
   },
   {
    "n": "Normes",
    "s": "vie privée, sécurité"
   }
  ],
  "x0": 40
 }
];
