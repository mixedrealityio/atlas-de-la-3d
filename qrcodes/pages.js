// Chapitre 79 : Les QR codes de positionnement sur HoloLens (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 79 · VR et AR",
  "title": "Pourquoi des QR codes de positionnement",
  "sub": "un repère absolu, hors ligne, partagé",
  "body": "<p class=\"lede\">Le SLAM du casque (chapitre 23) sait où il est par rapport à là où il a démarré, mais pas par rapport à l’avion, à la machine ou au plan du bâtiment. Un QR code posé à un endroit <b>connu</b> fait le lien : le casque mesure la pose du code, et l’on en déduit où placer la maquette numérique.</p>\n    <ul class=\"rules\"><li><b>Hors ligne</b> : la détection se fait sur l’appareil, sans réseau ni service en nuage.</li><li><b>Partagé</b> : tous les casques qui lisent le même code partagent le même repère.</li><li><b>Identifié</b> : le texte du code dit <i>quel</i> repère on lit, donc quelle transformation appliquer.</li><li>HoloLens 2 détecte les QR codes en natif (chapitre 24) : on obtient une position, une orientation, une taille mesurée et le contenu du code.</li></ul>",
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
  "lit": "modules",
  "look": {},
  "scene": "modules",
  "fig": ""
 },
 {
  "kicker": "79.1",
  "title": "Ce que HoloLens 2 sait lire",
  "sub": "versions prises en charge et pièges",
  "body": "<table class=\"data\"><tr><th></th><th>pris en charge</th></tr><tr><td>QR code</td><td>versions 1 à 10 ; 11 à 20 sans garantie ; 21 et plus : non</td></tr><tr><td>Micro QR</td><td>M1 à M4</td></tr><tr><td>encodages</td><td>tous (numérique, alphanumérique, octets, kanji)</td></tr><tr><td>non pris en charge</td><td>modules ronds ou décorés, couleurs inversées (blanc sur noir), image en miroir, logo, codes en plusieurs morceaux (structured append)</td></tr><tr><td>surface</td><td>plane uniquement : pas de code courbé sur un tube ou un fuselage</td></tr></table>\n    <ul class=\"rules\"><li>Côté minimal : <b>5 cm</b> ; en dessous, aucune détection.</li><li>L’application doit déclarer la capacité <b>webcam</b> : la détection utilise la caméra photo/vidéo.</li><li>Les codes détectés sont gérés par le système, pas par l’application : au lancement, elle reçoit aussi les codes vus avant. On <b>ignore les détections antérieures au lancement</b> (horodatage de la dernière détection).</li><li>Le système retient au plus 100 codes sur 10 minutes ; un redémarrage efface l’historique, et un code revu devient un nouvel objet.</li></ul>",
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
  "lit": "modules",
  "look": {},
  "scene": "modules",
  "fig": ""
 },
 {
  "kicker": "79.2",
  "title": "Les motifs de repérage",
  "sub": "le rapport 1 : 1 : 3 : 1 : 1",
  "body": "<p class=\"lede\">Les trois grands carrés des coins sont les <b>motifs de repérage</b> (finder patterns). Chacun fait 7 × 7 modules : un anneau noir d’un module, un anneau blanc d’un module, un carré noir de 3 × 3 modules.</p>\n    <p>Un détecteur balaie l’image ligne par ligne et cherche une suite <b>noir, blanc, noir, blanc, noir</b> de longueurs proportionnelles à <b>1 : 1 : 3 : 1 : 1</b>. Ce rapport ne dépend ni de la distance (tout grandit ensemble) ni de l’angle de la ligne : c’est une signature rare dans une image ordinaire, et rapide à chercher. Il la confirme ensuite dans le sens vertical et en diagonale.</p>\n    <ul class=\"rules\"><li><b>Trois motifs</b>, aux coins haut gauche, haut droit et bas gauche : leur disposition donne l’orientation du code, le quatrième coin, vide, lève l’ambiguïté de rotation.</li><li>Les motifs sont entourés d’un <b>séparateur blanc</b> d’un module, puis de la zone de silence : sans ce blanc, le dernier « 1 » noir se confond avec ce qui l’entoure et le rapport disparaît.</li><li>Des <b>lignes de synchronisation</b> (modules alternés noir, blanc) relient les motifs et donnent le pas de la grille ; à partir de la version 2, un petit <b>motif d’alignement</b> (5 × 5) aide à corriger la perspective.</li><li>Le <b>Micro QR</b> n’a qu’un motif de repérage : il est plus compact, mais il compte davantage sur sa zone de silence (2 modules) et sur ses lignes de synchronisation.</li><li>Pour le positionnement, ces motifs donnent aussi les <b>coins</b> du code, à partir desquels le PnP calcule la pose (chapitre 24).</li></ul>",
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
  "lit": "reperage",
  "look": {},
  "scene": "reperage",
  "fig": ""
 },
 {
  "kicker": "79.3",
  "title": "Modules, version et longueur de l’identifiant",
  "sub": "le nombre de modules dépend de ce qu’on écrit",
  "body": "<p class=\"lede\">Une version v de QR code compte <b>17 + 4v</b> modules de côté : 21 pour la version 1, 25 pour la 2, 33 pour la 4, 57 pour la 10. Le Micro QR va de 11 (M1) à 17 modules (M4), avec un seul motif de repérage.</p>\n    <table class=\"data\"><tr><th>version</th><th>modules</th><th>alphanumérique L / M</th><th>octets M</th></tr><tr><td>Micro M3</td><td>15</td><td>14 / 11</td><td>7</td></tr><tr><td>Micro M4</td><td>17</td><td>21 / 18</td><td>13</td></tr><tr><td>1</td><td>21</td><td>25 / 20</td><td>14</td></tr><tr><td>2</td><td>25</td><td>47 / 38</td><td>26</td></tr><tr><td>3</td><td>29</td><td>77 / 61</td><td>42</td></tr><tr><td>4</td><td>33</td><td>114 / 90</td><td>62</td></tr></table>\n    <ul class=\"rules\"><li><b>Un identifiant court</b> (« A320-ST04-P2 ») tient dans une version 1. Une URL, du JSON ou des coordonnées font monter la version pour rien : on range la pose dans une table de l’application, indexée par l’identifiant.</li><li><b>Majuscules</b> : le mode alphanumérique n’accepte que 0–9, A–Z, l’espace et $ % * + - . / : ; une seule minuscule fait passer en mode octets, moins dense (14 caractères au lieu de 20 en version 1-M).</li><li><b>Correction d’erreur</b> : L (7 %), M (15 %), Q (25 %), H (30 %). Plus elle est forte, plus il faut de modules pour le même texte. M convient en intérieur propre ; Q si le code risque d’être sali ou rayé.</li><li>Pour un même côté imprimé, une version 1 a des modules 1,6 fois plus gros qu’une version 4 : elle se lit 1,6 fois plus loin.</li></ul>",
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
  "lit": "modules",
  "look": {},
  "scene": "modules",
  "fig": ""
 },
 {
  "kicker": "79.4",
  "title": "La zone de silence",
  "sub": "la marge blanche fait partie du code",
  "body": "<p class=\"lede\">Autour du code, il faut une <b>zone de silence</b> : une marge blanche sans aucune impression, de <b>4 modules</b> de large sur chaque bord (2 modules pour un Micro QR). C’est elle qui permet au détecteur de trouver les bords des motifs de repérage.</p>\n    <div class=\"eq\">feuille utile = côté du code × (N + 8) / N</div>\n    <ul class=\"rules\"><li>Exemple : un code version 1 de 10 cm a des modules de 4,8 mm ; la marge fait 19 mm ; l’étiquette mesure au moins 13,8 cm.</li><li>Erreurs fréquentes : étiquette découpée au ras du code, cadre ou texte imprimé dans la marge, deux codes trop proches, code collé sur un support sombre ou à motif sans marge blanche propre.</li><li>Le texte lisible par l’humain (l’identifiant) se met <b>sous</b> la zone de silence, jamais dedans.</li></ul>",
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
  "lit": "modules",
  "look": {},
  "scene": "modules",
  "fig": ""
 },
 {
  "kicker": "79.5",
  "title": "Taille du code et distance de scan",
  "sub": "la portée suit la taille du module",
  "body": "<p class=\"lede\">Pour un code version 1, Microsoft donne une lecture entre 0,25 et 0,5 m environ pour 5 cm de côté, et entre 0,5 et 2 m environ pour 25 cm, avec une progression à peu près linéaire.</p>\n    <ul class=\"rules\"><li><b>Règle pratique (version 1)</b> : distance maximale ≈ 8 fois le côté. Lire à 1,2 m demande environ 15 cm de côté.</li><li><b>Ce qui compte, c’est le module</b> : à côté égal, une version 4 se lit à environ 64 % de la distance d’une version 1 (21 / 33). D’où l’intérêt d’un identifiant court, ou d’un Micro QR.</li><li><b>Trop près</b> aussi, la lecture échoue : le code et sa marge doivent tenir dans l’image de la caméra et être nets.</li><li><b>Angle</b> : rester à ± 45° de la face du code ; la rotation dans le plan (code penché) ne gêne pas.</li><li>Pour le <b>recalage</b>, même si le code se lit de loin, s’en approcher à 0,5–1 m : plus il occupe de pixels, plus la pose est précise.</li></ul>",
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
  "lit": "portee",
  "look": {},
  "scene": "portee",
  "fig": ""
 },
 {
  "kicker": "79.6",
  "title": "La précision du placement",
  "sub": "ce que mesure le casque, et ce qui s’ajoute",
  "body": "<p class=\"lede\">Microsoft annonce une taille mesurée à ± 1 % sur une seule image (± 1 mm pour un code de 10 cm) et une position qui fluctue d’environ ± 2,5 mm en détection continue. Hors de portée, l’hologramme ne tient plus que par la carte du SLAM.</p>\n    <table class=\"data\"><tr><th>source d’erreur</th><th>ordre de grandeur</th><th>parade</th></tr><tr><td>impression</td><td>quelques % si l’imprimante redimensionne</td><td>imprimer à 100 %, mesurer au réglet</td></tr><tr><td>pose du support</td><td>dépend du relevé</td><td>support rigide, position mesurée (station totale, tracker laser, gabarit à pions)</td></tr><tr><td>détection</td><td>± 2,5 mm</td><td>plusieurs détections, médiane</td></tr><tr><td>orientation</td><td>dixièmes de degré × distance</td><td>plusieurs codes, bras de levier court</td></tr><tr><td>dérive du SLAM</td><td>croît avec le temps et la distance</td><td>recaler souvent (chapitre 80)</td></tr><tr><td>affichage</td><td>position de l’œil</td><td>calibration des yeux (chapitre 24)</td></tr></table>\n    <p>L’orientation est le point faible : un code petit et plan donne un angle moins sûr que sa position. 0,5° d’erreur, c’est 9 mm à 1 m et 26 mm à 3 m. Il faut donc placer le code <b>près de la zone de travail</b>.</p>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "levier",
  "look": {},
  "scene": "levier",
  "fig": ""
 },
 {
  "kicker": "79.7",
  "title": "Plusieurs codes plutôt qu’un",
  "sub": "tirer l’orientation des positions",
  "body": "<p class=\"lede\">Puisque les positions sont plus sûres que les orientations, on pose <b>trois codes ou plus</b>, bien écartés et si possible pas dans le même plan, et l’on calcule le repère à partir de leurs seules positions (ajustement aux moindres carrés, méthode de Kabsch ou d’Umeyama).</p>\n    <ul class=\"rules\"><li>Avec des codes espacés de 2 m et ± 2,5 mm sur chacun, l’erreur d’angle tombe vers 0,1°.</li><li>Les <b>résidus</b> de l’ajustement servent de contrôle : un code décollé ou déplacé se voit tout de suite.</li><li>Dans Unity, les World Locking Tools de Microsoft (outil libre) font ce travail avec des « space pins » : on épingle plusieurs points réels et l’outil répartit la correction.</li><li>Chaque contenu s’attache au code ou à l’ancre <b>le plus proche</b>, pas à un repère unique pour tout le hangar.</li></ul>",
  "cam": {
   "target": [
    120,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "levier",
  "look": {},
  "scene": "levier",
  "fig": ""
 },
 {
  "kicker": "79.8",
  "title": "Imprimer et poser",
  "sub": "les bonnes pratiques physiques",
  "body": "<ul class=\"rules\"><li><b>Noir mat sur blanc mat</b>, papier ou vinyle mat ; pas de plastification brillante, qui renvoie les reflets des éclairages.</li><li><b>Support rigide et plan</b> (plaque composite aluminium, par exemple) : un code gondolé ou courbé fausse la pose.</li><li><b>Impression à 100 %</b> (désactiver « ajuster à la page »), puis mesure du côté au réglet ou au pied à coulisse.</li><li><b>Pas de logo</b>, pas de couleurs inversées, pas de modules arrondis.</li><li><b>Position relevée</b> dans le repère de la pièce ou de l’avion, avec un relevé de métrologie ou un gabarit à pions ; noter aussi quel point du code sert d’origine.</li><li><b>Contraste</b> : sous un éclairage dur ou sur fond sombre, le code paraît délavé ; Microsoft suggère alors d’imprimer un blanc légèrement grisé.</li><li><b>Identifiant unique</b>, imprimé en clair sous le code, et un registre des codes posés.</li></ul>",
  "cam": {
   "target": [
    200,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "procedure",
  "look": {},
  "scene": "procedure",
  "fig": ""
 },
 {
  "kicker": "79.9",
  "title": "Scanner malgré les reflets",
  "sub": "solutions de terrain en atelier et en hangar",
  "body": "<p class=\"lede\">En aéronautique, les reflets viennent de partout : peaux d’aluminium nu ou plaqué, bords d’attaque polis, primaires et peintures satinées, sols époxy, projecteurs LED des hangars et verrières. Le code devient illisible quand le reflet d’une source arrive dans la caméra, ou quand un éclairage dur le délave.</p>\n    <ul class=\"rules\"><li><b>Incliner le support</b> de 10 à 20° sur une équerre réglable : le reflet d’un projecteur est dévié du double de l’angle, hors de la caméra (on reste dans les ± 45° de lecture).</li><li><b>Une visière</b> au-dessus du code (comme sur un panneau solaire ou un afficheur extérieur) coupe la lumière des projecteurs du plafond.</li><li><b>Des matériaux mats</b> : vinyle mat, surplastification antireflet, ou plaque d’aluminium anodisé mat gravée pour les codes permanents ; jamais de film brillant, jamais de matériau rétroréfléchissant.</li><li><b>Ne jamais coller le code sur la peau de l’avion</b> ou sur une pièce polie : le poser sur un support mat (outillage, plateforme d’accès), avec une marge blanche plus large que la zone de silence.</li><li><b>Un code de secours</b> orienté différemment (sur une autre face du gabarit) : sous un éclairage donné, au moins l’un des deux échappe au reflet.</li><li><b>Changer de point de vue</b> : scanner de biais (20 à 30°) plutôt que pile en face, où l’on voit le reflet de sa propre zone d’éclairage.</li><li><b>Agir sur la lumière au poste</b> : éteindre ou réorienter le projecteur fautif pendant le recalage, ajouter un diffuseur, ou un panneau LED diffus portatif.</li><li><b>Fond sombre ou contre-jour</b> (porte de hangar ouverte) : le code paraît délavé ; un blanc légèrement grisé à l’impression aide (recommandation Microsoft).</li><li><b>Entretenir</b> : un film d’huile, de poussière de perçage ou de liquide hydraulique rend une surface mate brillante ; nettoyer ou remplacer les codes à intervalle fixe.</li><li><b>Valider sur place</b> : faire le tour des postes, aux heures de l’équipe (lumière du jour comprise), et tester chaque code depuis la position réelle de l’opérateur.</li></ul>",
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
  "lit": "reflet",
  "look": {},
  "scene": "reflet",
  "fig": ""
 },
 {
  "kicker": "79.10",
  "title": "Le scan côté application",
  "sub": "filtrer, ancrer, vérifier",
  "body": "<ul class=\"rules\"><li>S’approcher à 0,5–1 m, face au code (± 45°), et rester immobile une à deux secondes.</li><li>Accumuler plusieurs détections, prendre la <b>médiane</b>, rejeter celles qui s’écartent de plus de quelques millimètres.</li><li>Ignorer les détections antérieures au lancement de l’application.</li><li>Créer une <b>ancre spatiale locale</b> à la pose retenue (chapitre 23), puis cesser de dépendre du code.</li><li>Afficher un retour clair : contour sur le code, couleur « recalé » ; puis faire pointer un <b>point de contrôle</b> réel pour valider.</li><li><b>Conventions</b> : selon le réglage d’Unity, l’origine du code est son coin supérieur gauche ou son centre, et Unity (main gauche) ne range pas les axes comme OpenXR (main droite). On le vérifie une fois avec une impression et un décalage connu.</li></ul>",
  "cam": {
   "target": [
    200,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "procedure",
  "look": {},
  "scene": "procedure",
  "fig": ""
 }
];
export const PLATES = {
  modules: { text: "Un QR code est une grille de N × N modules, entourée d’une zone de silence blanche (ici en pointillés). Les trois carrés rouges sont les motifs de repérage ; le Micro QR, montré en dernier, n’en a qu’un. Plus l’identifiant est long, plus la version monte et plus la grille a de modules : pour un même côté imprimé, chaque module devient plus petit, donc plus difficile à lire de loin.", facts: () => [["QR version v", "17 + 4v modules"], ["Micro QR M1–M4", "11 à 17 modules"], ["zone de silence", "4 modules (Micro QR : 2)"]] },
  reperage: { text: "Chaque motif de repérage est un carré noir de 7 × 7 modules, un anneau blanc, puis un carré noir de 3 × 3 modules. Toute ligne qui passe par son centre, quel que soit l’angle et la distance, rencontre noir, blanc, noir, blanc, noir dans les proportions 1 : 1 : 3 : 1 : 1.", facts: () => [["motif", "7 × 7 modules"], ["profil", "1 : 1 : 3 : 1 : 1"], ["nombre", "3 (Micro QR : 1)"]] },
  portee: { text: "Microsoft indique, pour un QR code version 1, une lecture entre 0,25 et 0,5 m environ pour 5 cm de côté, et entre 0,5 et 2 m environ pour 25 cm ; la portée croît à peu près linéairement entre les deux. Les tailles intermédiaires sont interpolées. En dessous de 5 cm, le code n’est pas détecté.", facts: () => [["5 cm", "≈ 0,25 à 0,5 m"], ["25 cm", "≈ 0,5 à 2 m"], ["angle", "± 45° hors du plan"]] },
  levier: { text: "La position d’un QR code est mesurée bien plus précisément que son orientation. Or toute erreur d’angle est multipliée par la distance entre le code et l’hologramme : 1° d’erreur décale de 17 mm à 1 m, et de 87 mm à 5 m.", facts: () => [["1° à 1 m", "17 mm"], ["1° à 3 m", "52 mm"], ["0,3° à 3 m", "16 mm"]] },
  reflet: { text: "Sous une plastification brillante ou sur un support métallique, le code se comporte comme un miroir : si le reflet d’un projecteur du hangar arrive dans la caméra, le code est délavé. Incliner le support de quelques degrés dévie le reflet du double de cet angle, hors de la caméra.", facts: () => [["incliner de θ", "reflet dévié de 2θ"], ["10 à 20°", "souvent suffisant"], ["limite", "rester à ± 45° de la face"]] },
  procedure: { text: "Le QR code n’est qu’un maillon. La précision finale dépend de l’impression, de la pose du support, du scan, du filtrage, de l’ancrage et d’une vérification sur un point réel connu.", facts: () => [["détection", "± 2,5 mm (Microsoft)"], ["taille", "± 1 % sur une image"], ["à garder", "un point de contrôle"]] }
};
