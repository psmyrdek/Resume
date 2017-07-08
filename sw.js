var CACHE_NAME = 'resume-cache';
var urlsToCache = [
  '/',
  '/app/dist/js/lib-scripts.min.js',
  '/app/src/js/data/projects.js',
  '/app/dist/js/app-scripts.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});