export const SPECS = [
 {
  "key": "pile",
  "title": "La pile du web 3D",
  "sub": "du code au casque",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Application",
    "s": "JavaScript, TypeScript"
   },
   {
    "n": "Bibliothèque",
    "s": "three.js, Babylon.js",
    "pal": "blue"
   },
   {
    "n": "API graphique",
    "s": "WebGL 2 ou WebGPU",
    "pal": "red"
   },
   {
    "n": "WebXR",
    "s": "poses, entrées, sessions",
    "pal": "red"
   },
   {
    "n": "Navigateur",
    "s": "Chrome, Safari, Quest Browser",
    "pal": "blue"
   },
   {
    "n": "GPU et casque",
    "s": ""
   }
  ],
  "x0": 0
 },
 {
  "key": "three",
  "title": "L’architecture de three.js",
  "sub": "les classes principales",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Scene",
    "s": "graphe d’Object3D",
    "pal": "blue"
   },
   {
    "n": "Mesh",
    "s": "Geometry + Material",
    "pal": "blue"
   },
   {
    "n": "Camera",
    "s": "perspective, ortho"
   },
   {
    "n": "WebGLRenderer / WebGPURenderer",
    "s": "dessine",
    "pal": "red"
   },
   {
    "n": "Boucle",
    "s": "setAnimationLoop",
    "pal": "red"
   },
   {
    "n": "Loaders",
    "s": "GLTFLoader…"
   }
  ],
  "x0": 40
 }
];
