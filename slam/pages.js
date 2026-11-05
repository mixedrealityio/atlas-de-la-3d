// Chapitre 23 : SLAM et ancrage spatial (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 23 · VR et AR",
  "title": "SLAM",
  "sub": "localisation et cartographie simultanées",
  "body": "<p class=\"lede\">Pour savoir où il est, le casque a besoin d’une carte ; pour faire la carte, il doit savoir où il est. Le <b>SLAM</b> résout les deux en même temps.</p>\n    <p>Le SLAM <b>visuel-inertiel</b> (VIO) combine caméras et centrale inertielle : c’est ce que font Quest, Vision Pro, HoloLens, ARKit et ARCore. La carte produite sert aussi à détecter les sols, les murs et les meubles (compréhension de scène).</p>",
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
  "lit": "carte",
  "look": {},
  "scene": "carte",
  "fig": ""
 },
 {
  "kicker": "23.1",
  "title": "Points d’intérêt",
  "sub": "ORB, SIFT, FAST, et réseaux",
  "body": "<p class=\"lede\">Un point d’intérêt est un endroit de l’image facile à retrouver : un coin, une tache, un motif. On calcule un <b>descripteur</b> (une signature) autour de lui.</p>\n    <table class=\"data\"><tr><th>méthode</th><th>type</th><th>usage</th></tr><tr><td>SIFT</td><td>descripteur flottant, invariant à l’échelle</td><td>photogrammétrie, précision</td></tr><tr><td>ORB</td><td>FAST + descripteur binaire</td><td>temps réel, SLAM</td></tr><tr><td>SuperPoint, SuperGlue, LightGlue</td><td>réseaux de neurones</td><td>robustesse aux changements d’éclairage</td></tr></table>\n    <p>Les surfaces sans texture (mur blanc, verre, obscurité) sont les ennemies du SLAM : peu de points, suivi perdu. Les capteurs de profondeur et l’éclairage infrarouge aident.</p>",
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
  "lit": "etapes",
  "look": {},
  "scene": "etapes",
  "fig": ""
 },
 {
  "kicker": "23.2",
  "title": "Images clés et optimisation",
  "sub": "keyframes, ajustement de faisceaux",
  "body": "<p class=\"lede\">On ne garde pas toutes les images : seulement les <b>images clés</b>, quand le point de vue a assez changé.</p>\n    <p>L’<b>ajustement de faisceaux</b> (bundle adjustment) modifie ensemble les poses des images clés et les positions des points pour minimiser l’<b>erreur de reprojection</b> (l’écart entre où un point devrait apparaître et où il est vu). La <b>fermeture de boucle</b> reconnaît un lieu déjà visité (sacs de mots visuels, DBoW) et redistribue la dérive accumulée sur toute la trajectoire.</p>",
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
  "lit": "etapes",
  "look": {},
  "scene": "etapes",
  "fig": ""
 },
 {
  "kicker": "23.3",
  "title": "La carte spatiale",
  "sub": "points, maillage, plans",
  "body": "<p class=\"lede\">En plus du nuage de points, les casques reconstruisent un <b>maillage</b> de la pièce (spatial mapping de HoloLens, scene mesh du Quest et de visionOS) à partir de la profondeur.</p>\n    <p>Ce maillage sert à l’<b>occlusion</b> (un hologramme passe derrière un vrai meuble), à la <b>physique</b> (une balle virtuelle rebondit sur le vrai sol) et au placement. Des modèles de compréhension de scène étiquettent les murs, tables, portes et fenêtres.</p>",
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
  "lit": "carte",
  "look": {},
  "scene": "carte",
  "fig": ""
 },
 {
  "kicker": "23.4",
  "title": "Les ancres spatiales",
  "sub": "rester attaché au réel",
  "body": "<p class=\"lede\">Une <b>ancre</b> est un repère qu’on attache à un endroit réel. Le système la maintient à jour par rapport aux points de la carte qui l’entourent.</p>\n    <ul class=\"rules\"><li>Utiliser <b>plusieurs ancres</b> proches de leurs contenus plutôt qu’un seul repère pour toute une usine : l’erreur augmente avec la distance à l’ancre.</li><li>Les ancres sont <b>persistantes</b> : sauvegardées, elles sont retrouvées au prochain lancement si l’appareil reconnaît le lieu.</li><li>Elles peuvent être <b>partagées</b> entre appareils, par le réseau ou un service en nuage (ARCore Cloud Anchors, Meta Shared Spatial Anchors). Azure Spatial Anchors, longtemps utilisé avec HoloLens, a été arrêté en novembre 2024.</li><li>Standard : l’extension OpenXR des ancres spatiales (XR_MSFT_spatial_anchor, puis extensions multi-fabricants).</li></ul>",
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
  "lit": "ancres",
  "look": {},
  "scene": "ancres",
  "fig": ""
 },
 {
  "kicker": "23.5",
  "title": "Ancrer sans le nuage",
  "sub": "QR codes et repères connus",
  "body": "<p class=\"lede\">Quand le réseau est interdit (usine, défense, hôpital) ou quand plusieurs appareils doivent partager exactement le même repère, on ancre sur des <b>repères physiques</b> : un QR code, un marqueur ArUco ou AprilTag, ou un objet dont on connaît le modèle 3D.</p>\n    <p>Le marqueur donne une pose 6DoF absolue (chapitre 24) : on y place une ancre locale, et le SLAM prend le relais. Tous les appareils qui voient le même marqueur partagent le même repère, sans aucun service externe.</p>",
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
  "lit": "ancres",
  "look": {},
  "scene": "ancres",
  "fig": ""
 }
];
export const PLATES = {
  carte: { text: "Le casque (noir) se déplace et repère des points d’intérêt dans ses images (ils deviennent bleus quand ils sont cartographiés). Il garde des images clés (gris) et estime en même temps sa propre trajectoire et la position 3D des points. Les lignes bleues relient le casque aux points qu’il voit.", facts: () => [["entrées", "caméras + IMU"], ["sortie", "pose + carte de points"], ["méthode", "VIO + optimisation"]] },
  ancres: { text: "Une ancre est un repère 3D attaché aux points de la carte qui l’entourent. Quand la carte se corrige (fermeture de boucle), l’ancre suit les points voisins : l’hologramme qu’elle porte reste à sa place sur la vraie table, au lieu de suivre une coordonnée globale qui a bougé.", facts: () => [["ancre", "pose + points voisins"], ["persistance", "sauvegardée sur l’appareil"], ["partage", "entre appareils"]] },
  etapes: { text: "Chaque image est réduite à quelques centaines de points remarquables, appariés avec ceux de l’image précédente et de la carte. La pose se déduit de ces correspondances et des mesures inertielles. Régulièrement, on ajoute une image clé et l’on optimise toute la carte (ajustement de faisceaux). Reconnaître un lieu déjà visité ferme la boucle et efface la dérive.", facts: () => [["exemples", "ORB-SLAM3, VINS"], ["dérive", "corrigée par les boucles"], ["carte", "points + images clés"]] }
};
