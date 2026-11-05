// Chapitre 8 : Les shaders et le pipeline programmable (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 8 · rendu",
  "title": "Les shaders",
  "sub": "programmer le GPU",
  "body": "<p class=\"lede\">Un <b>shader</b> est un petit programme exécuté par le GPU pour chaque sommet, chaque pixel ou chaque élément de calcul.</p>\n    <p>Le GPU lance des milliers d’instances en même temps, par groupes qui exécutent la même instruction (SIMT). Une branche « si » qui diverge entre voisins coûte donc les deux chemins : on écrit des shaders sans trop de conditions.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "etages",
  "look": {},
  "scene": "etages",
  "fig": ""
 },
 {
  "kicker": "8.1",
  "title": "Vertex et fragment",
  "sub": "les deux étages historiques",
  "body": "<ul class=\"rules\"><li><b>Vertex shader</b> : position à l’écran, normale, UV ; aussi l’animation par squelette (chapitre 52) et la déformation.</li><li><b>Fragment shader</b> (pixel shader) : la couleur, à partir des textures, de l’éclairage (PBR, chapitre 9), des ombres.</li><li>Les deux communiquent par des <b>variables interpolées</b> (varyings) : le rasteriseur mélange les sorties des trois sommets.</li></ul>\n    <p class=\"lede\">Un shader de fragment simple : lire une texture, multiplier par le produit scalaire normale·lumière. Les jeux modernes en ont des milliers de variantes, compilées à l’avance (d’où les saccades de « compilation de shaders » au premier lancement).</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "etages",
  "look": {},
  "scene": "etages",
  "fig": ""
 },
 {
  "kicker": "8.2",
  "title": "Compute et mesh shaders",
  "sub": "le GPU comme calculateur",
  "body": "<p class=\"lede\">Un <b>compute shader</b> n’est lié à aucun triangle : il lit et écrit des tampons. Il sert au tri, aux particules, aux simulations, au culling sur GPU, à l’inférence de réseaux de neurones.</p>\n    <p>Les <b>mesh shaders</b> (DirectX 12 Ultimate, Vulkan, Metal 3) découpent les maillages en <b>meshlets</b> de quelques dizaines de triangles. Un premier shader (task / amplification) élimine les meshlets invisibles, un second produit les triangles. C’est la base des géométries très denses (chapitre 51).</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "etages",
  "look": {},
  "scene": "etages",
  "fig": ""
 },
 {
  "kicker": "8.3",
  "title": "Vulkan, DirectX 12, Metal",
  "sub": "les API explicites",
  "body": "<p class=\"lede\">Ces API donnent au programme le contrôle que le pilote gardait avant : <b>tampons de commandes</b> enregistrés sur plusieurs cœurs, <b>pipelines</b> précompilés (shaders + états), <b>descripteurs</b> pour les textures et tampons, <b>barrières</b> de synchronisation explicites.</p>\n    <p>Elles sont la base des moteurs (Unreal, Unity, Godot), et des casques : OpenXR (chapitre 58) se branche sur Vulkan, DirectX ou OpenGL ES. Les shaders sont compilés vers un format intermédiaire (SPIR-V pour Vulkan, DXIL pour DirectX).</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "api",
  "look": {},
  "scene": "api",
  "fig": ""
 },
 {
  "kicker": "8.4",
  "title": "WebGPU",
  "sub": "l’API moderne du web",
  "body": "<p class=\"lede\">WebGPU est l’API graphique et de calcul des navigateurs, successeur de WebGL. Son langage de shaders est le <b>WGSL</b>.</p>\n    <ul class=\"rules\"><li>Modèle explicite inspiré de Vulkan, Metal et DirectX 12, traduit vers l’une d’elles par le navigateur.</li><li><b>Compute shaders</b> dans le navigateur : simulation, tri, inférence d’IA (ONNX Runtime Web, WebLLM).</li><li>Moins d’appels coûteux qu’en WebGL : bien plus d’objets par image.</li><li>Disponible dans Chrome et Edge depuis 2023, puis dans Safari et Firefox ; three.js et Babylon.js ont un moteur de rendu WebGPU (chapitre 56).</li></ul>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "api",
  "look": {},
  "scene": "api",
  "fig": ""
 }
];
export const PLATES = {
  etages: { text: "Les shaders de sommets et de fragments existent depuis le début des années 2000. Tessellation et géométrie ont été ajoutés ensuite. Les mesh shaders remplacent toute la partie géométrique par des groupes de calcul qui produisent directement des paquets de triangles. Les compute shaders font du calcul général : physique, particules, IA, tri.", facts: () => [["langages", "GLSL, HLSL, WGSL, MSL"], ["exécution", "SIMT, par groupes"], ["moderne", "mesh + compute"]] },
  api: { text: "Les API modernes sont explicites : l’application prépare elle-même les pipelines, les tampons de commandes et la synchronisation. C’est plus long à écrire mais plus prévisible et plus efficace en multithread. WebGPU apporte ce modèle (et les compute shaders) dans le navigateur.", facts: () => [["ancien", "OpenGL, WebGL"], ["explicite", "Vulkan, DX12, Metal"], ["web", "WebGPU (WGSL)"]] }
};
