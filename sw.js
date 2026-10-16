const CACHE='bigode-funileiro-firebase-v1-2';
const FILES=['./','./index.html','./manifest.webmanifest','./assets/logo.jpeg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
