// Chapitre 45 : Les fonctions de perte géométriques (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 45 · entraînement",
  "title": "Les pertes géométriques",
  "sub": "dire au réseau à quel point il se trompe",
  "body": "<p class=\"lede\">Pour apprendre, un réseau a besoin d’une <b>perte</b> : un nombre qui mesure l’écart entre sa prédiction et la vérité, et qu’on peut dériver.</p>\n    <p>En 3D, comparer deux formes n’est pas évident : deux nuages de points n’ont ni le même nombre de points, ni le même ordre. Il faut des distances adaptées.</p>",
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
  "lit": "pertes",
  "look": {},
  "scene": "pertes",
  "fig": ""
 },
 {
  "kicker": "45.1",
  "title": "La distance de Chamfer",
  "sub": "le plus proche voisin",
  "body": "<div class=\"eq\">d_CD(S₁, S₂) = (1/|S₁|) Σ_x min_y ‖x − y‖² + (1/|S₂|) Σ_y min_x ‖x − y‖²</div>\n    <p class=\"lede\">Pour chaque point de la prédiction, on cherche le point le plus proche de la cible, et réciproquement. Simple et rapide (k-NN sur GPU), elle est la perte la plus utilisée. Défaut : elle tolère des densités très inégales (beaucoup de points d’un côté, peu de l’autre).</p>",
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
  "lit": "pertes",
  "look": {},
  "scene": "pertes",
  "fig": ""
 },
 {
  "kicker": "45.2",
  "title": "Earth Mover et IoU",
  "sub": "transport optimal et recouvrement",
  "body": "<ul class=\"rules\"><li><b>Earth Mover’s Distance</b> : le coût minimal pour déplacer un nuage sur l’autre, point pour point (appariement un à un). Elle préserve la répartition globale, mais coûte cher : on utilise des approximations (Sinkhorn, auction).</li><li><b>IoU 3D</b> (intersection sur union) : le volume commun divisé par le volume total ; c’est le score des détecteurs de boîtes 3D (chapitre 38) et de la reconstruction en voxels.</li><li><b>F-score</b> à un seuil donné : la part de points à moins de τ millimètres, plus parlante pour l’évaluation.</li></ul>",
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
  "lit": "pertes",
  "look": {},
  "scene": "pertes",
  "fig": ""
 },
 {
  "kicker": "45.3",
  "title": "La régularisation des surfaces",
  "sub": "Laplacien, normales, arêtes",
  "body": "<p class=\"lede\">Quand un réseau déforme un maillage, la perte de données seule peut créer des pics, des plis et des auto-intersections.</p>\n    <ul class=\"rules\"><li><b>Laplacien</b> : chaque sommet doit rester proche de la moyenne de ses voisins.</li><li><b>Cohérence des normales</b> : deux faces voisines doivent avoir des normales proches.</li><li><b>Longueur des arêtes</b> : éviter les triangles étirés.</li><li><b>Eikonale</b> pour les SDF : ‖∇f‖ = 1, pour que le champ reste une vraie distance.</li></ul>\n    <p>Ces termes sont additionnés à la perte principale avec des poids à régler.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 10,
   "el": 28,
   "dist": 26,
   "auto": true
  },
  "lit": "lisse",
  "look": {},
  "scene": "lisse",
  "fig": ""
 }
];
export const PLATES = {
  pertes: { text: "Chamfer et Earth Mover comparent des nuages de points. L’IoU compare des volumes ou des boîtes. Pour les représentations implicites, on compare la valeur du champ en des points tirés au hasard. Pour les méthodes supervisées par des images, on compare des rendus. Les régularisations empêchent les surfaces aberrantes.", facts: () => [["points", "Chamfer, EMD"], ["boîtes", "IoU"], ["maillages", "+ Laplacien"]] },
  lisse: { text: "Une surface générée par un réseau peut être bruitée, comme un terrain avec beaucoup d’octaves. La régularisation laplacienne pénalise l’écart entre chaque sommet et la moyenne de ses voisins : elle lisse la surface, comme si l’on ne gardait que les premières octaves.", facts: () => [["Laplacien", "sommet − moyenne des voisins"], ["normales", "cohérence entre faces voisines"], ["dosage", "poids de la régularisation"]] }
};
