// Chapitre 56 : Le web 3D et le spatial web (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 56 · industrie et web",
  "title": "Le web 3D",
  "sub": "la 3D sans installation",
  "body": "<p class=\"lede\">Un lien suffit : le navigateur charge la scène, le GPU la dessine, et sur un casque, un bouton « Entrer en VR » ouvre l’expérience immersive. Pas de magasin d’applications, mise à jour instantanée, même code sur ordinateur, téléphone et casque.</p>\n    <p>Les usages : configurateurs de produits, visites virtuelles, jumeaux numériques (chapitre 55), formation, jeux, visualisation scientifique et pédagogique.</p>",
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
  "lit": "pile",
  "look": {},
  "scene": "pile",
  "fig": ""
 },
 {
  "kicker": "56.1",
  "title": "WebGL et WebGPU",
  "sub": "les API graphiques du navigateur",
  "body": "<table class=\"data\"><tr><th>API</th><th>base</th><th>atouts</th><th>limites</th></tr><tr><td>WebGL 1 et 2</td><td>OpenGL ES 2 et 3</td><td>partout, depuis 2011</td><td>pas de compute shaders, état global coûteux</td></tr><tr><td>WebGPU</td><td>Vulkan, Metal, DirectX 12</td><td>compute shaders, moins de surcoût, WGSL</td><td>plus récent, code plus long</td></tr></table>\n    <p class=\"lede\">WebGPU (chapitre 8) permet dans le navigateur ce qui était réservé aux applications natives : simuler des particules, trier des gaussiennes, faire tourner des réseaux de neurones (ONNX Runtime Web, Transformers.js, WebLLM). three.js et Babylon.js choisissent l’API automatiquement.</p>",
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
  "lit": "pile",
  "look": {},
  "scene": "pile",
  "fig": ""
 },
 {
  "kicker": "56.2",
  "title": "three.js",
  "sub": "la bibliothèque la plus utilisée",
  "body": "<ul class=\"rules\"><li>Créée par Ricardo Cabello (mrdoob) en 2010, open source, très légère et modulaire.</li><li><b>Graphe de scène</b> : Object3D, Group, Mesh, lumières, caméras ; transformations locales et monde (chapitre 49).</li><li><b>BufferGeometry</b> : des attributs (position, normale, uv) envoyés au GPU (chapitre 4).</li><li><b>Matériaux</b> : MeshStandardMaterial (PBR, chapitre 9), ShaderMaterial pour écrire ses shaders, et <b>TSL</b> (three shading language), un langage de nœuds qui produit à la fois GLSL et WGSL.</li><li><b>Écosystème</b> : GLTFLoader, contrôles de caméra, post-traitement, physique externe ; React Three Fiber pour l’écrire en React.</li><li><b>WebXR</b> : renderer.xr.enabled = true et un bouton VRButton ou ARButton suffisent pour entrer dans le casque.</li></ul>",
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
  "lit": "three",
  "look": {},
  "scene": "three",
  "fig": ""
 },
 {
  "kicker": "56.3",
  "title": "Babylon.js",
  "sub": "un moteur complet dans le navigateur",
  "body": "<b>Babylon.js</b>, développé par Microsoft en open source, est un <b>moteur</b> plus intégré que three.js : physique (Havok), éditeur de nœuds de matériaux, inspecteur, interface graphique 2D et 3D, audio spatial, et un très bon support de WebXR.\n    <ul class=\"rules\"><li><b>WebXR Experience Helper</b> : téléportation, pointeurs, mains, ancres, détection de plans, en quelques lignes.</li><li><b>Moteur WebGPU</b> complet, avec compute shaders.</li><li><b>Playground</b> en ligne pour tester et partager du code.</li><li>Choix courant : three.js pour la légèreté et la liberté, Babylon.js pour une application XR riche avec moins d’assemblage.</li></ul>",
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
  "lit": "three",
  "look": {},
  "scene": "three",
  "fig": ""
 },
 {
  "kicker": "56.4",
  "title": "WebXR",
  "sub": "la VR et l’AR dans le navigateur",
  "body": "<p class=\"lede\">La <b>WebXR Device API</b> (W3C) ouvre une session <b>immersive-vr</b> ou <b>immersive-ar</b>, donne à chaque image la pose de la tête et de chaque œil (avec les matrices de projection), et les sources d’entrée (manettes, mains, regard).</p>\n    <table class=\"data\"><tr><th>module</th><th>apporte</th></tr><tr><td>Hand Input</td><td>les 25 articulations de chaque main</td></tr><tr><td>Hit Test</td><td>un rayon contre les surfaces réelles</td></tr><tr><td>Anchors</td><td>ancres spatiales (chapitre 23)</td></tr><tr><td>Plane / Mesh Detection</td><td>sols, murs, maillage de la pièce</td></tr><tr><td>Depth Sensing</td><td>profondeur pour l’occlusion</td></tr><tr><td>Lighting Estimation</td><td>éclairage réel (chapitre 9)</td></tr><tr><td>Layers</td><td>couches nettes pour le texte et la vidéo</td></tr></table>\n    <p>WebXR fonctionne dans Chrome (Android, Android XR), Meta Quest Browser, Pico, Edge et Firefox Reality, et Safari sur visionOS (VR et transient-pointer). Il exige une page en HTTPS.</p>",
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
  "lit": "pile",
  "look": {},
  "scene": "pile",
  "fig": ""
 },
 {
  "kicker": "56.5",
  "title": "Écrire une application WebXR",
  "sub": "les étapes",
  "body": "<ul class=\"rules\"><li>Vérifier la prise en charge : navigator.xr.isSessionSupported('immersive-ar').</li><li>Demander la session sur un geste de l’utilisateur, avec les fonctionnalités voulues (hit-test, anchors, hand-tracking).</li><li>Dans la boucle : récupérer la pose (frame.getViewerPose), dessiner chaque vue dans la couche XR.</li><li>Lire les entrées : pincement, gâchette, rayon de visée (targetRaySpace).</li><li>Placer des objets avec le hit-test, les attacher à une ancre.</li><li>Optimiser : glTF compressé (chapitre 57), peu d’appels de dessin, multiview, fréquence adaptée.</li></ul>\n    <p class=\"lede\">three.js et Babylon.js encapsulent ces étapes ; A-Frame les rend déclaratives en balises HTML.</p>",
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
  "lit": "three",
  "look": {},
  "scene": "three",
  "fig": ""
 },
 {
  "kicker": "56.6",
  "title": "Le spatial web",
  "sub": "vers un web en 3D",
  "body": "<p class=\"lede\">Le <b>spatial web</b> désigne un web où les contenus ne sont plus enfermés dans des pages rectangulaires : des objets 3D posés dans la pièce, des pages qui flottent, des liens entre lieux réels et contenus.</p>\n    <p>Briques : l’élément <b>&lt;model&gt;</b> proposé au W3C (un objet 3D dans une page, déjà dans Safari visionOS), <b>model-viewer</b> de Google, WebXR, et des formats ouverts (glTF, USDZ). Les navigateurs des casques (Android XR, Quest, visionOS) affichent les pages web classiques en fenêtres dans l’espace.</p>",
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
  "lit": "pile",
  "look": {},
  "scene": "pile",
  "fig": ""
 }
];
export const PLATES = {
  pile: { text: "Une application web 3D s’appuie sur une bibliothèque (three.js, Babylon.js, PlayCanvas, A-Frame) qui parle à l’API graphique du navigateur (WebGL 2 ou WebGPU). Pour la VR et l’AR, l’API WebXR fournit les poses de la tête et des mains, les entrées et l’affichage dans le casque. Les pages de cet atlas sont faites avec three.js.", facts: () => [["graphique", "WebGL 2, WebGPU"], ["XR", "WebXR Device API"], ["formats", "glTF, KTX2, Draco"]] },
  three: { text: "Dans three.js, une scène est un arbre d’Object3D ; un Mesh associe une géométrie (BufferGeometry, des tampons de sommets) et un matériau (qui produit les shaders). Le moteur de rendu parcourt la scène, trie les objets, compile les shaders, et dessine pour la caméra. setAnimationLoop appelle la fonction de rendu à chaque image, y compris dans un casque WebXR.", facts: () => [["géométrie", "BufferGeometry"], ["matériaux", "Standard (PBR), Physical, nœuds TSL"], ["rendu", "WebGL ou WebGPU"]] }
};
