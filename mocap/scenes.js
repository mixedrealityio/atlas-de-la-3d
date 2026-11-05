export const SPECS = [
 {
  "key": "chaine",
  "title": "Un squelette en mouvement",
  "sub": "cinématique directe",
  "kind": "ik",
  "mode": "fk",
  "x0": 0
 },
 {
  "key": "familles",
  "title": "Trois familles",
  "sub": "comment on capte",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Optique à marqueurs",
    "s": "caméras IR + boules réfléchissantes",
    "pal": "blue"
   },
   {
    "n": "Inertielle",
    "s": "capteurs IMU sur le corps",
    "pal": "red"
   },
   {
    "n": "Sans marqueurs",
    "s": "vidéo + réseau de neurones",
    "pal": "red"
   },
   {
    "n": "Retargeting",
    "s": "adapter au personnage"
   },
   {
    "n": "Nettoyage",
    "s": "trous, glissements"
   }
  ],
  "x0": 40
 }
];
