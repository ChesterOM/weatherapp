function renderWeather(weatherData) {
    const {
        location: {
            country,
            name
        },
        current: {
            condition,
            feelslike_c,
            wind_kph,
            humidity,
            temp_c
        }
    } = weatherData;

const conditionElem = document.querySelector('.condition');
const cityElem = document.querySelector('.city');
const countryElem = document.querySelector('.country');
const tempElem = document.querySelector('.temp');
const feelsLikeElem = document.querySelector('.feels-like');
const windElem = document.querySelector('.wind');
const humidityElem = document.querySelector('.humidity');

conditionElem.textContent = condition;
cityElem.textContent = name;
countryElem.textContent = country;
tempElem.innerHTML = `${temp_c}<span class="degree">°C</span>`;
feelsLikeElem.innerHTML = `Feels like: ${feelslike_c}<span class="degree">°C</span>`;
windElem.textContent = `Wind Speed: ${wind_kph}KPH`;
humidityElem.textContent = `Humidity: ${humidity}%`;
}

export { renderWeather };