// Chapitre 64 : Optimiser le rendu temps réel (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 64 · rendu",
  "title": "Optimiser le temps réel",
  "sub": "une course contre le budget",
  "body": "<p class=\"lede\">Le temps réel se raisonne en <b>millisecondes</b> : 16,7 ms à 60 Hz, 11,1 ms à 90 Hz en VR, pour deux vues. Chaque passe du moteur a un coût qu’on mesure avec un profileur (RenderDoc, PIX, Nsight, OVR Metrics, Chrome DevTools pour le web).</p>\n    <p>On cherche d’abord le <b>goulot</b> : le CPU (trop d’appels de dessin), le GPU (trop de pixels ou de shaders coûteux), la mémoire (trop de textures) ou la chaleur sur les casques autonomes.</p>",
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
  "lit": "budget",
  "look": {},
  "scene": "budget",
  "fig": ""
 },
 {
  "kicker": "64.1",
  "title": "Éliminer et regrouper",
  "sub": "culling, LOD, batching, instanciation",
  "body": "<ul class=\"rules\"><li><b>Élimination</b> : tronc de vue, occlusion, faces arrière (chapitre 7).</li><li><b>Niveaux de détail</b> (chapitre 51).</li><li><b>Batching</b> : fusionner les objets statiques qui partagent un matériau ; <b>instanciation</b> : dessiner mille arbres en un seul appel.</li><li><b>Tri par matériau</b> : limiter les changements d’état du GPU.</li><li>Ordre de grandeur sur casque autonome : quelques centaines d’appels de dessin par image au plus.</li></ul>",
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
  "lit": "budget",
  "look": {},
  "scene": "budget",
  "fig": ""
 },
 {
  "kicker": "64.2",
  "title": "Forward, deferred, clustered",
  "sub": "choisir son architecture",
  "body": "<table class=\"data\"><tr><th>architecture</th><th>atouts</th><th>limites</th></tr><tr><td>forward</td><td>simple, transparence, MSAA</td><td>coûteux avec beaucoup de lumières</td></tr><tr><td>deferred</td><td>beaucoup de lumières</td><td>bande passante, transparence, MSAA difficile</td></tr><tr><td>forward+ / clustered</td><td>beaucoup de lumières, transparence</td><td>plus complexe</td></tr></table>\n    <p class=\"lede\">Les casques autonomes (GPU mobiles à tuiles) préfèrent le forward avec MSAA : le G-buffer du deferred coûte trop de bande passante.</p>",
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
  "lit": "archi",
  "look": {},
  "scene": "archi",
  "fig": ""
 },
 {
  "kicker": "64.3",
  "title": "Rendre moins, reconstruire",
  "sub": "upscaling, fovéal, résolution dynamique",
  "body": "<p class=\"lede\">La dernière décennie a ajouté la <b>reconstruction</b> : rendre moins de pixels et reconstruire l’image (DLSS, FSR, XeSS, chapitre 54), générer des images intermédiaires, et en XR, ne rendre net que là où l’œil regarde (rendu fovéal, chapitre 27).</p>\n    <p>S’y ajoutent la <b>résolution dynamique</b> (baisser la résolution quand le GPU est en retard) et le choix d’une fréquence fixe : en VR, une cadence stable compte plus qu’une moyenne élevée (chapitre 18).</p>",
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
  "lit": "archi",
  "look": {},
  "scene": "archi",
  "fig": ""
 }
];
export const PLATES = {
  budget: { text: "Le temps disponible pour tout calculer (logique, physique, rendu de deux vues en VR) est l’inverse de la fréquence d’affichage. À 120 Hz, il reste 8,3 ms.", facts: () => [["60 Hz", "16,7 ms"], ["90 Hz", "11,1 ms"], ["120 Hz", "8,3 ms"]] },
  archi: { text: "Le forward dessine chaque objet avec ses lumières : simple, gère la transparence et le MSAA. Le deferred écrit d’abord les matériaux dans des tampons (G-buffer) puis éclaire chaque pixel une fois : idéal avec beaucoup de lumières, mais gourmand en bande passante. Le clustered découpe l’espace en cellules et n’évalue que les lumières utiles.", facts: () => [["casques autonomes", "forward"], ["PC", "deferred ou clustered"], ["three.js", "forward"]] }
};
