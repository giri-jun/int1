self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('site-cache').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'image 1.png',
        'image 2.png',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
