export const SPECS = [
 {
  "key": "chaine",
  "title": "De la surface aux cartes PBR",
  "sub": "capture de SVBRDF",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Éclairages multiples",
    "s": "dôme de LED, photos"
   },
   {
    "n": "Polarisation",
    "s": "séparer diffus et spéculaire",
    "pal": "blue"
   },
   {
    "n": "Stéréo photométrique",
    "s": "normales",
    "pal": "blue"
   },
   {
    "n": "Ajustement",
    "s": "BRDF par pixel",
    "pal": "red"
   },
   {
    "n": "Cartes",
    "s": "couleur, normale, rugosité",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "stack",
  "title": "La polarisation",
  "sub": "séparer deux réflexions",
  "kind": "stack",
  "layers": [
   {
    "n": "lampe",
    "pal": "yellow",
    "w": 0.4
   },
   {
    "n": "polariseur",
    "s": "lumière polarisée",
    "pal": "dark",
    "w": 0.12
   },
   {
    "n": "surface",
    "s": "diffus + spéculaire",
    "pal": "blue",
    "w": 0.5
   },
   {
    "n": "analyseur",
    "s": "croisé ou parallèle",
    "pal": "dark",
    "w": 0.12
   }
  ],
  "out": "vers l’objectif",
  "x0": 40
 }
];
