// Chapitre 42 : IA générative text-to-3D et image-to-3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 42 · IA 3D",
  "title": "La génération 3D",
  "sub": "du texte à l’objet",
  "body": "<p class=\"lede\">Les générateurs d’images ont appris sur des milliards d’images. Les objets 3D sont bien plus rares (quelques dizaines de millions dans Objaverse-XL) : les premières méthodes ont donc emprunté le savoir des modèles 2D.</p>\n    <p>Aujourd’hui, deux chemins coexistent : s’appuyer sur des vues 2D générées, ou générer directement dans un espace 3D appris. Les deux aboutissent à un maillage texturé utilisable dans Blender, un moteur ou un casque.</p>",
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
  "lit": "direct",
  "look": {},
  "scene": "direct",
  "fig": ""
 },
 {
  "kicker": "42.1",
  "title": "Le Score Distillation Sampling",
  "sub": "un critique 2D pour la 3D",
  "body": "<p class=\"lede\">DreamFusion (Google, 2022) optimise un NeRF par une perte qui pousse chaque rendu vers ce que le modèle de diffusion juge probable pour la description.</p>\n    <div class=\"eq\">∇θ L_SDS ≈ E[ w(t) (ε̂(x_t ; y, t) − ε) ∂x/∂θ ]</div>\n    <p>On bruite le rendu x, on demande au modèle de diffusion de prédire le bruit ε̂ sachant le texte y, et la différence avec le vrai bruit donne la direction de correction. Variantes : Magic3D, ProlificDreamer (VSD), et SDS appliqué aux gaussiennes (DreamGaussian).</p>",
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
  "lit": "sds",
  "look": {},
  "scene": "sds",
  "fig": ""
 },
 {
  "kicker": "42.2",
  "title": "Multi-vues puis reconstruction",
  "sub": "LGM, InstantMesh",
  "body": "<ul class=\"rules\"><li>Un modèle de diffusion affiné sur des rendus 3D (Zero123++, MVDream) produit 4 à 6 vues cohérentes de l’objet.</li><li>Un réseau de reconstruction feed-forward les convertit en 3D : <b>LGM</b> prédit des gaussiennes, <b>InstantMesh</b> un maillage via une représentation intermédiaire (FlexiCubes).</li><li>Le tout prend quelques secondes sur un GPU.</li><li>Limites : la face cachée est inventée, et les incohérences entre vues créent des défauts.</li></ul>",
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
  "lit": "direct",
  "look": {},
  "scene": "direct",
  "fig": ""
 },
 {
  "kicker": "42.3",
  "title": "Les générateurs 3D natifs",
  "sub": "diffusion dans un latent 3D",
  "body": "<p class=\"lede\">Les modèles les plus récents apprennent directement la distribution des formes 3D : un 3D-VAE (chapitre 41) encode la géométrie, un transformer de diffusion génère dans ce latent, puis un second modèle peint la texture en vues multiples.</p>\n    <table class=\"data\"><tr><th>modèle</th><th>éditeur</th><th>accès</th></tr><tr><td>Hunyuan3D</td><td>Tencent</td><td>poids ouverts</td></tr><tr><td>TRELLIS</td><td>Microsoft</td><td>poids ouverts</td></tr><tr><td>Tripo, Meshy, Rodin</td><td>start-ups</td><td>services</td></tr><tr><td>Stable Fast 3D</td><td>Stability AI</td><td>poids ouverts</td></tr></table>\n    <p>Limites pour la production : topologie dense et irrégulière, UV automatiques, dimensions inexactes. On retopologise et on corrige dans Blender (chapitre 30).</p>",
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
  "lit": "direct",
  "look": {},
  "scene": "direct",
  "fig": ""
 }
];
export const PLATES = {
  sds: { text: "On optimise une scène 3D pour que toutes ses vues ressemblent, aux yeux d’un modèle de diffusion d’images, à la description donnée. Le modèle 2D ne voit jamais la 3D : il juge des rendus. Lent (des dizaines de minutes) et sujet aux objets à plusieurs visages (problème de Janus).", facts: () => [["critique", "Stable Diffusion, Imagen"], ["durée", "minutes à heures"], ["défaut", "Janus, sursaturation"]] },
  direct: { text: "Les méthodes récentes prédisent d’abord plusieurs vues cohérentes de l’objet, puis les reconstruisent en 3D par un réseau entraîné (gaussiennes avec LGM, maillage avec InstantMesh), en quelques secondes. Les générateurs natifs font la diffusion directement dans un espace latent 3D (Hunyuan3D, TRELLIS, Tripo).", facts: () => [["durée", "secondes"], ["sortie", "glTF, OBJ, FBX"], ["libres", "Hunyuan3D, TRELLIS, InstantMesh"]] }
};
