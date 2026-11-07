export const PRACTICE = {
 "2": [
  {
   "q": "Pourquoi un identifiant court améliore-t-il la portée de lecture ?",
   "choices": [
    "il garde une version basse, donc de plus gros modules pour le même côté imprimé",
    "il charge plus vite",
    "il évite la zone de silence",
    "il augmente le contraste"
   ],
   "answer": 0,
   "why": "<p>Moins de données, moins de modules : chaque module est plus gros et se lit de plus loin.</p>"
  }
 ],
 "3": [
  {
   "q": "Quelle est la largeur de la zone de silence d’un QR code standard ?",
   "choices": [
    "1 module",
    "2 modules",
    "4 modules",
    "10 % du côté"
   ],
   "answer": 2,
   "why": "<p>4 modules sur chaque bord (2 pour un Micro QR).</p>"
  }
 ],
 "5": [
  {
   "q": "Un hologramme est placé à 3 m d’un QR code dont l’orientation est fausse de 1°. Quel écart attendre ?",
   "choices": [
    "environ 1 mm",
    "environ 5 mm",
    "environ 5 cm",
    "environ 50 cm"
   ],
   "answer": 2,
   "why": "<p>3 000 mm × tan 1° ≈ 52 mm : d’où l’intérêt de codes proches et multiples.</p>"
  }
 ]
};
