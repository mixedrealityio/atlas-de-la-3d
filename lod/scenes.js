export const SPECS = [
 {
  "key": "niveaux",
  "title": "Les niveaux de détail",
  "sub": "LOD discrets",
  "kind": "lod",
  "x0": 0
 },
 {
  "key": "nanite",
  "title": "La géométrie virtualisée",
  "sub": "le principe de Nanite",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Maillage dense",
    "s": "millions de triangles"
   },
   {
    "n": "Clusters",
    "s": "≈ 128 triangles",
    "pal": "blue"
   },
   {
    "n": "Hiérarchie",
    "s": "clusters simplifiés",
    "pal": "blue"
   },
   {
    "n": "Sélection",
    "s": "erreur < 1 pixel",
    "pal": "red"
   },
   {
    "n": "Streaming",
    "s": "charger à la demande",
    "pal": "red"
   },
   {
    "n": "Rasterisation",
    "s": "logicielle pour les petits triangles"
   }
  ],
  "x0": 40
 }
];
