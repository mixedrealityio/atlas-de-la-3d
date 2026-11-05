export const SPECS = [
 {
  "key": "col",
  "title": "Détecter une collision",
  "sub": "phase large, puis phase fine",
  "kind": "collide",
  "x0": 0
 },
 {
  "key": "etapes",
  "title": "Un pas de simulation",
  "sub": "corps rigides",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Forces",
    "s": "gravité, ressorts"
   },
   {
    "n": "Intégration",
    "s": "vitesses, positions",
    "pal": "blue"
   },
   {
    "n": "Phase large",
    "s": "paires candidates",
    "pal": "blue"
   },
   {
    "n": "Phase fine",
    "s": "points de contact",
    "pal": "red"
   },
   {
    "n": "Résolution",
    "s": "contraintes, impulsions",
    "pal": "red"
   },
   {
    "n": "Sommeil",
    "s": "objets immobiles ignorés"
   }
  ],
  "x0": 40
 }
];
