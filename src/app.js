import { getWeatherData } from "./api";
import { renderWeather } from './render';

const weatherForm = document.getElementById('weatherForm');

const weatherFormListener = () => { 
    weatherForm.addEventListener('submit', async (event) => {
        event.preventDefault()  ;

        const location = document.getElementById('locationInput').value;
        if (!location) return

        try {
            const weatherData = await getWeatherData(location);
            renderWeather(weatherData);
        } catch (error) {
            console.log('Error fetching weather:', error);
        }
    })
};


export { weatherFormListener }
