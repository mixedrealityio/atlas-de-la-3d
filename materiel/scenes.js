export const SPECS = [
 {
  "key": "prec",
  "title": "La précision des nombres",
  "sub": "octets par valeur",
  "kind": "cbars",
  "bars": [
   {
    "n": "FP32",
    "v": 4,
    "pal": "red",
    "s": "4 o"
   },
   {
    "n": "bfloat16",
    "v": 2,
    "pal": "blue",
    "s": "2 o"
   },
   {
    "n": "FP16",
    "v": 2,
    "pal": "blue",
    "s": "2 o"
   },
   {
    "n": "FP8",
    "v": 1,
    "pal": "paper",
    "s": "1 o"
   }
  ],
  "max": 4,
  "x0": 0
 },
 {
  "key": "para",
  "title": "Répartir sur plusieurs GPU",
  "sub": "les parallélismes",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Données (DDP)",
    "s": "chaque GPU, un lot différent",
    "pal": "blue"
   },
   {
    "n": "FSDP / ZeRO",
    "s": "paramètres répartis",
    "pal": "red"
   },
   {
    "n": "Pipeline",
    "s": "couches réparties"
   },
   {
    "n": "Spatial",
    "s": "scène découpée en blocs",
    "pal": "red"
   },
   {
    "n": "Synchronisation",
    "s": "moyenne des gradients"
   }
  ],
  "x0": 40
 }
];
