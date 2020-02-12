

let btnGetUserLocation = document.getElementById("btnUserLocationData")

btnGetUserLocation.addEventListener('click',function(){

  if('geolocation' in navigator) {
    console.log("geolocation is supported..")

    navigator.geolocation.getCurrentPosition(function(position){

      console.log(position)

    })

  }


})
