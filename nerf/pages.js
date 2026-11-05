// Chapitre 39 : Les champs de radiance neuronaux (NeRF) (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 39 · IA 3D",
  "title": "Les NeRF",
  "sub": "une scène dans un réseau",
  "body": "<p class=\"lede\">Les <b>Neural Radiance Fields</b> (Mildenhall et al., 2020) remplacent maillages et textures par une fonction continue : un réseau qui, pour un point et une direction, donne une couleur et une densité.</p>\n    <p>Entraîné sur quelques dizaines de photos d’une scène, il synthétise des vues nouvelles d’un réalisme inédit : reflets, transparences, détails fins. C’est une forme de représentation implicite (chapitre 6), apprise.</p>",
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
  "lit": "rayon",
  "look": {},
  "scene": "rayon",
  "fig": ""
 },
 {
  "kicker": "39.1",
  "title": "Le principe",
  "sub": "position et direction en entrée",
  "body": "<div class=\"eq\">F_Θ : (x, y, z, θ, φ) → (r, g, b, σ)</div>\n    <ul class=\"rules\"><li>La <b>densité</b> σ ne dépend que de la position : la géométrie est la même quel que soit le point de vue.</li><li>La <b>couleur</b> dépend aussi de la direction : c’est ce qui reproduit les reflets.</li><li>Le réseau d’origine est un MLP de 8 couches ; chaque scène a son propre réseau.</li></ul>",
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
  "lit": "rayon",
  "look": {},
  "scene": "rayon",
  "fig": ""
 },
 {
  "kicker": "39.2",
  "title": "L’encodage positionnel",
  "sub": "voir les détails fins",
  "body": "<p class=\"lede\">Un MLP nourri directement avec (x, y, z) apprend des fonctions trop lisses : les détails disparaissent (biais spectral).</p>\n    <div class=\"eq\">γ(p) = (sin 2⁰πp, cos 2⁰πp, …, sin 2^(L−1)πp, cos 2^(L−1)πp)</div>\n    <p>On projette chaque coordonnée sur des sinus et cosinus de fréquences croissantes. <b>Instant-NGP</b> (NVIDIA, 2022) remplace cet encodage par une grille de hachage multirésolution apprise : l’entraînement passe de plusieurs heures à quelques secondes ou minutes.</p>",
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
  "lit": "entrain",
  "look": {},
  "scene": "entrain",
  "fig": ""
 },
 {
  "kicker": "39.3",
  "title": "Le raymarching différentiable",
  "sub": "l’équation du rendu volumique",
  "body": "<div class=\"eq\">C(r) = Σ_i T_i (1 − e^(−σ_i δ_i)) c_i,  T_i = e^(−Σ_(j<i) σ_j δ_j)</div>\n    <p class=\"lede\">On additionne les couleurs des échantillons, chacune pondérée par son opacité et par la transmittance T (la part de lumière qui n’a pas encore été arrêtée). Cette somme est dérivable : on peut rétropropager l’erreur de couleur jusqu’aux poids du réseau. Un échantillonnage hiérarchique (grossier puis fin) concentre les points là où la densité est forte.</p>",
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
  "lit": "rayon",
  "look": {},
  "scene": "rayon",
  "fig": ""
 },
 {
  "kicker": "39.4",
  "title": "Forces, limites, descendants",
  "sub": "ce que sont devenus les NeRF",
  "body": "<ul class=\"rules\"><li><b>Forces</b> : réalisme, vues nouvelles, compacité.</li><li><b>Limites</b> : rendu lent (des centaines d’évaluations par pixel), édition difficile, scène figée.</li><li><b>Descendants</b> : Mip-NeRF (anticrénelage), Zip-NeRF, NeRF dynamiques, relighting, NeuS (surfaces nettes), et surtout les gaussiennes (chapitre 40), qui ont pris le relais pour le temps réel.</li><li>Outils : nerfstudio, Instant-NGP, et l’intégration dans Luma, Polycam, Postshot.</li></ul>",
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
  "lit": "entrain",
  "look": {},
  "scene": "entrain",
  "fig": ""
 }
];
export const PLATES = {
  rayon: { text: "Pour un pixel, on lance un rayon. On l’échantillonne : en chaque point, le réseau renvoie une densité σ et une couleur. On accumule les couleurs pondérées par l’opacité et par la lumière qui reste après les points précédents (la transmittance). La barre à droite est la couleur du pixel.", facts: () => [["entrée", "(x, y, z) + direction"], ["sortie", "couleur + densité"], ["rendu", "intégrale le long du rayon"]] },
  entrain: { text: "On tire des pixels au hasard dans les photos, on rend leur couleur par le réseau, on compare à la vraie couleur et l’on rétropropage. Tout est différentiable : le réseau apprend seul où est la matière et de quelle couleur elle est, vue de chaque direction.", facts: () => [["perte", "écart de couleur"], ["temps", "minutes (Instant-NGP)"], ["sortie", "le réseau entraîné"]] }
};
