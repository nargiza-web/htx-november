// register a service worker
if("serviceWorker" in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
  .then((registration) => {
    console.log("Server worker has been registered",registration.scope)
  }).catch((error) => {
    console.log("Error occured in registering Service worker", error)
  })
}
