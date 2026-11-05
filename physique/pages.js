// Chapitre 50 : Physique temps réel et collisions (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 50 · moteurs",
  "title": "La physique temps réel",
  "sub": "crédible plutôt qu’exacte",
  "body": "<p class=\"lede\">Un moteur physique de jeu ou de XR doit être <b>rapide et stable</b> : 90 pas par seconde, des centaines d’objets, sans explosion numérique. La précision d’un simulateur scientifique n’est pas l’objectif.</p>\n    <p>En réalité mixte, la physique utilise aussi le maillage de la pièce réelle (chapitre 23) : une balle virtuelle rebondit sur le vrai canapé.</p>",
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
  "lit": "etapes",
  "look": {},
  "scene": "etapes",
  "fig": ""
 },
 {
  "kicker": "50.1",
  "title": "Phase large",
  "sub": "éliminer vite les paires impossibles",
  "body": "<p class=\"lede\">Avec n objets, il y a n(n−1)/2 paires. La <b>phase large</b> ne garde que celles dont les volumes englobants se chevauchent :</p>\n    <ul class=\"rules\"><li><b>Tri et balayage</b> (sweep and prune) des intervalles sur un axe.</li><li><b>Grilles</b> spatiales ou hachage.</li><li><b>BVH dynamique</b> (chapitre 10), mise à jour quand les objets bougent.</li></ul>",
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
  "lit": "col",
  "look": {},
  "scene": "col",
  "fig": ""
 },
 {
  "kicker": "50.2",
  "title": "Phase fine : GJK et EPA",
  "sub": "la distance entre formes convexes",
  "body": "<p class=\"lede\">L’algorithme <b>GJK</b> (Gilbert-Johnson-Keerthi) détermine si deux formes convexes se touchent en cherchant si l’origine est dans leur <b>différence de Minkowski</b>, construite pas à pas à partir de points extrêmes (fonctions de support).</p>\n    <p>S’il y a interpénétration, <b>EPA</b> (expanding polytope algorithm) agrandit le polytope trouvé par GJK pour obtenir la profondeur et la direction de pénétration, nécessaires à la réponse. Les formes concaves sont découpées en morceaux convexes (décomposition convexe).</p>",
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
  "lit": "col",
  "look": {},
  "scene": "col",
  "fig": ""
 },
 {
  "kicker": "50.3",
  "title": "Corps souples et fluides",
  "sub": "au-delà du rigide",
  "body": "<table class=\"data\"><tr><th>simulation</th><th>méthode courante</th></tr><tr><td>tissus, cordes</td><td>particules et contraintes (PBD, XPBD)</td></tr><tr><td>corps mous</td><td>éléments finis simplifiés, PBD</td></tr><tr><td>fluides</td><td>particules (SPH, FLIP) ou grilles</td></tr><tr><td>destruction</td><td>fracture précalculée (Voronoï)</td></tr></table>\n    <p class=\"lede\">La dynamique à base de positions (PBD) projette directement les positions pour satisfaire des contraintes : très stable, elle est utilisée par Unreal (Chaos), NVIDIA Flex et de nombreux jeux. Les fluides réalistes restent coûteux ; on les simule souvent sur GPU (compute shaders, chapitre 8).</p>",
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
  "lit": "etapes",
  "look": {},
  "scene": "etapes",
  "fig": ""
 }
];
export const PLATES = {
  col: { text: "Les cadres gris sont les boîtes englobantes alignées sur les axes (AABB). Tant qu’elles ne se chevauchent pas (blanc), aucun calcul précis n’est nécessaire. Quand elles se chevauchent (bleu), on lance le test exact entre la boîte tournée et la sphère ; s’il y a contact (rouge), on calcule la réponse.", facts: () => [["phase large", "AABB, grilles, BVH"], ["phase fine", "GJK, SAT"], ["réponse", "impulsions"]] },
  etapes: { text: "À chaque pas, on applique les forces et l’on intègre les vitesses ; on cherche les paires d’objets proches, puis leurs points de contact exacts ; un solveur itératif calcule les impulsions qui empêchent l’interpénétration et respectent les frottements et les articulations. Les objets immobiles sont endormis pour économiser du calcul.", facts: () => [["solveur", "Gauss-Seidel projeté"], ["moteurs", "PhysX, Havok, Jolt, Rapier"], ["web", "Rapier, Cannon, Ammo"]] }
};
