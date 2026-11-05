export const SPECS = [
 {
  "key": "poids",
  "title": "Gagner de la place",
  "sub": "un modèle texturé typique (illustratif, Mo)",
  "kind": "cbars",
  "bars": [
   {
    "n": "glTF brut",
    "v": 40,
    "pal": "red",
    "s": "≈ 40 Mo"
   },
   {
    "n": "+ Draco / meshopt",
    "v": 30,
    "pal": "blue",
    "s": "≈ 30 Mo"
   },
   {
    "n": "+ textures KTX2",
    "v": 6,
    "pal": "blue",
    "s": "≈ 6 Mo"
   },
   {
    "n": "+ LOD et streaming",
    "v": 1.5,
    "pal": "paper",
    "s": "≈ 1,5 Mo au départ"
   }
  ],
  "max": 40,
  "x0": 0
 },
 {
  "key": "tex",
  "title": "Les textures compressées",
  "sub": "lisibles directement par le GPU",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "PNG / JPEG",
    "s": "décompressés en mémoire"
   },
   {
    "n": "BC1–BC7",
    "s": "PC, consoles",
    "pal": "blue"
   },
   {
    "n": "ASTC",
    "s": "mobiles, casques",
    "pal": "blue"
   },
   {
    "n": "ETC2",
    "s": "Android ancien"
   },
   {
    "n": "Basis Universal",
    "s": "transcodé au chargement",
    "pal": "red"
   },
   {
    "n": "KTX2",
    "s": "le conteneur",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
