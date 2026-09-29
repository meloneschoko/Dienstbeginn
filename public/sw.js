const SHELL_CACHE = "dienstbeginn-shell-v152";
// Keep downloaded media across text-only updates so offline images are retained.
const MEDIA_CACHE = "dienstbeginn-media-v23";
const SHELL_FILES = [
  "./",
  "./sackstich.webp",
  "./packplan/musterspind-waesche.webp",
  "./packplan/musterspind-bekleidung.webp",
  "./packplan/musterspind-ausruestung.webp",
  "./packplan/musterspind-gefechtsausruestung.webp",
  "./packplan/bettenbau-sollzustand.webp",
  "./packplan/feldanzug-taschenbelegung.webp",
  "./packplan/rucksack-faecher.webp",
  "./packplan/rucksack-packplan-1.webp",
  "./packplan/rucksack-packplan-2.webp",
  "./packplan/rucksack-packplan-3.webp",
  "./vorgesetztenverordnung-tabelle-zuschnitt.png",
  "./styles.css?v=150",
  "./app.js?v=150",
  "./military-order-config.js?v=150",
  "./leaderboard-storage.js?v=150",
  "./manifest.webmanifest?v=150",
  "./icon.svg?v=150",
  "./dienstbeginn-mark.svg?v=150",
  "./nord-sued-gitterlinie.svg",
  "./krawatte-schritte-1-zug.jpg",
  "./knoten-und-bunde.jpg",
  "./formaldienst-stiefel.png",
  "./feldjaeger-barettabzeichen.jpeg",
  "./cir-barettabzeichen.jpg",
  "./ksk-barettabzeichen.jpg",
  "./wappen-freigestellt.png",
  "./verpackungsplan-rucksack.png",
  "./meldeblock-vorderseite-nummeriert.png",
  "./meldeblock-rueckseite.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(SHELL_CACHE).then(cache => cache.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => ["dienstbeginn-", "dienststart-"].some(prefix => key.startsWith(prefix)) && ![SHELL_CACHE, MEDIA_CACHE].includes(key)).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(SHELL_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) await cache.put(request, response.clone());
    return response;
  } catch (_) {
    return (await cache.match(request)) || cache.match("./");
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok || response.type === "opaque") await cache.put(request, response.clone());
  return response;
}

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin === self.location.origin && url.pathname.startsWith("/api/")) return;
  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request, SHELL_CACHE));
    return;
  }

  if (["commons.wikimedia.org", "www.bundeswehr.de"].includes(url.hostname)) {
    event.respondWith(cacheFirst(request, MEDIA_CACHE));
  }
});

async function cacheRemoteMedia(urls) {
  const cache = await caches.open(MEDIA_CACHE);
  let cached = 0;
  let failed = 0;

  for (const url of urls) {
    try {
      const parsed = new URL(url);
      if (!["commons.wikimedia.org", "www.bundeswehr.de"].includes(parsed.hostname)) continue;
      const request = new Request(parsed.href, { mode: "no-cors", cache: "reload" });
      if (await cache.match(request)) {
        cached += 1;
        continue;
      }
      const response = await fetch(request);
      if (response.ok || response.type === "opaque") {
        await cache.put(request, response);
        cached += 1;
      } else {
        failed += 1;
      }
    } catch (_) {
      failed += 1;
    }
  }

  const clients = await self.clients.matchAll({ type: "window" });
  clients.forEach(client => client.postMessage({ type: "REMOTE_MEDIA_CACHED", cached, failed }));
}

self.addEventListener("message", event => {
  if (event.data?.type !== "CACHE_REMOTE_MEDIA" || !Array.isArray(event.data.urls)) return;
  event.waitUntil(cacheRemoteMedia([...new Set(event.data.urls)]));
});
