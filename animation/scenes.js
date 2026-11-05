export const SPECS = [
 {
  "key": "ik",
  "title": "La cinématique inverse",
  "sub": "atteindre une cible",
  "kind": "ik",
  "x0": 0
 },
 {
  "key": "fk",
  "title": "La cinématique directe",
  "sub": "des angles à la position",
  "kind": "ik",
  "mode": "fk",
  "x0": 40
 },
 {
  "key": "skin",
  "title": "Le skinning",
  "sub": "des os à la peau",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Squelette",
    "s": "hiérarchie d’os",
    "pal": "blue"
   },
   {
    "n": "Poids",
    "s": "chaque sommet, ≤ 4 os",
    "pal": "blue"
   },
   {
    "n": "Matrices d’os",
    "s": "pose courante × inverse de liaison",
    "pal": "red"
   },
   {
    "n": "Mélange",
    "s": "LBS ou quaternions duaux",
    "pal": "red"
   },
   {
    "n": "Blendshapes",
    "s": "expressions, correctifs"
   }
  ],
  "x0": 80
 }
];
