export const SPECS = [
 {
  "key": "uv",
  "title": "De la surface à l’image",
  "sub": "le dépliage UV",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Maillage 3D",
    "s": "faces"
   },
   {
    "n": "Coutures",
    "s": "où découper",
    "pal": "red"
   },
   {
    "n": "Dépliage",
    "s": "chaque sommet reçoit (u, v)",
    "pal": "blue"
   },
   {
    "n": "Peinture",
    "s": "textures PBR"
   },
   {
    "n": "Mipmaps",
    "s": "versions réduites",
    "pal": "blue"
   },
   {
    "n": "GPU",
    "s": "échantillonnage filtré",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "mip",
  "title": "Les mipmaps",
  "sub": "une pyramide de résolutions (texture 2K, en Mo)",
  "kind": "cbars",
  "bars": [
   {
    "n": "2048²",
    "v": 16,
    "pal": "red",
    "s": "16 Mo"
   },
   {
    "n": "1024²",
    "v": 4,
    "pal": "blue",
    "s": "4 Mo"
   },
   {
    "n": "512²",
    "v": 1,
    "pal": "blue",
    "s": "1 Mo"
   },
   {
    "n": "256²",
    "v": 0.25,
    "pal": "paper",
    "s": "0,25 Mo"
   }
  ],
  "max": 16,
  "x0": 40
 }
];
