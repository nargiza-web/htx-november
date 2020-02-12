
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(){
    console.log("Service Worker Registered...")
  })
}

// installing the service worker
self.addEventListener('install',function(event){
  console.log("Service working install", event)
  // activate the service worker without waiting
  self.skipWaiting()
})

// activate the service worker event
self.addEventListener('activate',function(event){
  console.log("Service Worker activated...",event)
})

// fetch event handler
self.addEventListener('fetch',function(event){
  
})
