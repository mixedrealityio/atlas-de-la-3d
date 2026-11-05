// Chapitre 53 : La génération procédurale (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 53 · moteurs",
  "title": "La génération procédurale",
  "sub": "décrire la règle, pas le résultat",
  "body": "<p class=\"lede\">Au lieu de modéliser chaque arbre, on décrit comment pousse un arbre ; au lieu de peindre un terrain, on décrit comment le relief varie. Quelques paramètres et une graine aléatoire suffisent à produire des variations infinies.</p>\n    <p>C’est la base des mondes ouverts, des textures de matériaux, des effets (feu, nuages) et des <b>données synthétiques</b> pour entraîner les IA (chapitre 43).</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 10,
   "el": 28,
   "dist": 26,
   "auto": true
  },
  "lit": "terrain",
  "look": {},
  "scene": "terrain",
  "fig": ""
 },
 {
  "kicker": "53.1",
  "title": "Les bruits",
  "sub": "Perlin, Simplex, fractal",
  "body": "<ul class=\"rules\"><li><b>Bruit de Perlin</b> (1983) : des gradients aléatoires sur une grille, interpolés en douceur ; un aléatoire continu.</li><li><b>Simplex</b> : la même idée sur une grille de simplexes, moins d’artefacts et moins de calcul en 3D et 4D.</li><li><b>Worley</b> (cellulaire) : distance aux points les plus proches ; cellules, pierres, écailles.</li><li><b>fBm</b> : somme d’octaves ; avec des variantes (ridged, domain warping) pour des montagnes et des érosions plus réalistes.</li></ul>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 10,
   "el": 28,
   "dist": 26,
   "auto": true
  },
  "lit": "terrain",
  "look": {},
  "scene": "terrain",
  "fig": ""
 },
 {
  "kicker": "53.2",
  "title": "WFC et L-systèmes",
  "sub": "contraintes et réécriture",
  "body": "<p class=\"lede\">La <b>Wave Function Collapse</b> part d’une grille où chaque case peut être n’importe quelle tuile, puis fixe la case la plus contrainte et propage les règles de voisinage, jusqu’à une solution cohérente (donjons, villages, textures).</p>\n    <p>Un <b>L-système</b> (Lindenmayer) applique des règles de réécriture : « F → F[+F]F[−F]F ». Interprété par une tortue 3D, il dessine des plantes ramifiées ; SpeedTree et les générateurs de végétation en sont des descendants.</p>",
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
  "lit": "outils",
  "look": {},
  "scene": "outils",
  "fig": ""
 },
 {
  "kicker": "53.3",
  "title": "Geometry Nodes et Houdini",
  "sub": "des graphes de nœuds",
  "body": "<p class=\"lede\">Les <b>Geometry Nodes</b> de Blender construisent la géométrie dans un graphe : répartir des points sur une surface, y instancier des objets, déformer, extruder, avec des champs qui varient partout. Le graphe reste modifiable : on change un paramètre et tout se recalcule.</p>\n    <b>Houdini</b> (SideFX) est la référence procédurale des effets visuels et des jeux ; <b>Houdini Engine</b> exécute ses outils dans Unity et Unreal. On combine de plus en plus ces outils avec des modèles d’IA qui génèrent les éléments à répartir (chapitre 54).",
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
  "lit": "outils",
  "look": {},
  "scene": "outils",
  "fig": ""
 }
];
export const PLATES = {
  terrain: { text: "Le relief est la somme de couches de bruit : chaque octave a une fréquence deux fois plus élevée et une amplitude deux fois plus faible que la précédente. On voit apparaître d’abord les collines, puis les vallons, puis le grain. C’est le bruit fractal (fBm).", facts: () => [["bruit", "Perlin, Simplex, valeur"], ["octaves", "4 à 8"], ["usages", "terrains, nuages, textures"]] },
  outils: { text: "Les bruits génèrent des variations naturelles. La Wave Function Collapse assemble des tuiles en respectant des règles de voisinage. Les L-systèmes réécrivent des symboles pour faire pousser des plantes. Les outils comme Geometry Nodes (Blender) et Houdini combinent tout cela dans des graphes de nœuds.", facts: () => [["Blender", "Geometry Nodes"], ["Houdini Engine", "dans Unity, Unreal"], ["web", "shaders, compute"]] }
};
