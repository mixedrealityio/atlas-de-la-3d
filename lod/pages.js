// Chapitre 51 : Flux de géométrie et niveaux de détail (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 51 · moteurs",
  "title": "Les niveaux de détail",
  "sub": "LOD",
  "body": "<p class=\"lede\">Un objet qui occupe dix pixels à l’écran n’a pas besoin de cent mille triangles. Le <b>LOD</b> remplace les objets lointains par des versions simplifiées.</p>\n    <ul class=\"rules\"><li>LOD <b>discrets</b> : 3 à 5 versions préparées (simplification par métrique d’erreur quadrique), choisies selon la taille à l’écran.</li><li><b>Fondu</b> ou tramage entre deux niveaux pour éviter le « pop ».</li><li><b>Imposteurs</b> : de très loin, une image plaquée sur un rectangle.</li><li>En VR, le LOD tient compte des deux yeux et parfois du regard (chapitre 27).</li></ul>",
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
  "lit": "niveaux",
  "look": {},
  "scene": "niveaux",
  "fig": ""
 },
 {
  "kicker": "51.1",
  "title": "LOD continu et tessellation",
  "sub": "faire varier le détail en douceur",
  "body": "<p class=\"lede\">Le LOD <b>continu</b> (maillages progressifs de Hoppe) ajoute ou retire les arêtes une à une. Pour les terrains, des quadtrees de tuiles (CDLOD, geometry clipmaps) adaptent la densité à la distance.</p>\n    <p>La <b>tessellation GPU</b> fait l’inverse : elle subdivise à la volée un maillage grossier et y applique une carte de déplacement. Elle a été en partie remplacée par les mesh shaders, plus souples (chapitre 8).</p>",
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
  "lit": "nanite",
  "look": {},
  "scene": "nanite",
  "fig": ""
 },
 {
  "kicker": "51.2",
  "title": "La géométrie virtualisée",
  "sub": "Nanite",
  "body": "<p class=\"lede\">Comme la mémoire virtuelle pour les données, <b>Nanite</b> (Unreal Engine 5) rend la géométrie « illimitée » : on importe des scans de millions de triangles, le moteur n’en traite que ce que les pixels demandent.</p>\n    <p>Le coût suit le nombre de pixels plutôt que le nombre de triangles. Contraintes : très gourmand en mémoire et en bande passante, pensé pour les GPU de bureau ; les casques autonomes utilisent encore des LOD classiques.</p>",
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
  "lit": "nanite",
  "look": {},
  "scene": "nanite",
  "fig": ""
 },
 {
  "kicker": "51.3",
  "title": "Le streaming de géométrie",
  "sub": "charger ce qui sera vu",
  "body": "<p class=\"lede\">Les mondes ouverts, les jumeaux numériques de villes et les scènes en gaussiennes ne tiennent pas en mémoire : on les découpe en tuiles hiérarchiques et l’on charge celles qui entourent la caméra.</p>\n    <p>Le standard <b>3D Tiles</b> (OGC, Cesium) organise ainsi des villes entières pour le web et les moteurs ; Google Photorealistic 3D Tiles l’utilise pour la planète entière (chapitre 57).</p>",
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
  "lit": "nanite",
  "look": {},
  "scene": "nanite",
  "fig": ""
 }
];
export const PLATES = {
  niveaux: { text: "L’objet s’éloigne de la caméra et passe successivement par trois versions préparées à l’avance : 48 segments, 14, puis 5. De loin, la différence est invisible à l’écran, mais le nombre de triangles est divisé par près de cent.", facts: () => [["LOD 0", "pleine résolution"], ["seuils", "taille à l’écran"], ["transition", "fondu pour éviter le saut"]] },
  nanite: { text: "Le maillage est découpé en petits groupes de triangles, organisés en une hiérarchie de versions simplifiées. À chaque image, le GPU choisit pour chaque région la version dont l’erreur ne dépasse pas un pixel, charge à la demande ce qui manque, et rasterise les tout petits triangles par un compute shader plus efficace que le matériel.", facts: () => [["Unreal Engine 5", "Nanite"], ["base", "mesh shaders, compute"], ["en XR", "encore limité sur mobile"]] }
};
