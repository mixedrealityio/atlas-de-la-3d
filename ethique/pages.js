// Chapitre 59 : Éthique, sécurité et confidentialité (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 59 · industrie et web",
  "title": "Éthique du spatial computing",
  "sub": "des capteurs pointés sur soi et sur les autres",
  "body": "<p class=\"lede\">Un casque de réalité mixte a des caméras tournées vers le monde, vers les yeux et vers les mains de son porteur. Il produit des données plus intimes que celles d’un téléphone.</p>\n    <p>La <b>biométrie spatiale</b> (mouvements, regard, mains, visage) est à la fois indispensable au fonctionnement et révélatrice de l’identité, des émotions et de la santé. En Europe, le RGPD classe les données biométriques d’identification parmi les données sensibles, et l’AI Act encadre la reconnaissance des émotions.</p>",
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
  "lit": "donnees",
  "look": {},
  "scene": "donnees",
  "fig": ""
 },
 {
  "kicker": "59.1",
  "title": "Le regard et les gestes",
  "sub": "les données les plus sensibles",
  "body": "<ul class=\"rules\"><li>Le <b>regard</b> révèle ce qui attire, ce qui inquiète, la fatigue, et certains troubles neurologiques.</li><li>Les <b>mouvements</b> de tête et de mains identifient une personne aussi bien qu’une empreinte (études sur des dizaines de milliers d’utilisateurs de VR).</li><li>Le <b>visage</b> suivi pour les avatars donne les expressions et les émotions.</li><li>La <b>carte de la pièce</b> révèle le domicile : surfaces, objets, présence de personnes.</li></ul>",
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
  "lit": "donnees",
  "look": {},
  "scene": "donnees",
  "fig": ""
 },
 {
  "kicker": "59.2",
  "title": "La sécurité en AR",
  "sub": "ne pas masquer le réel",
  "body": "<p class=\"lede\">En réalité augmentée, l’affichage peut cacher un obstacle, un véhicule ou un avertissement. Les règles de sécurité : garder le réel visible, limiter l’opacité et la taille des contenus en mouvement, laisser le système reprendre la main (alerte de limite de zone, passthrough d’urgence).</p>\n    <p>Risques nouveaux : contenus malveillants superposés au réel (fausse signalisation), « attaques » perceptives (clignotements, sons forts), et manipulations par des interfaces trop persuasives.</p>",
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
  "lit": "proteger",
  "look": {},
  "scene": "proteger",
  "fig": ""
 },
 {
  "kicker": "59.3",
  "title": "Concevoir de façon responsable",
  "sub": "les principes",
  "body": "<ul class=\"rules\"><li>Traiter localement et effacer vite (chapitre 54).</li><li>Demander le consentement pour chaque capteur, expliquer pourquoi.</li><li>Protéger les tiers : voyant d’enregistrement, floutage des personnes autour.</li><li>Accessibilité : modes assis, sous-titres, alternatives aux gestes, réglages de confort.</li><li>Respecter l’attention : pas de publicité basée sur le regard sans consentement explicite.</li></ul>",
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
  "lit": "proteger",
  "look": {},
  "scene": "proteger",
  "fig": ""
 }
];
export const PLATES = {
  donnees: { text: "Un casque enregistre en continu la façon dont on bouge, ce qu’on regarde, les expressions du visage et le plan de la pièce. Quelques minutes de mouvements de tête et de mains suffisent à identifier une personne parmi des dizaines de milliers ; le regard trahit l’attention et peut révéler des informations de santé.", facts: () => [["identifiant", "les mouvements"], ["sensible", "le regard"], ["cadre", "RGPD, AI Act"]] },
  proteger: { text: "Les bonnes pratiques : traiter les données sensibles sur l’appareil (sur visionOS, l’application ne reçoit le regard qu’au moment d’un clic), ne transmettre que ce qui est nécessaire, demander des permissions explicites, ajouter du bruit aux données de mouvement partagées, et ne jamais masquer un danger réel.", facts: () => [["visionOS", "regard privé par défaut"], ["Android XR, Quest", "permissions caméra, mains, yeux"], ["entreprise", "gestion des appareils"]] }
};
