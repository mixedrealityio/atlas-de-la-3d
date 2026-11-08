// Chapitre 80 : Éviter la dérive en environnement brillant ou monotone (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 80 · VR et AR",
  "title": "Pourquoi les hologrammes dérivent",
  "sub": "le suivi a besoin de points stables",
  "body": "<p class=\"lede\">HoloLens 2 suit la tête avec <b>quatre caméras en niveaux de gris</b> et une centrale inertielle ; une caméra de profondeur construit le maillage de la pièce. Le SLAM (chapitre 23) repère des points d’intérêt (coins, taches, textures) et suppose qu’ils sont <b>immobiles</b>.</p>\n    <p>S’il voit trop peu de points, l’erreur s’accumule : c’est la <b>dérive</b>. S’il voit des points trompeurs, il peut aussi se relocaliser au mauvais endroit : c’est un <b>saut</b>. Dans les deux cas, l’hologramme n’est plus sur l’objet réel.</p>",
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
  "lit": "hangar",
  "look": {},
  "scene": "hangar",
  "fig": ""
 },
 {
  "kicker": "80.1",
  "title": "Ce qui piège le suivi",
  "sub": "six familles d’environnements difficiles",
  "body": "<table class=\"data\"><tr><th>environnement</th><th>effet sur le suivi</th></tr><tr><td>surfaces brillantes : aluminium, peinture laquée, sol époxy, verrières</td><td>les reflets bougent avec la tête : faux points, appariements instables</td></tr><tr><td>surfaces monotones : fuselage blanc, murs unis, bâches</td><td>presque aucun point d’intérêt</td></tr><tr><td>motifs répétés : cadres, lisses, rivets, rangées de sièges, rayonnages</td><td>le casque confond deux endroits identiques : sauts de relocalisation</td></tr><tr><td>grands volumes : hangar haut</td><td>points lointains, peu de parallaxe, maillage incomplet</td></tr><tr><td>scène qui bouge : avion déplacé, nacelles, chariots, personnes</td><td>la carte enregistrée ne correspond plus au réel</td></tr><tr><td>lumière : contre-jour, zones sombres sous la voilure, éclairage qui scintille</td><td>images saturées, bruitées ou instables</td></tr></table>",
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
  "lit": "hangar",
  "look": {},
  "scene": "hangar",
  "fig": ""
 },
 {
  "kicker": "80.2",
  "title": "Le cas de l’aéronautique",
  "sub": "tous les pièges à la fois",
  "body": "<p class=\"lede\">En assemblage, en maintenance ou en contrôle, on cumule un fuselage lisse et clair, de l’aluminium nu ou une peinture uniforme, des motifs répétés (cadres et rivets à pas régulier), un hangar haut et un avion qui peut être déplacé entre deux équipes.</p>\n    <ul class=\"rules\"><li><b>Corps étrangers (FOD)</b> : tout objet ajouté près de l’avion doit être autorisé, inventorié et fixé ; pas d’autocollants posés à la volée sur la structure.</li><li><b>Tolérances</b> : les ajustements aéronautiques se jouent au dixième de millimètre, hors de portée d’un casque. La réalité mixte <b>guide</b> (où, quoi, dans quel ordre) ; la mesure reste au tracker laser, au gabarit ou à la projection laser.</li><li>L’objectif réaliste : un hologramme stable à quelques millimètres près autour du poste de travail, vérifié sur des points de contrôle.</li></ul>",
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
  "lit": "hangar",
  "look": {},
  "scene": "hangar",
  "fig": ""
 },
 {
  "kicker": "80.3",
  "title": "Enrichir l’environnement",
  "sub": "donner aux caméras de quoi s’accrocher",
  "body": "<ul class=\"rules\"><li><b>Panneaux texturés</b> : motifs aléatoires, contrastés, non répétitifs (un damier régulier piège autant qu’un mur uni), fixés aux murs, poteaux, échafaudages et outillages.</li><li><b>Tapis de sol texturés</b> dans les allées de travail.</li><li>Garder ces repères <b>dans le champ des caméras</b>, qui regardent aussi sur les côtés : ils servent même si l’on regarde le fuselage.</li><li><b>Masquer</b>, quand c’est autorisé, miroirs, vitres et surfaces très réfléchissantes (bâches ou protections mates déjà utilisées en production).</li><li><b>Figer le décor</b> : les repères ne bougent pas pendant la session ; un chariot ou une nacelle déplacés ne doivent pas porter de repère.</li></ul>",
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
  "lit": "hangarfix",
  "look": {},
  "scene": "hangarfix",
  "fig": ""
 },
 {
  "kicker": "80.4",
  "title": "Maîtriser la lumière",
  "sub": "diffuse, suffisante, constante",
  "body": "<ul class=\"rules\"><li>Un éclairage <b>diffus</b> limite les reflets mobiles ; éviter les projecteurs directs braqués vers le fuselage et le soleil rasant.</li><li>Un niveau <b>suffisant</b> sous la voilure et dans les zones d’ombre : les caméras de suivi ont besoin de texture visible.</li><li>Un éclairage <b>constant</b> : portes de hangar ouvertes ou fermées, la scène change ; cartographier dans les conditions d’utilisation.</li><li>Éviter les éclairages qui <b>scintillent</b> (vieux tubes, variateurs de LED).</li><li>Pour les QR codes eux-mêmes (reflets des projecteurs sur le support), voir les solutions de terrain du chapitre 79.</li></ul>",
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
  "lit": "hangarfix",
  "look": {},
  "scene": "hangarfix",
  "fig": ""
 },
 {
  "kicker": "80.5",
  "title": "Le maillage 3D vu par le casque",
  "sub": "plans, arêtes et trous",
  "body": "<p class=\"lede\">Le suivi de la tête (SLAM) utilise des <b>points visuels</b> ; à côté, la <b>caméra de profondeur</b> construit un <b>maillage spatial</b> de l’environnement (spatial mapping), et la compréhension de scène en extrait des <b>plans</b> étiquetés (sol, murs, plateformes). Ce maillage sert à l’occlusion, à la physique et au placement, pas à la métrologie.</p>\n    <ul class=\"rules\"><li><b>Résolution</b> : de l’ordre du centimètre (densité de triangles réglable) ; les petites faces, les bords de lisses et les perçages disparaissent.</li><li><b>Arêtes arrondies</b> : là où deux plans se rencontrent (le montant et la semelle d’un gabarit, la jonction voilure-fuselage), le maillage fait un congé de quelques centimètres.</li><li><b>Trous et fantômes</b> : l’aluminium nu, les bords d’attaque polis, les verrières renvoient mal l’infrarouge ; les surfaces noires (joints, pneus, composite brut) l’absorbent. Le maillage y est absent ou décalé.</li><li><b>Volumes profonds</b> (case de train, soute, baie avionique) : beaucoup de faces vues en biais, des zones d’ombre pour le capteur, un maillage incomplet.</li><li><b>Plans extraits</b> : fiables au centre des grandes faces (le plateau d’un gabarit, le plancher de cabine, le sol du hangar), où la moyenne de nombreux points donne une bonne normale.</li><li>Règle : ne jamais « aimanter » un hologramme de précision sur le maillage ; s’en servir pour cacher, poser grossièrement ou vérifier qu’un plan est bien horizontal.</li></ul>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": -25,
   "el": 30,
   "dist": 26,
   "auto": true
  },
  "lit": "plans",
  "look": {},
  "scene": "plans",
  "fig": ""
 },
 {
  "kicker": "80.6",
  "title": "Placer les QR codes sur des surfaces à plusieurs plans",
  "sub": "gabarits, plateformes, cases de train",
  "body": "<ul class=\"rules\"><li><b>À plat, sur un seul plan</b> : jamais à cheval sur une arête, un pli, un rayon de raccordement ou une surface galbée (fuselage, bord d’attaque) ; la zone de silence doit être sur le même plan que le code.</li><li><b>Loin des arêtes</b> : au moins la largeur du code avec sa marge, là où le support est rigide et plan.</li><li><b>Plusieurs plans non parallèles</b> : un code sur la semelle d’un gabarit, un sur son montant, un sur son plateau. Des codes dans des plans différents contraignent bien mieux l’orientation que trois codes alignés sur un même mur.</li><li><b>Encadrer la zone de travail</b> : le contenu doit se trouver à l’intérieur du triangle (ou du volume) formé par les codes ; on interpole l’erreur au lieu de l’extrapoler.</li><li><b>Sur des références connues</b> : les faces des gabarits et outillages sont déjà relevées au tracker laser (boules et alésages de référence) ; y fixer les codes, ou les poser par des adaptateurs dans des trous de référence existants, donne leur position dans le repère avion sans nouvelle mesure.</li><li><b>Sur l’avion lui-même</b> : uniquement par des adaptateurs approuvés, inventoriés, avec flamme « remove before flight », dans les règles de lutte contre les corps étrangers.</li><li><b>Dans le champ naturel de l’opérateur</b> : à hauteur de travail, face à lui, non masqués par les pièces, les outils ou les plateformes ; pas sur une trappe, un capot ou une partie mobile du gabarit.</li><li><b>Dans une case de train ou une baie</b> : un code par paroi accessible, à 0,5–1 m de la zone de travail, plutôt qu’un grand code à l’entrée.</li><li><b>Écart entre codes</b> : au moins un code et sa marge entre deux codes, et des identifiants différents ; même orientation (« haut » du code vers le haut) pour éviter les erreurs de saisie dans la table.</li></ul>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": -30,
   "el": 34,
   "dist": 26,
   "auto": true
  },
  "lit": "plansqr",
  "look": {},
  "scene": "plansqr",
  "fig": ""
 },
 {
  "kicker": "80.7",
  "title": "Recaler souvent sur des repères connus",
  "sub": "un QR code par poste",
  "body": "<p class=\"lede\">Les QR codes de positionnement (chapitre 79) bornent la dérive : à chaque nouveau scan, l’erreur repart presque de zéro.</p>\n    <ul class=\"rules\"><li>Poser les codes sur des <b>supports rigides relevés</b> dans le repère avion : pieds de référence, gabarits, outillages, adaptateurs sur des points de référence de la structure.</li><li><b>Un code par poste de travail</b>, rescanné au début de chaque tâche, et après toute perte de suivi.</li><li><b>Plusieurs codes</b> pour calculer le repère par moindres carrés, et ancrer chaque contenu au code le plus proche.</li><li>Si l’avion ou l’outillage est déplacé : nouveau recalage complet.</li></ul>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "courbe",
  "look": {},
  "scene": "courbe",
  "fig": ""
 },
 {
  "kicker": "80.8",
  "title": "La procédure de l’opérateur",
  "sub": "des gestes qui aident le casque",
  "body": "<ul class=\"rules\"><li><b>Cartographier d’abord</b> : faire le tour de la zone lentement, en regardant les parties texturées, à plusieurs hauteurs.</li><li><b>Mouvements de tête lents</b> ; ne pas fixer de près une grande surface unie.</li><li><b>Rescanner</b> le code du poste au début de chaque tâche, puis vérifier un point de contrôle.</li><li>Après une perte de suivi ou un redémarrage (qui efface l’historique des codes) : <b>recalage obligatoire</b>.</li><li>Signaler toute dérive visible : c’est une donnée pour améliorer l’aménagement.</li></ul>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "courbe",
  "look": {},
  "scene": "courbe",
  "fig": ""
 },
 {
  "kicker": "80.9",
  "title": "Surveiller et refuser l’erreur",
  "sub": "côté application",
  "body": "<ul class=\"rules\"><li>Lire l’<b>état du suivi</b> (suivi normal, limité, perdu) du casque et des codes ; en suivi limité, <b>griser ou masquer</b> les hologrammes plutôt que de les montrer faux.</li><li><b>Détecter les sauts</b> : quand un code est revu, comparer sa pose à celle de l’ancre ; au-delà d’un seuil, alerter et proposer un recalage.</li><li>Garder les <b>ancres proches</b> de leur contenu (quelques mètres au plus) ; les World Locking Tools aident à répartir les corrections.</li><li><b>Journaliser</b> les écarts mesurés à chaque recalage : on voit quels postes dérivent, et pourquoi.</li></ul>",
  "cam": {
   "target": [
    160,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "courbe",
  "look": {},
  "scene": "courbe",
  "fig": ""
 },
 {
  "kicker": "80.10",
  "title": "Valider avant chaque geste critique",
  "sub": "le budget d’erreur décide de l’outil",
  "body": "<table class=\"data\"><tr><th>tâche</th><th>tolérance typique</th><th>casque seul ?</th></tr><tr><td>repérer une zone, un connecteur, une étiquette</td><td>centimètres</td><td>oui, avec recalage</td></tr><tr><td>positionner un support, une bride, un faisceau</td><td>quelques millimètres</td><td>oui, code proche + point de contrôle</td></tr><tr><td>percer, ajuster, contrôler une cote</td><td>dixièmes de millimètre</td><td>non : gabarit, tracker laser, projection laser</td></tr></table>\n    <p class=\"lede\">Un <b>point de contrôle</b> (un perçage de référence, une cible) où doit tomber une mire virtuelle permet de vérifier l’écart avant d’agir. Au-delà du seuil, on recale.</p>",
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
  "lit": "hangarfix",
  "look": {},
  "scene": "hangarfix",
  "fig": ""
 },
 {
  "kicker": "80.11",
  "title": "Quand le casque ne suffit plus",
  "sub": "d’autres moyens de suivi",
  "body": "<ul class=\"rules\"><li><b>Suivi externe</b> : caméras de capture de mouvement ou tracker laser qui suivent le casque depuis la pièce ; précis et sans dérive, mais coûteux et fixe.</li><li><b>Suivi par modèle CAO</b> (chapitre 24) : reconnaître l’objet à ses contours ; utile, mais lui aussi gêné par le brillant et l’uniforme.</li><li><b>Projection laser</b> : dessiner directement sur la pièce (drapage des composites, perçages), sans casque.</li><li>En pratique, on combine : le casque pour guider et documenter, la métrologie pour les cotes.</li></ul>",
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
  "lit": "hangarfix",
  "look": {},
  "scene": "hangarfix",
  "fig": ""
 }
];
export const PLATES = {
  hangar: { text: "Le casque se localise grâce à des points stables vus par ses caméras. Le long d’un fuselage blanc et brillant, devant un mur uni, il n’en voit presque pas, et les reflets fournissent de faux points qui bougent avec la tête : l’erreur s’accumule et l’hologramme glisse (scène illustrative).", facts: () => [["caméras de suivi", "4, en niveaux de gris"], ["besoin", "points texturés et immobiles"], ["piège", "reflets, aplats, répétitions"]] },
  hangarfix: { text: "Des panneaux à motif aléatoire au mur, un tapis texturé au sol et des QR codes sur des pieds de référence dont la position est mesurée : le casque voit assez de points stables, et chaque passage devant un code remet l’erreur à zéro.", facts: () => [["textures", "aléatoires, contrastées, fixes"], ["QR codes", "sur supports relevés"], ["résultat", "écart maintenu sous la tolérance"]] },
  plans: { text: "Le casque reconstruit un maillage à partir de sa caméra de profondeur. Sur un gabarit d’assemblage fait de plans nets, ce maillage arrondit les arêtes, se troue sur l’aluminium nu, et n’est précis qu’à quelques centimètres près. Les plans extraits du maillage sont plus stables au centre des faces. Les QR codes se posent à plat, un par plan, sur des plans non parallèles et loin des arêtes.", facts: () => [["maillage", "≈ cm, arêtes arrondies"], ["trous", "métal nu, noir, verre"], ["QR codes", "un par plan, loin des arêtes"]] },
  plansqr: { text: "Sur le gabarit, un code à plat sur la semelle, un sur le montant, un sur le plateau : trois plans non parallèles qui encadrent la zone de travail. Le code rouge, plié sur l’arête, est à proscrire : il n’est plan ni pour le détecteur ni pour le calcul de pose.", facts: () => [["à plat", "sur un seul plan"], ["écart aux arêtes", "≥ code + marge"], ["répartition", "encadrer la zone de travail"]] },
  courbe: { text: "Sans recalage, l’erreur de position grandit avec le temps et la distance parcourue, d’autant plus vite que l’environnement est pauvre. En rescannant un QR code à chaque poste, on la ramène régulièrement près de zéro et on la garde sous la tolérance.", facts: () => [["sans recalage", "l’erreur s’accumule"], ["avec recalage", "dents de scie"], ["règle", "un code par poste de travail"]] }
};
