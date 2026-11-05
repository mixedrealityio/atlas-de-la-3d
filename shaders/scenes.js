export const SPECS = [
 {
  "key": "etages",
  "title": "Les étages programmables",
  "sub": "de l’ancien au moderne",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Vertex",
    "s": "un sommet → une position",
    "pal": "blue"
   },
   {
    "n": "Tessellation",
    "s": "subdiviser"
   },
   {
    "n": "Géométrie",
    "s": "créer des primitives"
   },
   {
    "n": "Mesh",
    "s": "groupes de triangles (meshlets)",
    "pal": "red"
   },
   {
    "n": "Fragment",
    "s": "un pixel → une couleur",
    "pal": "blue"
   },
   {
    "n": "Compute",
    "s": "calcul libre",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "api",
  "title": "Les API graphiques",
  "sub": "qui parle au GPU",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "OpenGL / WebGL",
    "s": "état global, simple"
   },
   {
    "n": "Vulkan",
    "s": "explicite, multiplateforme",
    "pal": "blue"
   },
   {
    "n": "DirectX 12",
    "s": "explicite, Windows/Xbox",
    "pal": "blue"
   },
   {
    "n": "Metal",
    "s": "Apple",
    "pal": "blue"
   },
   {
    "n": "WebGPU",
    "s": "explicite, navigateur",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
