// Chapitre 10 : Lancer de rayons et path tracing (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 10 · rendu",
  "title": "Le lancer de rayons",
  "sub": "partir de l’œil",
  "body": "<p class=\"lede\">Pour chaque pixel, on lance un rayon depuis la caméra et l’on cherche la première surface touchée. De là, on lance d’autres rayons : vers les lumières (ombres), dans la direction miroir (reflets), à travers le verre (réfraction).</p>\n    <p>C’est la méthode de Whitted (1980). Ombres, reflets et réfractions exacts tombent naturellement ; la difficulté est le <b>nombre de tests rayon-triangle</b>.</p>",
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
  "lit": "bvh",
  "look": {},
  "scene": "bvh",
  "fig": ""
 },
 {
  "kicker": "10.1",
  "title": "Le path tracing",
  "sub": "Kajiya, 1986",
  "body": "<p class=\"lede\">Le path tracing estime l’équation du rendu (chapitre 9) par <b>Monte-Carlo</b> : à chaque rebond, on tire une direction au hasard, selon la BRDF.</p>\n    <p>Il reproduit tout : lumière indirecte, caustiques, ombres douces, saignement des couleurs. C’est le moteur de Cycles (Blender), d’Arnold, de RenderMan et des films d’animation. Le bruit diminue comme 1/√N : quatre fois plus d’échantillons pour un bruit deux fois plus faible ; d’où les techniques d’échantillonnage préférentiel et les débruiteurs (OpenImageDenoise, OptiX).</p>",
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
  "lit": "path",
  "look": {},
  "scene": "path",
  "fig": ""
 },
 {
  "kicker": "10.2",
  "title": "La BVH",
  "sub": "hiérarchie de volumes englobants",
  "body": "<p class=\"lede\">La <b>BVH</b> (bounding volume hierarchy) range les triangles dans un arbre de boîtes alignées sur les axes.</p>\n    <ul class=\"rules\"><li>Un rayon qui manque une boîte évite tout ce qu’elle contient.</li><li>On la construit en coupant là où l’heuristique de surface (SAH) prévoit le moins de tests.</li><li>Pour les scènes animées, on sépare une BVH par objet (niveau bas, BLAS) et une BVH des instances (niveau haut, TLAS), que l’on met à jour à chaque image.</li></ul>\n    <p>La même structure sert aux collisions (chapitre 50) et au raycasting des interfaces 3D (chapitre 26).</p>",
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
  "lit": "bvh",
  "look": {},
  "scene": "bvh",
  "fig": ""
 },
 {
  "kicker": "10.3",
  "title": "Le temps réel : RTX et DXR",
  "sub": "des cœurs dédiés",
  "body": "<p class=\"lede\">Depuis 2018 (NVIDIA RTX, puis AMD, Intel, Apple, Qualcomm), les GPU ont des unités qui parcourent la BVH et testent les triangles en matériel.</p>\n    <p>Les API (DirectX Raytracing, extensions Vulkan Ray Tracing, Metal) ajoutent des shaders de génération de rayons, d’impact et d’échec. Les jeux font du <b>rendu hybride</b> : rasterisation pour l’image principale, rayons pour les reflets, les ombres et l’illumination globale, puis débruitage et mise à l’échelle (DLSS, FSR, XeSS). Les casques autonomes, plus modestes, l’utilisent encore peu.</p>",
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
  "lit": "bvh",
  "look": {},
  "scene": "bvh",
  "fig": ""
 }
];
export const PLATES = {
  bvh: { text: "Les objets sont regroupés dans des boîtes, elles-mêmes regroupées dans des boîtes plus grandes. Le rayon (rouge) ne teste les objets que des boîtes qu’il traverse : quelques tests au lieu de tous. Avec des millions de triangles, c’est la différence entre impossible et temps réel.", facts: () => [["construction", "SAH (heuristique de surface)"], ["coût", "≈ log(n) tests"], ["matériel", "cœurs RT"]] },
  path: { text: "Le path tracing tire au hasard des chemins de lumière qui rebondissent dans la scène, et fait la moyenne. Avec peu d’échantillons par pixel, l’image est bruitée ; un débruiteur (souvent un réseau de neurones) reconstruit une image propre.", facts: () => [["méthode", "Monte-Carlo"], ["bruit", "∝ 1/√échantillons"], ["temps réel", "1 à 4 échantillons + débruitage"]] }
};
