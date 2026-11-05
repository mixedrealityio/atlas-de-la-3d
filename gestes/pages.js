// Chapitre 26 : Interaction directe et gestuelle 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 26 · interaction",
  "title": "L’interaction en 3D",
  "sub": "pas de souris, pas d’écran",
  "body": "<p class=\"lede\">En 2D, la souris pointe un pixel. En 3D, il faut choisir un objet dans l’espace, le saisir, le déplacer, le tourner, avec des mains qui tremblent et sans surface d’appui.</p>\n    <p>Les interfaces spatiales reposent sur quelques briques : la <b>sélection</b> (quoi ?), la <b>manipulation</b> (comment le bouger ?), la <b>navigation</b> (se déplacer) et le <b>contrôle d’application</b> (menus, boutons).</p>",
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
  "lit": "modes",
  "look": {},
  "scene": "modes",
  "fig": ""
 },
 {
  "kicker": "26.1",
  "title": "Le raycasting",
  "sub": "lancer un rayon depuis la main",
  "body": "<p class=\"lede\">Un rayon est lancé dans la scène, et l’on cherche le premier objet touché, avec les mêmes structures qu’en lancer de rayons (chapitre 10).</p>\n    <ul class=\"rules\"><li>Origine stable : épaule ou poitrine vers la main, filtré contre les tremblements.</li><li>Pointeur au bout du rayon et objet survolé mis en évidence : l’utilisateur sait ce qu’il va sélectionner.</li><li>Cibles assez grandes : au moins 1 à 2° d’angle visuel.</li><li>Variantes : rayon courbe (pour se téléporter au sol), cône de sélection pour les petits objets.</li></ul>",
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
  "kicker": "26.2",
  "title": "Les gestes",
  "sub": "discrets et continus",
  "body": "<table class=\"data\"><tr><th>type</th><th>exemple</th><th>usage</th></tr><tr><td>discret</td><td>pincer, pouce levé, paume vers le haut</td><td>clic, ouvrir un menu</td></tr><tr><td>continu</td><td>pincer et tirer, écarter deux mains</td><td>déplacer, redimensionner</td></tr><tr><td>posture</td><td>main ouverte vers le haut</td><td>afficher un menu de poignet</td></tr></table>\n    <p class=\"lede\">Un bon geste est facile à faire, difficile à faire par accident (le « problème de Midas »), et donne un retour visuel ou sonore immédiat. Les gestes les plus fiables sont le pincement et la saisie.</p>",
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
  "kicker": "26.3",
  "title": "Interfaces spatiales",
  "sub": "UI et UX en 3D",
  "body": "<ul class=\"rules\"><li>Panneaux à <b>distance de confort</b> (1 à 2 m), légèrement sous le regard, courbés vers l’utilisateur.</li><li>Éléments qui <b>suivent</b> doucement (tag-along) ou qui restent <b>ancrés</b> au monde (chapitre 23).</li><li>Boutons qui s’enfoncent sous le doigt, avec un son et une lueur au survol.</li><li>Texte assez grand (le PPD est faible, chapitre 14) et à fort contraste.</li><li>Ergonomie : éviter les bras tendus longtemps, prévoir l’interaction assise.</li></ul>\n    <p class=\"lede\">Les boîtes à outils fournissent ces composants : Mixed Reality Toolkit 3 (Unity), XR Interaction Toolkit, Meta Interaction SDK, RealityKit et SwiftUI sur visionOS, et des bibliothèques WebXR (chapitre 56).</p>",
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
  "lit": "modes",
  "look": {},
  "scene": "modes",
  "fig": ""
 }
];
export const PLATES = {
  rayon: { text: "Le rayon part de l’épaule et passe par la main : il est plus stable qu’un rayon qui suivrait l’orientation du poignet. Il sélectionne le panneau qu’il touche ; le pincement du pouce et de l’index vaut un clic. Relâcher le pincement relâche la sélection.", facts: () => [["visée", "épaule → main"], ["clic", "pincement"], ["sur Vision Pro", "regard + pincement"]] },
  modes: { text: "Les interfaces combinent plusieurs modes selon la distance : de près, on touche et on saisit ; de loin, on vise avec un rayon ou avec le regard. La voix et les manettes complètent quand les mains sont occupées ou que la précision compte.", facts: () => [["près", "toucher, saisir"], ["loin", "rayon, regard"], ["toolkits", "MRTK, XR Interaction Toolkit"]] }
};
