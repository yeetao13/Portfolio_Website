const getWeatherData = (city) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3505fe030ae32b99f507881b159dfcbb";
    fetch(url).then(response => response.json()).then(data => showWeatherData(data));

}

const searchCity = () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city);
}


const showWeatherData = (weatherData) => {
    header = document.getElementById('city-name');
    weatherType = document.getElementById('weather-type');
    temp = document.getElementById('temp');
    maxTemp = document.getElementById('min-temp');
    minTemp = document.getElementById('max-temp');
    
    header.innerText = weatherData.name;
    weatherType.innerText = weatherData.weather[0].main;
    temp.innerText = (weatherData.main.temp - 273.15).toFixed(2);
    maxTemp.innerText = (weatherData.main.temp_min - 273.15).toFixed(2);
    minTemp.innerText = (weatherData.main.temp_max - 273.15).toFixed(2);
}