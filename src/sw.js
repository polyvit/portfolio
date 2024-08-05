const CacheKey = "cache-portfolio";

// Functions

const initCache = () => {
  return caches.open(CacheKey).then(
    (cache) => {
      return cache.addAll(["./index.html"]);
    },
    (error) => {
      console.log(error);
    }
  );
};
const deleteCaches = () => {
  caches.keys().then((keyList) => {
    return Promise.all(
      keyList.map((key) => {
        if (key !== CacheKey) {
          return caches.delete(key);
        }
      })
    );
  });
};
const tryNetwork = (req, timeout) => {
  console.log("req", req);
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(req).then((res) => {
      clearTimeout(timeoutId);
      const responseClone = res.clone();
      caches.open(CacheKey).then((cache) => {
        cache.put(req, responseClone);
      });
      resolve(res);
    });
  }, reject);
};
const getFromCache = (req) => {
  console.log("Getting data from cache");
  return caches.open(CacheKey).then((cache) => {
    return cache.match(req).then((result) => {
      return result || Promise.reject("No matches");
    });
  });
};

// Event Handlers

self.addEventListener("install", (e) => {
  e.waitUntil(initCache());
});

self.addEventListener("activate", (e) => {
  e.waitUntil(deleteCaches());
});

self.addEventListener("fetch", (e) => {
  console.log("try network");
  e.respondWith(
    tryNetwork(e.request, 400).catch(() => getFromCache(e.request))
  );
});
