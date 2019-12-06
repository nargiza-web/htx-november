// this file is for reference
// api key = 5dd1cb819afadeb6e2a910d9f80d05ee
// °F
const apiKey = "5dd1cb819afadeb6e2a910d9f80d05ee"
let city = document.getElementById("cityInput")
let cityButton = document.getElementById("submitButton")
let country = document.getElementById("countryInput")
let countryButton = document.getElementById("countryButton")
let output = document.getElementById("output")
let yourLocation = document.getElementById("locationWeatherButton")
cityButton.addEventListener("click", () => {
    output.innerHTML = ""
    async function getWeather() {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country}&APPID=${apiKey}&units=imperial`)
        let weather = await response.json()
                output.innerHTML = (
                    `
                    <div id="city">
                    <div id="cityName">
                        ${weather.name}
                        </div><br>
                        High: ${weather.main.temp_max}<br>
                        Low: ${weather.main.temp_min}<br>                
                        Pressure: ${weather.main.pressure}<br>
                    </div>
                    `
                )
    }
    getWeather()
})
yourLocation.addEventListener("click", () => {
    locationOutput.innerHTML = ""
    var options = {
        enableHighAccuracy: true,
        maximumAge: 0
      };
      function success(pos) {
        var crd = pos.coords;
        async function getWeatherHere() {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&APPID=${apiKey}&units=imperial`)
            let weather = await response.json()
                locationOutput.innerHTML = (
                    `
                    <div>
                        <div>
                            ${weather.name}
                        </div><br>
                        High: ${weather.main.temp_max}<br>
                        Low: ${weather.main.temp_min}<br>                
                        Pressure: ${weather.main.pressure}<br>
                    </div>
                    `
                )
            }
        getWeatherHere()
      }
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
      navigator.geolocation.getCurrentPosition(success, error, options);
})