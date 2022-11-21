// const moment = require("./moment");

const DEFAULT_VALUE = '--'
const searchInput = document.querySelector('.search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature-child');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=44275199d562da75c65598859bcf003b&units=metric&lang=vi`)
    .then(async res => {
        const data = await res.json();
        console.log(data)
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
        weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`) || DEFAULT_VALUE;
        temperature.innerHTML =Math.round(data.main.temp) || DEFAULT_VALUE;

        sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:m') ||  DEFAULT_VALUE;
        sunset.innerHTML = moment.unix(data.sys.sunset).format('H:m') ||  DEFAULT_VALUE;
        humidity.innerHTML = `${data.main.humidity}%` || DEFAULT_VALUE;
        wind.innerHTML = `${Math.round(data.wind.speed * 3.6)}km/h`
    });
});
