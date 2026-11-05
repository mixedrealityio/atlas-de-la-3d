export const SPECS = [
 {
  "key": "formats",
  "title": "Les formats",
  "sub": "chacun son rôle",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "OBJ",
    "s": "géométrie simple, texte"
   },
   {
    "n": "STL",
    "s": "triangles pour l’impression"
   },
   {
    "n": "FBX",
    "s": "scènes animées (propriétaire)",
    "pal": "blue"
   },
   {
    "n": "glTF 2.0",
    "s": "le « JPEG de la 3D »",
    "pal": "red"
   },
   {
    "n": "USD",
    "s": "scènes composées, pipelines",
    "pal": "red"
   },
   {
    "n": "Alembic",
    "s": "caches de géométrie animée",
    "pal": "blue"
   }
  ],
  "x0": 0
 },
 {
  "key": "gltf",
  "title": "L’intérieur d’un glTF",
  "sub": "JSON + binaire",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Scène",
    "s": "nœuds et hiérarchie"
   },
   {
    "n": "Maillages",
    "s": "primitives, attributs",
    "pal": "blue"
   },
   {
    "n": "Accessors",
    "s": "vues sur les tampons",
    "pal": "blue"
   },
   {
    "n": "Matériaux",
    "s": "PBR metallic-roughness",
    "pal": "red"
   },
   {
    "n": "Animations",
    "s": "canaux, échantillonneurs"
   },
   {
    "n": "Extensions",
    "s": "Draco, KTX2…",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
