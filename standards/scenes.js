export const SPECS = [
 {
  "key": "openxr",
  "title": "OpenXR",
  "sub": "une API, tous les casques",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Application",
    "s": "Unity, Unreal, Godot, natif"
   },
   {
    "n": "OpenXR",
    "s": "API commune",
    "pal": "red"
   },
   {
    "n": "Extensions",
    "s": "mains, ancres, passthrough…",
    "pal": "blue"
   },
   {
    "n": "Runtime",
    "s": "du fabricant",
    "pal": "blue"
   },
   {
    "n": "Casque",
    "s": "Quest, Android XR, Pico, Varjo, HoloLens"
   }
  ],
  "x0": 0
 },
 {
  "key": "khronos",
  "title": "Le Khronos Group",
  "sub": "les autres standards",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Vulkan",
    "s": "graphique et calcul explicites",
    "pal": "blue"
   },
   {
    "n": "OpenGL ES",
    "s": "graphique mobile historique"
   },
   {
    "n": "OpenCL",
    "s": "calcul parallèle"
   },
   {
    "n": "SPIR-V",
    "s": "langage intermédiaire de shaders",
    "pal": "blue"
   },
   {
    "n": "glTF, KTX",
    "s": "formats 3D et textures",
    "pal": "red"
   },
   {
    "n": "ANARI, 3D Commerce",
    "s": "rendu, commerce"
   }
  ],
  "x0": 40
 }
];
