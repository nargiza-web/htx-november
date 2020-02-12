
const CACHE_NAME = 'pwa-cache'
const CACHED_URLS = [
  '/',
  '/index.html',
  'site.css',
  '/logo.png'
]

self.addEventListener('install',(event) => {
  event.waitUntil(
    caches.open('pwa-cache').then((cache) => {
      //cache.add('/index.html')
      cache.addAll(CACHED_URLS)
    })
  )
})

self.addEventListener('fetch',(event) => {

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((response) => {
        if(response) {
          return response
        }
      })
    })
  )

})

/*
self.addEventListener('fetch',(event) => {

  if(event.request.url.includes('site.css')) {
    event.respondWith(
      new Response(
        'body { background-color: green; }',
        { headers: { 'Content-Type': 'text/css' }}
      )
    )
  } else if(event.request.url.includes('logo.png')) {
    event.respondWith(
      fetch('/flipped-logo.png')
    )
  }

}) */
