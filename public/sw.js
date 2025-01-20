
const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/add-city",
  "/images/logo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

console.log("Service Worker Loaded");