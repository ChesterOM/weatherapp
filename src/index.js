import './style.css'
import { getWeatherData } from './api'

(async () => {
  try {
      const data = await getWeatherData('christchurch');
      console.log(data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
})();