// Chapitre 58 : Standards et écosystème XR (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 58 · industrie et web",
  "title": "Les standards de la 3D",
  "sub": "pourquoi ils comptent",
  "body": "<p class=\"lede\">Sans standards, chaque application serait réécrite pour chaque GPU, chaque système et chaque casque. Les standards ouverts permettent l’<b>interopérabilité</b> : un même code, un même fichier, partout.</p>\n    <p>Les principaux acteurs : le <b>Khronos Group</b> (API et formats), le <b>W3C</b> (WebXR, WebGPU), l’<b>Alliance for OpenUSD</b>, l’<b>ISO</b> et le <b>MPEG</b> (formats et compression), l’<b>OGC</b> (géospatial, 3D Tiles).</p>",
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
  "lit": "khronos",
  "look": {},
  "scene": "khronos",
  "fig": ""
 },
 {
  "kicker": "58.1",
  "title": "OpenXR",
  "sub": "l’API commune de la XR",
  "body": "<ul class=\"rules\"><li><b>Instance</b> et <b>session</b> : se connecter au runtime, choisir l’API graphique (Vulkan, DirectX, OpenGL ES).</li><li><b>Espaces de référence</b> : local, stage (la zone de jeu), view (la tête).</li><li><b>Boucle d’image</b> : xrWaitFrame, xrBeginFrame, xrLocateViews (poses des yeux), xrEndFrame avec les couches à composer.</li><li><b>Actions</b> : on déclare des actions (« saisir », « téléporter ») et des correspondances suggérées par manette ; le runtime fait le lien avec le matériel.</li><li><b>Extensions</b> : suivi des mains, des yeux et du visage, passthrough, ancres spatiales, compréhension de scène, marqueurs (QR codes).</li></ul>\n    <p class=\"lede\">Unity (OpenXR Plugin), Unreal, Godot, StereoKit et Blender (chapitre 30) utilisent OpenXR.</p>",
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
  "lit": "openxr",
  "look": {},
  "scene": "openxr",
  "fig": ""
 },
 {
  "kicker": "58.2",
  "title": "Vulkan, OpenCL, SPIR-V",
  "sub": "le calcul et le rendu",
  "body": "<b>Vulkan</b> (2016) est l’API graphique explicite multiplateforme (chapitre 8), utilisée par Android, Linux, les casques autonomes et de nombreux moteurs. <b>SPIR-V</b> est le langage intermédiaire dans lequel tous ses shaders sont compilés.\n    <b>OpenCL</b> et <b>SYCL</b> servent au calcul parallèle sur processeurs, GPU et accélérateurs ; en pratique, l’IA utilise surtout CUDA, et les applications graphiques les compute shaders de Vulkan. <b>Vulkan SC</b> vise les systèmes critiques (automobile, aviation).",
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
  "lit": "khronos",
  "look": {},
  "scene": "khronos",
  "fig": ""
 },
 {
  "kicker": "58.3",
  "title": "Android XR",
  "sub": "la plateforme de Google",
  "body": "<b>Android XR</b> (annoncé fin 2024, premier casque : le Samsung Galaxy XR, fin 2025) est une version d’Android pour casques et lunettes, développée avec Samsung et Qualcomm.\n    <ul class=\"rules\"><li><b>Applications Android</b> existantes en fenêtres flottantes ; Gemini intégré comme assistant qui voit ce que voit l’utilisateur.</li><li><b>OpenXR</b> natif et <b>Unity</b> pour les applications immersives ; <b>Jetpack XR</b> (Compose for XR, SceneCore, ARCore for Jetpack XR) pour les applications Android spatiales.</li><li><b>WebXR</b> dans Chrome, avec mains, hit-test, ancres et profondeur (chapitre 56).</li><li>Suivi des mains et des yeux, passthrough, ancres persistantes ; lunettes AR avec écran ou audio seulement, sur la même plateforme.</li></ul>",
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
  "lit": "openxr",
  "look": {},
  "scene": "openxr",
  "fig": ""
 },
 {
  "kicker": "58.4",
  "title": "L’écosystème",
  "sub": "plateformes, moteurs, magasins",
  "body": "<table class=\"data\"><tr><th>plateforme</th><th>API immersive</th><th>web</th></tr><tr><td>Meta Horizon OS</td><td>OpenXR + Meta SDK</td><td>WebXR (Quest Browser)</td></tr><tr><td>Android XR</td><td>OpenXR, Jetpack XR</td><td>WebXR (Chrome)</td></tr><tr><td>Pico OS</td><td>OpenXR</td><td>WebXR</td></tr><tr><td>visionOS</td><td>RealityKit, ARKit (pas d’OpenXR)</td><td>WebXR (Safari)</td></tr><tr><td>Windows (HoloLens 2, PC VR)</td><td>OpenXR, MRTK</td><td>WebXR (Edge)</td></tr><tr><td>SteamVR</td><td>OpenXR</td><td></td></tr></table>\n    <p class=\"lede\">Pour viser le plus d’appareils : OpenXR avec un moteur (Unity, Unreal, Godot), ou WebXR avec three.js ou Babylon.js.</p>",
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
  "lit": "openxr",
  "look": {},
  "scene": "openxr",
  "fig": ""
 }
];
export const PLATES = {
  openxr: { text: "Avant OpenXR, chaque casque avait son API. Avec OpenXR (Khronos, version 1.0 en 2019), l’application parle une seule API ; le runtime de chaque fabricant la traduit pour son matériel. Les fonctions propres à certains casques passent par des extensions, dont les meilleures deviennent multi-fabricants (EXT) puis standard (KHR).", facts: () => [["version", "1.1 (2024)"], ["runtimes", "Meta, Google, Pico, Valve, Microsoft…"], ["absents", "Apple (visionOS)"]] },
  khronos: { text: "Le Khronos Group est un consortium à but non lucratif qui publie des standards ouverts et gratuits : Vulkan et OpenGL pour le rendu, OpenCL et SYCL pour le calcul, SPIR-V pour les shaders, glTF et KTX pour les formats, OpenXR pour la réalité étendue.", facts: () => [["membres", "≈ 150 entreprises"], ["licences", "libres de droits"], ["web", "WebGL vient d’OpenGL ES"]] }
};
