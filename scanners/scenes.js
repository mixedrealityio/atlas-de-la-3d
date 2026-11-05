export const SPECS = [
 {
  "key": "methodes",
  "title": "Mesurer la profondeur",
  "sub": "trois principes",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Temps de vol direct",
    "s": "mesurer l’aller-retour d’une impulsion",
    "pal": "red"
   },
   {
    "n": "Temps de vol indirect",
    "s": "déphasage d’une lumière modulée",
    "pal": "red"
   },
   {
    "n": "Lumière structurée",
    "s": "déformation d’un motif projeté",
    "pal": "blue"
   },
   {
    "n": "Triangulation laser",
    "s": "position d’un point laser vu de côté",
    "pal": "blue"
   },
   {
    "n": "Stéréo active",
    "s": "deux caméras + motif"
   }
  ],
  "x0": 0
 },
 {
  "key": "comparer",
  "title": "Portée et précision",
  "sub": "ordres de grandeur",
  "kind": "cbars",
  "bars": [
   {
    "n": "triangulation laser",
    "v": 0.05,
    "pal": "red",
    "s": "≈ 0,05 mm"
   },
   {
    "n": "lumière structurée",
    "v": 0.2,
    "pal": "blue",
    "s": "≈ 0,1–0,5 mm"
   },
   {
    "n": "LiDAR terrestre",
    "v": 3,
    "pal": "blue",
    "s": "≈ 2–5 mm"
   },
   {
    "n": "LiDAR de téléphone",
    "v": 10,
    "pal": "paper",
    "s": "≈ 1 cm"
   }
  ],
  "max": 10,
  "x0": 40
 }
];
