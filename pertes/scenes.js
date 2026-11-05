export const SPECS = [
 {
  "key": "pertes",
  "title": "Comparer deux formes",
  "sub": "les pertes courantes",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Chamfer",
    "s": "plus proche voisin, dans les deux sens",
    "pal": "blue"
   },
   {
    "n": "Earth Mover",
    "s": "transport optimal",
    "pal": "red"
   },
   {
    "n": "IoU 3D",
    "s": "recouvrement des volumes",
    "pal": "blue"
   },
   {
    "n": "SDF / occupation",
    "s": "erreur sur un champ"
   },
   {
    "n": "Rendu",
    "s": "erreur sur des images"
   },
   {
    "n": "Régularisation",
    "s": "lissage, normales",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "lisse",
  "title": "Régulariser une surface",
  "sub": "pénaliser les irrégularités",
  "kind": "noise",
  "x0": 40
 }
];
