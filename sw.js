// Keeps the Bluetooth remote on the phone where the browser supports service workers (Chrome on Android; not Bluefy).
// Network first, so an updated page arrives whenever there's internet; the saved copy otherwise.
const CACHE = 'tv-remote-bt-v1';
const FILES = ['./', 'index.html', 'manifest.webmanifest'].map(f => new URL(f, self.registration.scope).href);

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('tv-remote-bt-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = e.request.url.split('#')[0].split('?')[0];
  if (e.request.method !== 'GET' || !FILES.includes(url)) return;
  const slow = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 2500));
  e.respondWith(
    Promise.race([fetch(e.request), slow])
      .then(r => {
        if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(url, copy)); }
        return r;
      })
      .catch(() => caches.match(url).then(hit => hit || Response.error()))
  );
});
