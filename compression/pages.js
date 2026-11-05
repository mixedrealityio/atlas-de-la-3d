// Chapitre 57 : Compression et transmission 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 57 · industrie et web",
  "title": "Compression et transmission",
  "sub": "la 3D est lourde",
  "body": "<p class=\"lede\">Un modèle 3D réaliste pèse vite des dizaines de mégaoctets, une scène scannée des gigaoctets. Pour le web, les casques autonomes et le streaming, il faut compresser la <b>géométrie</b>, les <b>textures</b> et parfois tout le <b>rendu</b>.</p>",
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
  "lit": "poids",
  "look": {},
  "scene": "poids",
  "fig": ""
 },
 {
  "kicker": "57.1",
  "title": "Compresser la géométrie",
  "sub": "Draco, meshopt, Corto",
  "body": "<ul class=\"rules\"><li><b>Draco</b> (Google) : quantification des positions, prédiction des sommets à partir de leurs voisins et codage entropique ; très compact, décodage par WebAssembly.</li><li><b>meshoptimizer</b> (extension EXT_meshopt_compression) : réordonne pour le cache GPU et compresse ; décodage très rapide.</li><li><b>Corto</b> (CNR Pise) : compression rapide de maillages et de nuages de points pour le web, utilisée dans 3DHOP.</li><li><b>Quantification</b> : stocker les positions sur 16 bits au lieu de 32 (KHR_mesh_quantization).</li><li>Nuages de points et gaussiennes : MPEG G-PCC, compression spécifique des splats (SPZ, formats compressés).</li></ul>",
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
  "lit": "poids",
  "look": {},
  "scene": "poids",
  "fig": ""
 },
 {
  "kicker": "57.2",
  "title": "Compresser les textures",
  "sub": "ASTC, BC7, Basis Universal",
  "body": "<table class=\"data\"><tr><th>format</th><th>plateforme</th><th>remarque</th></tr><tr><td>BC7</td><td>PC, consoles (DirectX, Vulkan)</td><td>8 bits par pixel, haute qualité</td></tr><tr><td>ASTC</td><td>mobiles, casques autonomes, Apple</td><td>taille de bloc variable : 8 à 0,9 bit/pixel</td></tr><tr><td>ETC2</td><td>OpenGL ES 3, Android</td><td>socle commun mobile</td></tr><tr><td>Basis Universal (ETC1S, UASTC)</td><td>toutes, via transcodage</td><td>dans KTX2, extension KHR_texture_basisu</td></tr></table>\n    <p class=\"lede\">Sur un Quest ou un Android XR, des textures ASTC au lieu de PNG divisent souvent la mémoire par quatre à huit et accélèrent le rendu (moins de bande passante).</p>",
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
  "lit": "tex",
  "look": {},
  "scene": "tex",
  "fig": ""
 },
 {
  "kicker": "57.3",
  "title": "Streaming et rendu à distance",
  "sub": "envoyer des pixels au lieu de la 3D",
  "body": "<p class=\"lede\">Pour les scènes trop lourdes pour le casque, deux stratégies :</p>\n    <ul class=\"rules\"><li><b>Streaming de géométrie</b> : tuiles hiérarchiques chargées selon la vue (3D Tiles, chapitre 51), progressives (d’abord grossier, puis fin).</li><li><b>Rendu à distance</b> : un serveur GPU rend la scène et envoie une vidéo compressée ; le casque reprojette localement pour masquer la latence du réseau (NVIDIA CloudXR, Azure Remote Rendering, Holographic Remoting, Quest Air Link).</li><li>Exigences : Wi-Fi 6/6E ou 5G, latence réseau faible, et reprojection locale (chapitre 18).</li></ul>",
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
  "lit": "tex",
  "look": {},
  "scene": "tex",
  "fig": ""
 }
];
export const PLATES = {
  poids: { text: "Ordre de grandeur pour un objet détaillé avec quatre textures 2K. La géométrie compressée par Draco ou meshopt devient très petite ; ce sont surtout les textures qui pèsent. En KTX2/Basis, elles restent compressées jusque dans la mémoire du GPU.", facts: () => [["géométrie", "× 5 à × 10 plus petite"], ["textures", "KTX2 : reste compressée en mémoire GPU"], ["format", "glTF + extensions"]] },
  tex: { text: "Un PNG est compact sur disque mais occupe tous ses pixels en mémoire GPU. Les formats de bloc (BC7, ASTC) sont décodés par le GPU lui-même, en lisant des blocs de 4 × 4 pixels : ils restent compressés en mémoire. Basis Universal stocke un format intermédiaire, transcodé au chargement vers celui que l’appareil sait lire.", facts: () => [["casques", "ASTC"], ["PC", "BC7"], ["universel", "Basis dans KTX2"]] }
};
