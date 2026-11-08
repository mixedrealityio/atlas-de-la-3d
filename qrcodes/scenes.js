export const SPECS = [
 {
  "key": "modules",
  "title": "Versions, modules et zone de silence",
  "sub": "même côté imprimé, modules de plus en plus petits",
  "kind": "qrmods",
  "side": 10,
  "vers": [
   {
    "n": "QR version 1",
    "N": 21,
    "q": 4,
    "cap": "25 caractères (L), 20 (M)"
   },
   {
    "n": "QR version 2",
    "N": 25,
    "q": 4,
    "cap": "47 caractères (L), 38 (M)"
   },
   {
    "n": "QR version 4",
    "N": 33,
    "q": 4,
    "cap": "114 caractères (L), 90 (M)"
   },
   {
    "n": "Micro QR M3",
    "N": 15,
    "q": 2,
    "micro": true,
    "cap": "14 caractères (niveau L)"
   }
  ],
  "x0": 0
 },
 {
  "key": "reperage",
  "title": "Le motif de repérage",
  "sub": "le rapport 1 : 1 : 3 : 1 : 1",
  "kind": "finder",
  "x0": 40
 },
 {
  "key": "portee",
  "title": "La portée de détection",
  "sub": "QR version 1 sur HoloLens 2 (ordre de grandeur)",
  "kind": "qrrange",
  "max": 2.5,
  "rows": [
   {
    "n": "5 cm",
    "a": 0.25,
    "b": 0.5
   },
   {
    "n": "10 cm",
    "a": 0.31,
    "b": 0.88
   },
   {
    "n": "15 cm",
    "a": 0.38,
    "b": 1.25
   },
   {
    "n": "20 cm",
    "a": 0.44,
    "b": 1.63
   },
   {
    "n": "25 cm",
    "a": 0.5,
    "b": 2.0
   }
  ],
  "x0": 80
 },
 {
  "key": "levier",
  "title": "Le bras de levier",
  "sub": "une petite erreur d’angle, un grand écart",
  "kind": "lever",
  "deg": 1,
  "dmax": 5,
  "show": 6,
  "x0": 120
 },
 {
  "key": "reflet",
  "title": "Dévier le reflet",
  "sub": "un miroir renvoie la lumière selon l’angle",
  "kind": "glare",
  "x0": 160
 },
 {
  "key": "procedure",
  "title": "Une procédure de recalage fiable",
  "sub": "de l’impression à la vérification",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Préparer",
    "s": "ID court, impression à 100 %"
   },
   {
    "n": "Poser",
    "s": "support rigide, position relevée",
    "pal": "blue"
   },
   {
    "n": "Scanner",
    "s": "de près, ± 45°, immobile",
    "pal": "blue"
   },
   {
    "n": "Filtrer",
    "s": "plusieurs détections, médiane",
    "pal": "red"
   },
   {
    "n": "Ancrer",
    "s": "ancre locale près du contenu",
    "pal": "red"
   },
   {
    "n": "Vérifier",
    "s": "point de contrôle"
   }
  ],
  "x0": 200
 }
];
