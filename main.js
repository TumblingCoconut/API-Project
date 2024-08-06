// Define elements
let enterBtn = document.getElementById("enterBtn");
let cityInput = document.getElementById("cityInput");
let weather = document.getElementById("weather");
let city = document.getElementById("city");
let precipitation = document.getElementById("precipitation");
let temperature = document.getElementById("temp");
let tempHigh = document.getElementById("tempHigh");
let tempLow = document.getElementById("tempLow");
let feels_like = document.getElementById("feelsLikeTemp");
let humidity = document.getElementById("humidity");
let visibility = document.getElementById("visibility");
let uv_index = document.getElementById("uv");


function getWeather(event){
    // Prevent reloading
    event.preventDefault();

    // Convert inputted city into url format
    let convertedComponent = `${encodeURIComponent(cityInput.value)}`
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${convertedComponent}?unitGroup=us&include=current&key=V2MF6BZZYM8ZQ4ES9SRE2GRLD&contentType=json`, {
        "method": "GET",
        "headers": {
        }
        })
        .then(function(response){
        console.log(response);
        return response.json();
        })
        .then(function(myJson) {
        console.log(myJson);

        // Update webpage
        city.innerText = `Location: ${myJson.address}`;
        weather.innerText = myJson.currentConditions.conditions;
        temperature.innerText = `Temperature: ${myJson.currentConditions.temp} °F`;
        tempHigh.innerText = `High: ${myJson.days[0].tempmax} °F`;
        tempLow.innerText = `Low: ${myJson.days[0].tempmin} °F`;
        feels_like.innerText = `Feels like: ${myJson.currentConditions.feelslike} °F`;
        humidity.innerText = `Humidity: ${myJson.currentConditions.humidity}%`;
        visibility.innerText = `Visbility: ${myJson.days[0].visibility} mi`;
        uv_index.innerText = `UV Index: ${myJson.days[0].uvindex} `;
        })
        .catch(err => {
            console.error(err);
        });
}

enterBtn.addEventListener("click", getWeather);