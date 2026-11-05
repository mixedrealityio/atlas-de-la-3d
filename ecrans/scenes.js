export const SPECS = [
 {
  "key": "lcd",
  "title": "Un écran LCD",
  "sub": "la lumière filtrée",
  "kind": "stack",
  "layers": [
   {
    "n": "rétroéclairage",
    "s": "LED blanches",
    "pal": "yellow",
    "w": 0.5
   },
   {
    "n": "polariseur",
    "w": 0.15,
    "pal": "dark"
   },
   {
    "n": "cristaux liquides",
    "s": "vanne par pixel",
    "pal": "blue",
    "w": 0.4
   },
   {
    "n": "filtres couleur",
    "s": "R, V, B",
    "pal": "red",
    "w": 0.2
   },
   {
    "n": "polariseur",
    "w": 0.15,
    "pal": "dark"
   }
  ],
  "pal": "yellow",
  "pal2": "yellow",
  "x0": 0
 },
 {
  "key": "oled",
  "title": "Un écran OLED",
  "sub": "chaque pixel émet",
  "kind": "stack",
  "layers": [
   {
    "n": "transistors",
    "s": "matrice active",
    "pal": "dark",
    "w": 0.3
   },
   {
    "n": "couche organique",
    "s": "émet la lumière",
    "pal": "red",
    "w": 0.3
   },
   {
    "n": "encapsulation",
    "pal": "paper",
    "w": 0.2
   },
   {
    "n": "polariseur circulaire",
    "s": "anti-reflet",
    "pal": "dark",
    "w": 0.15
   }
  ],
  "pal": "red",
  "pal2": "green",
  "x0": 40
 }
];
