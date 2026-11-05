// Chapitre 77 : Les limites actuelles de la VR et de l’AR (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 77 · industrie et web",
  "title": "Les limites physiques",
  "sub": "loin de l’œil humain",
  "body": "<ul class=\"rules\"><li><b>Champ de vision</b> : environ 200° pour l’humain, 100 à 110° pour un casque : un effet de hublot.</li><li><b>Résolution</b> : environ 60 PPD pour l’œil, 20 à 40 pour les casques (chapitre 14) : texte moins net, effet de grille parfois visible.</li><li><b>Mise au point</b> fixe : le conflit vergence-accommodation (chapitre 21).</li><li><b>Poids</b> : 500 à 700 g pour un casque autonome ; <b>autonomie</b> de 2 à 3 heures ; <b>chaleur</b>.</li><li><b>Haptique</b> encore limitée (chapitre 28).</li></ul>",
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
  "lit": "ecarts",
  "look": {},
  "scene": "ecarts",
  "fig": ""
 },
 {
  "kicker": "77.1",
  "title": "Les limites d’usage et de marché",
  "sub": "pourquoi tout le monde n’en porte pas",
  "body": "<p class=\"lede\">Câbles ou compromis du sans-fil, confort avec des lunettes de vue, hygiène, isolement social perçu, prix du contenu haut de gamme, fragmentation des plateformes. L’adoption a suivi des creux de désillusion (après 2016, puis après 2021), avec une base installée solide mais loin des prévisions.</p>\n    <p>Pour l’AR grand public, s’ajoutent le format lunettes (luminosité, batterie, chaleur dans quelques dizaines de grammes), l’absence de grammaire d’interface unifiée et les questions de vie privée (caméras qui filment les passants, cartes 3D des villes).</p>",
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
  "lit": "route",
  "look": {},
  "scene": "route",
  "fig": ""
 },
 {
  "kicker": "77.2",
  "title": "La feuille de route",
  "sub": "quels usages justifient un casque ?",
  "body": "<p class=\"lede\">La question n’est plus de savoir si la VR et l’AR fonctionnent techniquement, mais <b>quels usages justifient</b> de porter un appareil sur la tête. Formation, conception, thérapie et jeu répondent déjà.</p>\n    <p>L’AR grand public arrivera probablement par accumulation (notifications, puis navigation, traduction en direct, puis assistants IA qui voient et se souviennent) plutôt que par une révolution, au rythme où optique, batterie et modèles embarqués convergeront (chapitre 60).</p>",
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
  "lit": "route",
  "look": {},
  "scene": "route",
  "fig": ""
 }
];
export const PLATES = {
  ecarts: { text: "Les casques actuels restent loin des capacités humaines : environ la moitié du champ de vision, la moitié de l’acuité au mieux, et un seul plan de mise au point. Ordres de grandeur pour un bon casque grand public.", facts: () => [["champ", "≈ 110° sur ≈ 200°"], ["acuité", "≈ 25 à 35 PPD sur 60"], ["mise au point", "un plan fixe"]] },
  route: { text: "Chaque limite a sa piste : nouveaux afficheurs pour la densité, optiques plus fines pour le poids, rendu fovéal et upscaling pour le calcul, calcul déporté pour l’autonomie, et des assistants IA qui voient ce que l’on voit pour justifier de porter des lunettes toute la journée.", facts: () => [["matériel", "écrans, optiques, batterie"], ["logiciel", "fovéal, IA"], ["usage", "l’application qui justifie"]] }
};
