export const SPECS = [
 {
  "key": "disp",
  "title": "La disparité",
  "sub": "une image par œil",
  "kind": "stereo",
  "x0": 0
 },
 {
  "key": "rendu",
  "title": "Rendre deux vues",
  "sub": "les techniques des moteurs",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Deux passes",
    "s": "une par œil"
   },
   {
    "n": "Multiview",
    "s": "un seul appel, deux couches",
    "pal": "blue"
   },
   {
    "n": "Instanced stereo",
    "s": "dessiner chaque objet deux fois",
    "pal": "blue"
   },
   {
    "n": "Fovéal",
    "s": "moins de pixels hors du regard",
    "pal": "red"
   },
   {
    "n": "Compositeur",
    "s": "distorsion, timewarp"
   }
  ],
  "x0": 40
 }
];
