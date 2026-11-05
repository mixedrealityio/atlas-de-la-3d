// Chapitre 73 : Panorama des moteurs 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 73 · moteurs",
  "title": "Panorama des moteurs",
  "sub": "choisir, c’est arbitrer",
  "body": "<p class=\"lede\">Un moteur se choisit selon la <b>qualité d’image</b> visée, les <b>plateformes</b> (casque autonome, PC, web, console), l’<b>écosystème</b> (ressources, extensions, communauté), le <b>coût</b> (licence, redevances) et les <b>compétences</b> de l’équipe.</p>",
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
  "lit": "moteurs",
  "look": {},
  "scene": "moteurs",
  "fig": ""
 },
 {
  "kicker": "73.1",
  "title": "Unreal, Unity, Godot",
  "sub": "les trois généralistes",
  "body": "<ul class=\"rules\"><li><b>Unreal Engine 5</b> (Epic) : Nanite, Lumen, lancer de rayons, Blueprints ; redevance au-delà d’un seuil de chiffre d’affaires. Référence du jeu AAA, de la visualisation et de la production virtuelle.</li><li><b>Unity</b> : URP pour les casques autonomes, HDRP pour le haut de gamme, OpenXR et XR Interaction Toolkit ; le plus utilisé en XR d’entreprise et en simulation, malgré la controverse tarifaire de 2023.</li><li><b>Godot</b> : libre (licence MIT), léger, sans redevance ; OpenXR intégré ; apprécié des indépendants et de l’éducation.</li></ul>",
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
  "lit": "moteurs",
  "look": {},
  "scene": "moteurs",
  "fig": ""
 },
 {
  "kicker": "73.2",
  "title": "Blender, moteurs maison et web",
  "sub": "les autres familles",
  "body": "<ul class=\"rules\"><li><b>Blender</b> : EEVEE (temps réel, refait en 4.2 avec lancer de rayons en espace écran) et Cycles (path tracing), dans un logiciel libre (chapitre 30).</li><li><b>Moteurs maison</b> des grands studios : Frostbite, Decima, Anvil, RE Engine.</li><li><b>Visualisation</b> architecturale : Twinmotion, D5, Enscape.</li><li><b>Web</b> : three.js et Babylon.js sur WebGL et WebGPU (chapitre 56), PlayCanvas, A-Frame.</li><li><b>Spécialisés</b> : StereoKit (XR), Omniverse (simulation, chapitre 55).</li></ul>",
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
  "lit": "moteurs",
  "look": {},
  "scene": "moteurs",
  "fig": ""
 }
];
export const PLATES = {
  moteurs: { text: "Unreal Engine domine la production AAA, l’architecture et la production virtuelle. Unity reste le plus répandu sur mobile et en XR d’entreprise. Godot, libre et sans redevance, progresse vite. Blender intègre deux moteurs (EEVEE en temps réel, Cycles en path tracing). Le web a three.js et Babylon.js.", facts: () => [["XR d’entreprise", "Unity"], ["qualité d’image", "Unreal"], ["libre", "Godot, Blender, three.js"]] }
};
