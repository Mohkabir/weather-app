let FILES_TO_CACHE = [
  "offline.js"
];

//Remove previous cached data from disk.

self.addEventListener("activate",function(e){
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
})

// install event to tell the service worker to pre-cache the offline page:

self.addEventListener("install",function(e){
  e.waitUntil(
    caches.open("cache").then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});



