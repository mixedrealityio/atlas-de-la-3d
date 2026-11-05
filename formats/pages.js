// Chapitre 35 : Formats et fichiers 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 35 · capture",
  "title": "Formats et fichiers 3D",
  "sub": "échanger des scènes",
  "body": "<p class=\"lede\">Un fichier 3D peut contenir bien plus qu’une forme : hiérarchie d’objets, matériaux, textures, squelettes, animations, caméras, lumières, métadonnées.</p>\n    <p>Il n’y a pas de format universel : chacun est optimisé pour un usage (impression, édition, diffusion, production). Un pipeline 3D passe souvent par plusieurs formats.</p>",
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
  "lit": "formats",
  "look": {},
  "scene": "formats",
  "fig": ""
 },
 {
  "kicker": "35.1",
  "title": "glTF 2.0",
  "sub": "la diffusion et le temps réel",
  "body": "<ul class=\"rules\"><li>Conçu par le Khronos Group pour être <b>chargé vite</b> : les tampons binaires vont directement au GPU.</li><li>Matériaux <b>PBR</b> standardisés (chapitre 9) : le rendu est le même dans three.js, Babylon.js, Blender et les casques.</li><li><b>Extensions</b> : compression de géométrie (Draco, meshopt), textures compressées (KTX2/Basis, chapitre 57), matériaux avancés (transmission, vernis, iridescence).</li><li>Format natif de WebXR, de model-viewer, d’Android XR et de nombreux visualiseurs AR ; Apple utilise plutôt USDZ.</li></ul>",
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
  "lit": "gltf",
  "look": {},
  "scene": "gltf",
  "fig": ""
 },
 {
  "kicker": "35.2",
  "title": "USD",
  "sub": "Universal Scene Description",
  "body": "<p class=\"lede\">Créé par Pixar et désormais standardisé par l’<b>Alliance for OpenUSD</b>, USD décrit des scènes immenses par <b>composition</b> : des couches qui se superposent et se surchargent (un décorateur modifie l’éclairage sans toucher au modèle de l’animateur), des références et des variantes.</p>\n    <p>Il est au cœur des pipelines de cinéma, de NVIDIA Omniverse et des jumeaux numériques (chapitre 55). USDZ, sa version empaquetée, est le format AR d’Apple (Quick Look, visionOS).</p>",
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
  "lit": "formats",
  "look": {},
  "scene": "formats",
  "fig": ""
 },
 {
  "kicker": "35.3",
  "title": "FBX, OBJ, Alembic et les autres",
  "sub": "héritage et usages",
  "body": "<table class=\"data\"><tr><th>format</th><th>contenu</th><th>usage</th></tr><tr><td>OBJ</td><td>maillage, UV, normales, matériaux simples</td><td>échange basique</td></tr><tr><td>FBX</td><td>scène, squelette, animation</td><td>jeux, Maya, Unity, Unreal</td></tr><tr><td>Alembic</td><td>géométrie animée précalculée</td><td>effets spéciaux, simulation</td></tr><tr><td>STL, 3MF</td><td>triangles, couleurs (3MF)</td><td>impression 3D</td></tr><tr><td>PLY, E57, LAS</td><td>nuages de points</td><td>scan, LiDAR</td></tr></table>\n    <p class=\"lede\">Dans Blender, Fichier → Importer et Exporter donne accès à la plupart d’entre eux ; glTF et USD y sont pris en charge nativement.</p>",
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
  "lit": "formats",
  "look": {},
  "scene": "formats",
  "fig": ""
 }
];
export const PLATES = {
  formats: { text: "OBJ et STL ne stockent que la géométrie (et des matériaux simples pour OBJ). FBX transporte des scènes animées entre outils, mais sa spécification est fermée. glTF 2.0 est fait pour la diffusion et le temps réel (web, AR). USD organise de grandes scènes en couches pour les studios et les jumeaux numériques. Alembic stocke des animations précalculées.", facts: () => [["web, AR", "glTF / GLB"], ["studios", "USD"], ["impression", "STL, 3MF"]] },
  gltf: { text: "Un glTF est un fichier JSON qui décrit la scène, et des tampons binaires qui contiennent les sommets, les indices, les animations, prêts à être copiés tels quels dans la mémoire du GPU. La version GLB rassemble tout dans un seul fichier binaire.", facts: () => [["texte", ".gltf + .bin"], ["binaire", ".glb"], ["norme", "Khronos, ISO/IEC 12113"]] }
};
