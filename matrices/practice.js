export const PRACTICE = {
 "1": [
  {
   "q": "Quel est le résultat du produit vectoriel de deux arêtes d’un triangle ?",
   "choices": [
    "un nombre",
    "un vecteur perpendiculaire au triangle (sa normale)",
    "l’aire exacte en pixels",
    "une matrice"
   ],
   "answer": 1,
   "why": "<p>Sa direction est la normale, sa longueur vaut deux fois l’aire du triangle.</p>"
  }
 ],
 "2": [
  {
   "q": "Pourquoi une direction a-t-elle w = 0 ?",
   "choices": [
    "pour qu’elle soit ignorée par les translations",
    "pour qu’elle soit plus courte",
    "parce que les directions n’existent pas en 3D",
    "pour la perspective"
   ],
   "answer": 0,
   "why": "<p>La dernière colonne est multipliée par w : avec w = 0, la translation ne s’applique pas.</p>"
  }
 ],
 "3": [
  {
   "q": "Dans M = T · R · S appliquée à un point, quelle transformation agit en premier ?",
   "choices": [
    "T",
    "R",
    "S",
    "toutes en même temps"
   ],
   "answer": 2,
   "why": "<p>La matrice la plus proche du point (à droite) agit la première.</p>"
  }
 ],
 "5": [
  {
   "q": "Pourquoi utilise-t-on une matrice spéciale pour les normales ?",
   "choices": [
    "une mise à l’échelle non uniforme ne les garderait pas perpendiculaires à la surface",
    "pour les colorier",
    "pour la perspective",
    "parce que les normales ont w = 1"
   ],
   "answer": 0,
   "why": "<p>On utilise la transposée de l’inverse de la matrice modèle.</p>"
  }
 ]
};
