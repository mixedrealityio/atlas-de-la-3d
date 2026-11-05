// Chapitre 46 : Les représentations pour l’apprentissage 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 46 · entraînement",
  "title": "Choisir sa représentation",
  "sub": "la décision la plus importante",
  "body": "<p class=\"lede\">Il n’existe pas de représentation idéale : chacune favorise un aspect (vitesse, détail, topologie, rendu) au détriment d’un autre.</p>\n    <table class=\"data\"><tr><th>représentation</th><th>pour</th><th>contre</th></tr><tr><td>voxels</td><td>simples, convolutions 3D</td><td>mémoire O(N³), marches</td></tr><tr><td>points</td><td>légers, issus des capteurs</td><td>pas de topologie</td></tr><tr><td>SDF / implicites</td><td>détail illimité, topologie libre</td><td>extraction de maillage, évaluation lente</td></tr><tr><td>maillages</td><td>rendu, édition, standard</td><td>topologie fixe difficile à apprendre</td></tr><tr><td>gaussiennes</td><td>rendu temps réel, réalisme</td><td>pas de surface nette, lourdes</td></tr></table>",
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
  "lit": "quatre",
  "look": {},
  "scene": "quatre",
  "fig": ""
 },
 {
  "kicker": "46.1",
  "title": "Voxels et points",
  "sub": "les représentations explicites simples",
  "body": "<p class=\"lede\">Les <b>voxels</b> permettent de réutiliser toutes les idées des réseaux d’images, au prix de la mémoire. Les grilles <b>éparses</b> ne stockent que les cases occupées.</p>\n    <p>Les <b>points</b> sont naturels pour les capteurs et légers, mais ne disent pas où est la surface entre eux. Ils sont parfaits pour la classification, la segmentation et la détection.</p>",
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
  "lit": "compare",
  "look": {},
  "scene": "compare",
  "fig": ""
 },
 {
  "kicker": "46.2",
  "title": "Implicites, maillages, gaussiennes",
  "sub": "les représentations riches",
  "body": "<ul class=\"rules\"><li><b>Implicites</b> (DeepSDF, réseaux d’occupation, NeRF) : un réseau répond « dedans ou dehors » ou « quelle distance » en tout point ; résolution infinie. Les grilles de caractéristiques (triplans, hachage) les accélèrent.</li><li><b>Maillages</b> : on déforme souvent un maillage de départ (une sphère) plutôt que d’en créer un ; FlexiCubes et DMTet extraient un maillage dérivable d’un champ.</li><li><b>Gaussiennes</b> : le meilleur compromis entre vitesse de rendu et fidélité visuelle pour reproduire des scènes réelles.</li></ul>\n    <p class=\"lede\">En pratique, les pipelines combinent : gaussiennes ou NeRF pour reconstruire, SDF pour extraire une surface propre, maillage pour livrer.</p>",
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
  "lit": "quatre",
  "look": {},
  "scene": "quatre",
  "fig": ""
 }
];
export const PLATES = {
  quatre: { text: "Le choix de la représentation conditionne l’architecture du réseau, la mémoire et le résultat : un réseau convolutif pour les voxels, PointNet pour les points, un MLP pour les champs implicites, un réseau de graphes pour les maillages, un rasteriseur pour les gaussiennes.", facts: () => [["voxels", "CNN 3D"], ["points", "PointNet, transformers"], ["implicite", "MLP, grilles"]] },
  compare: { text: "Une grille de voxels croît comme N³, une surface comme N² environ. À haute résolution, l’écart devient gigantesque : c’est pourquoi les grilles éparses, les octrees et les représentations implicites ont remplacé les grilles denses.", facts: () => [["voxels", "O(N³)"], ["surface", "≈ O(N²)"], ["implicite", "taille du réseau"]] }
};
