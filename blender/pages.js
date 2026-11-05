// Chapitre 30 : Interagir avec la 3D dans Blender (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 30 · interaction",
  "title": "Interagir dans Blender",
  "sub": "un logiciel pensé pour le clavier",
  "body": "<p class=\"lede\">Blender est un logiciel libre de création 3D : modélisation, sculpture, animation, rendu (Cycles et EEVEE), simulation, montage. Son interface repose sur un principe : <b>une main sur la souris, une main sur le clavier</b>.</p>\n    <p>Les raccourcis sont courts et contextuels : ils agissent sur ce qui est sous le curseur et dans le mode courant. Tout est aussi accessible par les menus et la recherche (F3).</p>",
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
  "lit": "gizmo",
  "look": {},
  "scene": "gizmo",
  "fig": ""
 },
 {
  "kicker": "30.1",
  "title": "Naviguer dans la vue",
  "sub": "orbiter, déplacer, zoomer",
  "body": "<table class=\"data\"><tr><th>action</th><th>souris</th><th>clavier</th></tr><tr><td>orbiter</td><td>molette enfoncée + glisser</td><td>pavé 4, 6, 8, 2</td></tr><tr><td>déplacer la vue</td><td>Maj + molette enfoncée</td><td>Ctrl + pavé</td></tr><tr><td>zoomer</td><td>molette</td><td>pavé + et −</td></tr><tr><td>cadrer la sélection</td><td></td><td>pavé . (point)</td></tr><tr><td>vues de face, côté, dessus</td><td></td><td>pavé 1, 3, 7 (Ctrl : opposées)</td></tr><tr><td>perspective / ortho</td><td></td><td>pavé 5</td></tr><tr><td>vue caméra</td><td></td><td>pavé 0</td></tr></table>\n    <p class=\"lede\">Le gizmo de navigation en haut à droite fait la même chose à la souris. Le mode « vol » (Maj+`) déplace la vue comme dans un jeu, aux touches ZQSD/WASD.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "entrees",
  "look": {},
  "scene": "entrees",
  "fig": ""
 },
 {
  "kicker": "30.2",
  "title": "Transformer",
  "sub": "G, R, S et leurs variantes",
  "body": "<ul class=\"rules\"><li><b>G</b>, <b>R</b>, <b>S</b> puis déplacer la souris ; clic gauche ou Entrée pour valider, clic droit ou Échap pour annuler.</li><li><b>X, Y, Z</b> : contraindre à un axe ; deux fois : axe local. <b>Maj+X</b> : tout sauf X.</li><li>Taper un nombre : « R Z 90 » tourne de 90° autour de Z.</li><li><b>Ctrl</b> pendant l’opération : aimantation (snapping) ; <b>Maj</b> : mouvement fin.</li><li><b>Pivot</b> (touche .) : centre de la sélection, curseur 3D, origines individuelles.</li><li>Gizmos visibles avec les outils de la barre (T) ou le menu des gizmos ; Alt+G, R, S remettent à zéro.</li></ul>",
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
  "lit": "gizmo",
  "look": {},
  "scene": "gizmo",
  "fig": ""
 },
 {
  "kicker": "30.3",
  "title": "Le mode édition",
  "sub": "sommets, arêtes, faces",
  "body": "<p class=\"lede\">En mode édition (Tab), on modifie le maillage lui-même (chapitre 4) avec des outils qui sont presque tous à une touche :</p>\n    <table class=\"data\"><tr><th>outil</th><th>raccourci</th></tr><tr><td>extruder</td><td>E</td></tr><tr><td>insérer une face</td><td>I</td></tr><tr><td>couper en boucle</td><td>Ctrl+R</td></tr><tr><td>biseauter</td><td>Ctrl+B</td></tr><tr><td>couteau</td><td>K</td></tr><tr><td>fusionner</td><td>M</td></tr><tr><td>remplir</td><td>F</td></tr><tr><td>séparer</td><td>P</td></tr></table>\n    <p>La sélection se fait par clic, rectangle (B), cercle (C), lasso (Ctrl + clic droit glissé), boucles (Alt + clic) et éléments liés (L).</p>",
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
  "lit": "modes",
  "look": {},
  "scene": "modes",
  "fig": ""
 },
 {
  "kicker": "30.4",
  "title": "Modificateurs et nœuds",
  "sub": "travailler sans détruire",
  "body": "<p class=\"lede\">Les <b>modificateurs</b> s’appliquent par-dessus le maillage sans le changer : miroir, subdivision, booléen (chapitre 5), réseau (array), déformation par courbe. On les empile et on les règle à tout moment.</p>\n    <p>Les <b>Geometry Nodes</b> vont plus loin : un graphe de nœuds génère ou transforme la géométrie (répartir des objets, créer des structures paramétriques) ; c’est le cœur de la génération procédurale dans Blender (chapitre 53). Les matériaux se construisent aussi en nœuds (Shader Editor), avec le Principled BSDF (chapitre 9).</p>",
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
  "lit": "modes",
  "look": {},
  "scene": "modes",
  "fig": ""
 },
 {
  "kicker": "30.5",
  "title": "Automatiser avec Python",
  "sub": "bpy, extensions, scripts",
  "body": "<p class=\"lede\">Toute l’interface de Blender est construite sur son API Python <b>bpy</b> : chaque bouton correspond à un opérateur que l’on peut appeler par script.</p>\n    <ul class=\"rules\"><li>Console Python et éditeur de texte intégrés ; survoler un bouton montre la commande Python correspondante.</li><li>Scripts pour créer des scènes, importer des données, exporter en lot (glTF, USD).</li><li>Extensions installables depuis la plateforme officielle.</li><li>Blender sans interface (blender -b) pour rendre ou convertir sur un serveur : utile dans un pipeline de génération d’IA 3D (chapitre 42).</li></ul>",
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
  "lit": "modes",
  "look": {},
  "scene": "modes",
  "fig": ""
 },
 {
  "kicker": "30.6",
  "title": "Blender en réalité virtuelle",
  "sub": "inspecter et au-delà",
  "body": "<p class=\"lede\">L’extension officielle <b>VR Scene Inspection</b> connecte Blender à un casque par OpenXR : on se promène dans la scène à l’échelle 1, avec la navigation aux manettes, des repères de position et la vue miroir sur l’écran.</p>\n    <p>On ne modélise pas encore pleinement en VR dans Blender ; des extensions tierces ajoutent des outils de sélection et de transformation aux manettes. Pour sculpter ou modéliser nativement en VR, on utilise d’autres logiciels (Adobe Substance Modeler, Gravity Sketch, Shapelab), puis on importe dans Blender.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "entrees",
  "look": {},
  "scene": "entrees",
  "fig": ""
 }
];
export const PLATES = {
  gizmo: { text: "Blender privilégie le clavier : G déplace, R tourne, S met à l’échelle, puis X, Y ou Z contraint à un axe (Maj + axe pour exclure cet axe et travailler dans le plan des deux autres). On peut taper une valeur au clavier pendant l’opération. Les gizmos (flèches, anneaux) font la même chose à la souris.", facts: () => [["déplacer", "G"], ["tourner", "R"], ["échelle", "S"], ["contraindre", "X, Y, Z ; Maj+axe"]] },
  modes: { text: "Tab bascule entre mode objet et mode édition ; Ctrl+Tab ouvre le menu des modes. Chaque mode a ses outils, mais les transformations G, R, S restent les mêmes partout, y compris sur des sommets, des os ou des courbes.", facts: () => [["changer", "Tab, Ctrl+Tab"], ["sélection", "1, 2, 3 : sommets, arêtes, faces"], ["outils", "T (barre), N (panneau)"]] },
  entrees: { text: "Blender se pilote à la souris et au clavier, mais accepte aussi la pression des stylets (sculpture, peinture), les souris 3D 6DoF de 3Dconnexion pour naviguer en même temps qu’on édite, et un casque VR par l’extension VR Scene Inspection, qui utilise OpenXR.", facts: () => [["sculpture", "tablette"], ["navigation", "SpaceMouse"], ["VR", "VR Scene Inspection"]] }
};
