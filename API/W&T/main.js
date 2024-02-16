// main.js

async function getTimeAndWeather() {
  const apiKey = '8ac5c4d57ba6a4b3dfcf622700447b1e'; 
  const cityInput = document.getElementById('city');
  const cityName = cityInput.value;

  try {
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    const weatherData = await weatherResponse.json();
    const temperature = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;
    const infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML = `<h2>Current Time and Weather in ${cityName}:</h2>
                               <p>Temperature: ${temperature} K</p>
                               <p>Weather: ${weatherDescription}</p>`;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function getThisTime() {
  const cityInput = document.getElementById('timeofcity');
  const cityName = cityInput.value;

  try {
    const timeResponse = await fetch(`http://worldtimeapi.org/api/timezone/${cityName}`);
    const timeData = await timeResponse.json();
    const currentTime = new Date(timeData.datetime);
    const infoContainer = document.getElementById('info');
    infoContainer.innerHTML = `<h2>Current Time in ${cityName}:</h2>
                               <p>Time: ${currentTime.toLocaleString()}</p>`;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
