const CACHE_NAME = 'allen-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/Navbar.jsx',
  '/src/Hero.jsx',
  '/src/About.jsx',
  '/src/Skills.jsx',
  '/src/Experience.jsx',
  '/src/Education.jsx',
  '/src/Contact.jsx',
  '/my photo.png',
  '/comptia/a+ logo.png',
  '/comptia/network +.jpg',
  '/comptia/security+.png',
  '/comptia/google it.png',
  '/Resume_Allen_Varughese.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 