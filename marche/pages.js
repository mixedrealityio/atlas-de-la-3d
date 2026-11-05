// Chapitre 71 : Les casques du marché (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 71 · VR et AR",
  "title": "Les casques du marché",
  "sub": "comment comparer",
  "body": "<p class=\"lede\">Comparer des casques, c’est comparer : la résolution par œil et le <b>PPD</b> (chapitre 14), le <b>champ de vision</b>, l’optique (Fresnel ou pancake), la fréquence, le poids, le passthrough, le suivi (mains, yeux), l’autonomie et surtout le <b>contenu</b> disponible.</p>\n    <p>Le marché se structure en deux pôles : l’autonome grand public et le casque spécialisé (PC, professionnel), avec une convergence vers la réalité mixte.</p>",
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
  "lit": "fov",
  "look": {},
  "scene": "fov",
  "fig": ""
 },
 {
  "kicker": "71.1",
  "title": "La réalité virtuelle",
  "sub": "autonome, PC, console",
  "body": "<table class=\"data\"><tr><th>casque</th><th>année</th><th>points clés</th></tr><tr><td>Meta Quest 3 / 3S</td><td>2023 / 2024</td><td>autonome, pancake (Quest 3), passthrough couleur, Snapdragon XR2 Gen 2</td></tr><tr><td>Valve Index</td><td>2019</td><td>PC VR, stations Lighthouse, référence des amateurs</td></tr><tr><td>PlayStation VR2</td><td>2023</td><td>OLED 2000 × 2040 par œil, eye tracking, PS5</td></tr><tr><td>Pico 4 Ultra</td><td>2024</td><td>autonome, hors États-Unis</td></tr><tr><td>Bigscreen Beyond</td><td>2023</td><td>PC VR de 127 g, micro-OLED, Lighthouse</td></tr></table>\n    <p class=\"lede\">Les casques PC restent les plus nets pour la simulation ; les autonomes dominent les ventes.</p>",
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
  "lit": "fov",
  "look": {},
  "scene": "fov",
  "fig": ""
 },
 {
  "kicker": "71.2",
  "title": "La réalité mixte et augmentée",
  "sub": "VST et OST",
  "body": "<table class=\"data\"><tr><th>casque</th><th>type</th><th>points clés</th></tr><tr><td>Apple Vision Pro</td><td>VST, 2024 (M5 en 2025)</td><td>micro-OLED ≈ 23 millions de pixels, eye tracking, visionOS</td></tr><tr><td>Samsung Galaxy XR</td><td>VST, 2025</td><td>Android XR, micro-OLED, Gemini</td></tr><tr><td>Varjo XR-4</td><td>VST, 2023</td><td>passthrough photoréaliste, simulation professionnelle</td></tr><tr><td>HoloLens 2</td><td>OST, 2019</td><td>guides d’ondes, ≈ 43° horizontal, industrie</td></tr><tr><td>Magic Leap 2</td><td>OST, 2022</td><td>≈ 70° diagonal, gradation dynamique, boîtier de calcul</td></tr><tr><td>Snap Spectacles</td><td>OST, 2024</td><td>lunettes AR autonomes pour créateurs</td></tr></table>\n    <p class=\"lede\">Tendance : le passthrough vidéo progresse au point de rivaliser avec l’optique pour beaucoup d’usages, tandis que les lunettes restent le graal (chapitre 77).</p>",
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
  "lit": "fov",
  "look": {},
  "scene": "fov",
  "fig": ""
 }
];
export const PLATES = {
  fov: { text: "Les casques à caméras (VST) offrent un champ proche de 100 à 110° ; les casques optiques (OST) restent bien en dessous, limités par leurs guides d’ondes. Valeurs indicatives (horizontales pour la VR, diagonales pour l’AR optique) : les mesures varient selon les sources et le réglage.", facts: () => [["vision humaine", "≈ 200° horizontal"], ["VR", "≈ 100 à 110°"], ["AR optique", "≈ 50 à 70° diagonal"]] }
};
