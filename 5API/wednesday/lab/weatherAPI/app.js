const displayHouston = document.querySelector(".display-Houston")
const textBox = document.getElementById("textBox")
const searchBtn = document.getElementById("searchBtn")
const searchResult = document.getElementById("searchResult")
const apiKey = "f4f8b3cfd775486017f990d9e7d5895a"

// fetch("http://api.openweathermap.org/data/2.5/weather?q=houston,uk&appid=f4f8b3cfd775486017f990d9e7d5895a&units=imperial")
// .then(response => response.json())
// .then(result => {
  function displayCurrentLocation(result){
  let displayonWeb =`<h1>${result.name}</h1>
                      <div>Pressure: ${result.main.pressure}</div>
                      <div>Max-Temp:${result.main.temp_max}</div>
                      <div>Min-Temp:${result.main.temp_min}</div>`
  displayHouston.innerHTML = displayonWeb;
}

async function searchCity(city){
  let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f4f8b3cfd775486017f990d9e7d5895a&units=imperial`)
  let weather = await response.json()
  //console.log(weather);
  displayOnWeb(weather) 
}

searchBtn.addEventListener("click", function(){
  let city = textBox.value;
  searchCity(city); 
})

function displayOnWeb(param){
  let value = `<h3>Weather in ${param.name}:</h3>
              <div>Main weather: ${param.weather[0].main}</div>
              <div>Pressure: ${param.main.pressure}</div>
              <div>Max-Temp:${param.main.temp_max}</div>
              <div>Min-Temp:${param.main.temp_min}</div>
              `
  searchResult.innerHTML = value
}

function getyourLocation(){
  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(params)
  console.log("hello")
  }
}
getyourLocation();

function params(position){
  let mylatitude = position.coords.latitude
  let mylongitude = position.coords.longitude
  console.log(mylatitude);
  geoLocation(mylongitude, mylatitude);
}

async function geoLocation(longitude, latitude){
  let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${apiKey}&units=imperial`)
  let newResponse = await response.json();
  displayCurrentLocation(newResponse)
}

