// script.js
const apiKey = '5e6ceae4b6becb47f5700619fabe7619 '; // Replace this with your OpenWeatherMap API key

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    getWeather(city);
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found!");
                return;
            }
            displayWeather(data);
        })
        .catch(error => {
            alert("Error fetching weather data.");
            console.error(error);
        });
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = `Weather in ${data.name}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weatherDescription').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
