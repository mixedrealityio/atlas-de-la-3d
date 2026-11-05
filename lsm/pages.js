// Chapitre 41 : Large Spatial Models et transformers 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 41 · IA 3D",
  "title": "Les grands modèles spatiaux",
  "sub": "LSM : large spatial models",
  "body": "<p class=\"lede\">Après les grands modèles de langage, les <b>modèles de fondation spatiaux</b> visent la même polyvalence pour la 3D : entraînés une fois sur d’énormes jeux de données, ils servent à de nombreuses tâches.</p>\n    <p>Deux familles : ceux qui <b>reconstruisent</b> la 3D à partir d’images en un seul passage (sans optimisation par scène) et ceux qui <b>génèrent</b> de la 3D (chapitre 42).</p>",
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
  "lit": "tokens",
  "look": {},
  "scene": "tokens",
  "fig": ""
 },
 {
  "kicker": "41.1",
  "title": "Les transformers 3D",
  "sub": "l’attention sur des jetons spatiaux",
  "body": "<ul class=\"rules\"><li><b>Point Transformer</b>, <b>Point Transformer V3</b> : attention locale sur des groupes de points, sérialisés le long de courbes qui remplissent l’espace.</li><li><b>Transformers sur voxels</b> épars pour les scènes LiDAR.</li><li><b>Transformers multi-vues</b> : DUSt3R et MASt3R prédisent des cartes de points 3D à partir de deux photos, sans connaître les caméras ; VGGT (2025) prédit en un passage les caméras, la profondeur et les points de nombreuses vues.</li><li>Modèles de reconstruction (LRM) : une image → une représentation 3D en une seconde.</li></ul>",
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
  "lit": "tokens",
  "look": {},
  "scene": "tokens",
  "fig": ""
 },
 {
  "kicker": "41.2",
  "title": "Les auto-encodeurs 3D",
  "sub": "un espace latent de formes",
  "body": "<p class=\"lede\">Un <b>3D-VAE</b> projette une forme dans un espace latent continu : des formes proches y sont proches, et l’on peut interpoler, compléter une forme partielle ou générer.</p>\n    <p>Les générateurs récents (Hunyuan3D, TRELLIS, Step1X-3D) encodent la géométrie en un ensemble de vecteurs latents, puis entraînent un modèle de diffusion dans cet espace, conditionné par une image ou un texte. Le décodeur produit un champ d’occupation ou une SDF, d’où l’on extrait un maillage.</p>",
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
  "lit": "vae",
  "look": {},
  "scene": "vae",
  "fig": ""
 },
 {
  "kicker": "41.3",
  "title": "Vers des modèles du monde",
  "sub": "comprendre, prédire, agir",
  "body": "<p class=\"lede\">Les modèles spatiaux rejoignent les <b>modèles du monde</b> : des réseaux qui prédisent la suite d’une scène 3D quand on s’y déplace ou qu’on agit, pour la robotique, la simulation et les mondes générés (World Labs, Genie, Cosmos).</p>\n    <p>Les modèles de langage multimodaux apprennent aussi à raisonner sur l’espace (distances, positions relatives) à partir d’images et de cartes 3D : c’est le chaînon qui manque pour des assistants de réalité mixte qui comprennent la pièce.</p>",
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
  "lit": "tokens",
  "look": {},
  "scene": "tokens",
  "fig": ""
 }
];
export const PLATES = {
  tokens: { text: "Comme pour le texte, on découpe la donnée en jetons : des groupes de points, des patchs de voxels, des groupes de gaussiennes, ou les patchs de plusieurs images. On ajoute leur position 3D, puis l’attention relie tous les jetons entre eux. Des têtes spécialisées produisent le résultat.", facts: () => [["exemples", "Point Transformer, PTv3"], ["multi-vues", "DUSt3R, VGGT"], ["coût", "attention quadratique"]] },
  vae: { text: "Un auto-encodeur variationnel 3D apprend à comprimer une forme en un espace latent compact et structuré, puis à la reconstruire. Les générateurs 3D modernes font la diffusion dans cet espace latent plutôt que sur la forme elle-même.", facts: () => [["latent", "ensemble de vecteurs"], ["usage", "génération"], ["exemples", "3DShape2VecSet, TRELLIS"]] }
};
