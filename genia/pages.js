// Chapitre 54 : Les moteurs de génération IA en temps réel (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 54 · moteurs",
  "title": "L’IA dans la boucle temps réel",
  "sub": "rendu et génération hybrides",
  "body": "<p class=\"lede\">Jusqu’ici, l’IA générative produit des objets à l’avance. L’étape suivante est de l’intégrer <b>dans</b> le moteur : à chaque image (rendu neuronal) ou à la demande, pendant l’utilisation (génération de contenu).</p>\n    <p>Le défi est double : la <b>latence</b> (11 ms par image en VR) et la <b>cohérence</b> (un réseau d’images invente des détails qui changent d’une image à l’autre, ce que l’œil voit immédiatement).</p>",
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
  "lit": "hybride",
  "look": {},
  "scene": "hybride",
  "fig": ""
 },
 {
  "kicker": "54.1",
  "title": "Le rendu neuronal",
  "sub": "ce qui marche aujourd’hui",
  "body": "<ul class=\"rules\"><li><b>Super-résolution et génération d’images intermédiaires</b> (DLSS, FSR, XeSS, MetalFX) : rendu en basse résolution, reconstruction par réseau ; dans tous les jeux récents.</li><li><b>Débruitage</b> du lancer de rayons (chapitre 10).</li><li><b>Textures et matériaux neuronaux</b> : de petits réseaux remplacent des textures lourdes (compression neuronale, shaders neuronaux).</li><li><b>Avatars neuronaux</b> : visages en gaussiennes animées (Codec Avatars, Persona sur Vision Pro).</li></ul>\n    <p class=\"lede\">Des démonstrations de jeux entièrement générés image par image par un modèle du monde existent (GameNGen, Genie), mais restent des prototypes basse résolution.</p>",
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
  "lit": "hybride",
  "look": {},
  "scene": "hybride",
  "fig": ""
 },
 {
  "kicker": "54.2",
  "title": "Générer du contenu à la demande",
  "sub": "objets, textures, comportements",
  "body": "<table class=\"data\"><tr><th>à générer</th><th>technique</th><th>où</th></tr><tr><td>objets 3D</td><td>générateurs du chapitre 42</td><td>serveur ou PC proche, secondes</td></tr><tr><td>textures</td><td>diffusion d’images</td><td>GPU de bureau</td></tr><tr><td>dialogues, comportements</td><td>modèles de langage</td><td>local (petits modèles) ou serveur</td></tr><tr><td>environnements</td><td>procédural + IA (chapitre 53)</td><td>outils d’édition</td></tr><tr><td>sons</td><td>génération audio</td><td>serveur</td></tr></table>\n    <p class=\"lede\">Le moteur doit ensuite rendre l’objet utilisable : collisions, LOD, compression (chapitre 57), et placement cohérent avec la pièce réelle (chapitre 23).</p>",
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
  "lit": "local",
  "look": {},
  "scene": "local",
  "fig": ""
 },
 {
  "kicker": "54.3",
  "title": "L’IA locale sur les casques",
  "sub": "HoloLens 2, compute pack, Quest, Android XR",
  "body": "<p class=\"lede\">Faire tourner les modèles sur l’appareil garantit la confidentialité et le fonctionnement hors ligne (usines, défense, hôpitaux).</p>\n    <ul class=\"rules\"><li><b>HoloLens 2</b> : petits modèles de vision quantifiés (Windows ML, ONNX Runtime, Unity Sentis), quelques inférences par seconde ; les modèles lourds sur un PC du réseau local.</li><li><b>Magic Leap 2</b> : le compute pack (16 Go) accepte des modèles moyens sur CPU et GPU.</li><li><b>Quest 3, Android XR</b> : NPU du Snapdragon (LiteRT, Qualcomm AI Engine, ExecuTorch), petits modèles de langage et de vision.</li><li><b>Vision Pro</b> : Core ML sur le Neural Engine, Apple Foundation Models.</li></ul>\n    <p>Règle d’architecture : sur l’appareil ce qui doit être rapide et privé (détection, suivi, voix), sur un serveur proche ce qui est lourd et ponctuel (génération 3D).</p>",
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
  "lit": "local",
  "look": {},
  "scene": "local",
  "fig": ""
 }
];
export const PLATES = {
  hybride: { text: "Le moteur rend une image simple et des tampons (profondeur, normales, vecteurs de mouvement). Un réseau de neurones en tire une image plus nette (super-résolution), propre (débruitage) ou transformée (style, réalisme). Le moteur garantit la cohérence géométrique, le réseau ajoute le détail.", facts: () => [["déjà partout", "DLSS, FSR 4, XeSS"], ["en recherche", "rendu neuronal complet"], ["contrainte", "cohérence temporelle"]] },
  local: { text: "Un utilisateur demande « une chaise ici » : un modèle de langage interprète, un générateur 3D crée l’objet (souvent sur un serveur ou un PC proche), le moteur le simplifie, le compresse et l’ancre dans la pièce. Les petits modèles tournent déjà sur l’appareil pour la reconnaissance et la description.", facts: () => [["sur casque", "petits modèles quantifiés"], ["sur PC proche", "génération 3D"], ["latence", "secondes"]] }
};
