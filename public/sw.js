
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

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
          // اگر پاسخ کش شده موجود باشد، آن را برگردانید
          if (cachedResponse) {
              // در اینجا می‌توانید یک درخواست جدید برای بروزرسانی کش انجام دهید
              fetch(event.request).then((networkResponse) => {
                  // کش را بروزرسانی کنید
                  caches.open(CACHE_NAME).then((cache) => {
                      cache.put(event.request, networkResponse.clone());
                  });
              });
              return cachedResponse;
          }
          // اگر پاسخ کش شده موجود نباشد، از شبکه درخواست کنید
          return fetch(event.request).then((networkResponse) => {
              return caches.open(CACHE_NAME).then((cache) => {
                  // پاسخ شبکه را به کش اضافه کنید
                  cache.put(event.request, networkResponse.clone());
                  return networkResponse;
              });
          });
      })
  );
});

console.log("Service Worker Loaded");