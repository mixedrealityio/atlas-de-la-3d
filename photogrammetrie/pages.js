// Chapitre 31 : La photogrammétrie multi-vues (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 31 · capture",
  "title": "La photogrammétrie",
  "sub": "mesurer avec des photos",
  "body": "<p class=\"lede\">La photogrammétrie reconstruit la forme et l’apparence d’un objet, d’un bâtiment ou d’un paysage à partir de photos ordinaires, prises avec un téléphone, un appareil photo ou un drone.</p>\n    <p>Elle sert au patrimoine (numériser une statue, un monument), aux jeux et aux effets spéciaux (des décors réels en 3D), à la topographie, à l’inspection industrielle et à la création de jeux de données pour l’IA.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "31.1",
  "title": "Prendre les photos",
  "sub": "ce qui fait une bonne reconstruction",
  "body": "<ul class=\"rules\"><li><b>Recouvrement</b> : chaque partie doit apparaître sur plusieurs photos, depuis des angles variés.</li><li><b>Netteté et éclairage diffus</b> : pas de flou, pas d’ombres dures ni de reflets.</li><li><b>Texture</b> : les surfaces unies, brillantes ou transparentes échouent ; on peut les poudrer ou projeter un motif.</li><li><b>Échelle</b> : une photo ne donne pas les dimensions ; on ajoute une règle, des cibles codées ou le GPS.</li></ul>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "31.2",
  "title": "La structure from motion",
  "sub": "SfM",
  "body": "<p class=\"lede\">Pour deux photos, des points appariés suffisent à estimer le déplacement relatif des appareils (matrice essentielle, algorithme à 5 points) ; on <b>triangule</b> ensuite chaque point.</p>\n    <p>La SfM incrémentale ajoute les photos une à une : localiser la nouvelle photo par PnP sur les points déjà connus (chapitre 24), trianguler de nouveaux points, puis faire un <b>ajustement de faisceaux</b> global (chapitre 23). COLMAP est la référence libre ; GLOMAP fait la même chose de façon globale, plus vite.</p>",
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
  "lit": "sfm",
  "look": {},
  "scene": "sfm",
  "fig": ""
 },
 {
  "kicker": "31.3",
  "title": "Multi-view stereo et surface",
  "sub": "densifier, mailler, texturer",
  "body": "<p class=\"lede\">Connaissant les poses, le MVS cherche pour chaque pixel la profondeur qui rend les photos voisines cohérentes (PatchMatch). On fusionne ces cartes de profondeur en un nuage dense.</p>\n    <p>La <b>reconstruction de Poisson</b> en tire une surface étanche ; la texture est assemblée à partir des meilleures photos pour chaque triangle. Les méthodes neuronales (NeRF, gaussiennes) partent du même résultat SfM mais remplacent le MVS et le maillage par une représentation optimisée.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 }
];
export const PLATES = {
  sfm: { text: "Les photos sont prises sous de nombreux angles. On y repère des points d’intérêt, on les apparie d’une photo à l’autre, et l’on estime ensemble les positions des appareils (gris) et celles des points 3D (bleus). C’est le même principe que le SLAM, mais hors ligne et avec bien plus de précision.", facts: () => [["entrée", "photos qui se recouvrent"], ["sortie", "poses + nuage épars"], ["outils", "COLMAP, Meshroom, RealityScan"]] },
  chaine: { text: "La structure from motion donne les poses et quelques milliers de points. Le multi-view stereo (MVS) calcule ensuite une profondeur pour chaque pixel de chaque photo, d’où un nuage dense. On en reconstruit une surface, puis on projette les photos dessus pour la texturer.", facts: () => [["SfM", "poses"], ["MVS", "densité"], ["alternative", "NeRF, gaussiennes (ch. 39, 40)"]] }
};
