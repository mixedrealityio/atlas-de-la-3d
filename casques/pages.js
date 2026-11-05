// Chapitre 19 : Anatomie des casques VR et AR (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 19 · VR et AR",
  "title": "Anatomie des casques",
  "sub": "VR, AR, MR, XR",
  "body": "<p class=\"lede\">La <b>réalité virtuelle</b> (VR) remplace le monde ; la <b>réalité augmentée</b> (AR) y ajoute des objets ; la <b>réalité mixte</b> (MR) les fait interagir (un hologramme posé sur une vraie table, caché par un vrai mur). <b>XR</b> désigne l’ensemble.</p>\n    <p>Deux architectures matérielles s’opposent : voir le réel en <b>vidéo</b> (VST) ou à <b>travers le verre</b> (OST). Le reste du casque est commun : suivi de position, puissance de calcul, affichage stéréoscopique.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "dedans",
  "look": {},
  "scene": "dedans",
  "fig": ""
 },
 {
  "kicker": "19.1",
  "title": "Le vidéo see-through",
  "sub": "VST",
  "body": "<ul class=\"rules\"><li>Le réel est <b>reconstruit</b> : les caméras ne sont pas à la place des yeux, il faut reprojeter l’image avec la profondeur pour éviter les déformations.</li><li><b>Occlusion</b> parfaite : on peut cacher le réel, l’assombrir, ajouter du noir.</li><li>Latence du passthrough : ≈ 10 à 15 ms, gérée par une puce dédiée (Apple R1) ou un chemin matériel court.</li><li>Limites : netteté et dynamique des caméras, champ de vision, isolement si l’image s’arrête.</li></ul>\n    <p class=\"lede\">Casques : Meta Quest 3, Apple Vision Pro, Samsung Galaxy XR (Android XR), Pico 4 Ultra, Varjo XR-4.</p>",
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
  "lit": "vst",
  "look": {},
  "scene": "vst",
  "fig": ""
 },
 {
  "kicker": "19.2",
  "title": "L’optical see-through",
  "sub": "OST",
  "body": "<ul class=\"rules\"><li>Le réel reste <b>vu directement</b> : aucune latence, sécurité, vue du regard des autres.</li><li>Le virtuel est <b>additif</b> : il ne peut pas être plus sombre que le réel derrière lui ; pas de noir, objets semi-transparents.</li><li>Champ de vision limité (30 à 70°) par le guide d’ondes.</li><li>Calage géométrique exigeant : l’hologramme doit coller au réel malgré la position variable de l’œil (chapitre 24).</li></ul>\n    <p class=\"lede\">Appareils : Microsoft HoloLens 2 (industrie, défense), Magic Leap 2 (avec un boîtier de calcul relié par câble), lunettes AR (Xreal, Vuzix, Meta Orion en prototype).</p>",
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
  "lit": "ostc",
  "look": {},
  "scene": "ostc",
  "fig": ""
 },
 {
  "kicker": "19.3",
  "title": "Calcul embarqué ou déporté",
  "sub": "autonome, compute pack, PC",
  "body": "<table class=\"data\"><tr><th>architecture</th><th>exemple</th><th>compromis</th></tr><tr><td>tout dans le casque</td><td>Quest 3, HoloLens 2</td><td>simple, mais chaleur et poids sur la tête</td></tr><tr><td>boîtier de calcul (compute pack)</td><td>Magic Leap 2, Vision Pro (batterie)</td><td>casque plus léger, câble</td></tr><tr><td>PC relié</td><td>Varjo, PC VR, Quest Link</td><td>puissance maximale, câble ou Wi-Fi</td></tr><tr><td>calcul à distance</td><td>Azure Remote Rendering, CloudXR</td><td>dépend du réseau</td></tr></table>\n    <p class=\"lede\">Le boîtier du Magic Leap 2 contient un processeur AMD (4 cœurs Zen 2, graphique RDNA 2) et 16 Go de mémoire : assez pour faire tourner de petits modèles d’IA en local (chapitre 54).</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "dedans",
  "look": {},
  "scene": "dedans",
  "fig": ""
 },
 {
  "kicker": "19.4",
  "title": "Les plateformes logicielles",
  "sub": "visionOS, Horizon OS, Android XR, Windows",
  "body": "<ul class=\"rules\"><li><b>Android XR</b> (Google, Samsung, Qualcomm) : Android adapté aux casques et lunettes, applications Android en fenêtres, OpenXR, Unity, Jetpack XR et WebXR dans Chrome (chapitre 58).</li><li><b>Horizon OS</b> (Meta Quest) : base Android, OpenXR, Meta XR SDK.</li><li><b>visionOS</b> (Apple) : RealityKit, ARKit, SwiftUI ; WebXR dans Safari.</li><li><b>Windows Mixed Reality</b> (HoloLens 2) : OpenXR, Mixed Reality Toolkit (MRTK) ; l’appareil n’est plus développé mais reste utilisé dans l’industrie.</li></ul>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "dedans",
  "look": {},
  "scene": "dedans",
  "fig": ""
 }
];
export const PLATES = {
  vst: { text: "Le monde réel est filmé par des caméras frontales, l’image est corrigée et mélangée au virtuel par la puce, puis affichée sur des écrans opaques derrière des lentilles. C’est le principe du Quest 3, de l’Apple Vision Pro et des casques Android XR comme le Galaxy XR.", facts: () => [["réel", "vu en vidéo"], ["avantage", "occlusion parfaite, noir possible"], ["défaut", "latence et netteté du réel"]] },
  ostc: { text: "Le réel est vu directement à travers une lame transparente ; le virtuel est ajouté par un projecteur et un guide d’ondes. C’est le principe des HoloLens 2, Magic Leap 2 et des lunettes AR. Le réel n’a ni latence ni perte de netteté, mais le virtuel ne peut qu’ajouter de la lumière.", facts: () => [["réel", "direct, sans latence"], ["virtuel", "lumière ajoutée"], ["défaut", "pas de noir, champ étroit"]] },
  dedans: { text: "Un casque autonome est un téléphone spécialisé : une puce mobile (Qualcomm Snapdragon XR, Apple M et R1), des écrans et des optiques, une dizaine de caméras pour le suivi et le passthrough, une centrale inertielle, souvent un capteur de profondeur et des caméras infrarouges pour les yeux, des haut-parleurs et une batterie.", facts: () => [["puces", "Snapdragon XR2, Apple M2/M5 + R1"], ["caméras", "4 à 12"], ["poids", "≈ 500 à 650 g"]] }
};
