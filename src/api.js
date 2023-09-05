async function getWeatherData(location) {
    const apiKey = 'e768ec92b4d440e1a4c25011232908';
    const endPoint = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const response = await fetch(endPoint);

        if(!response.ok) {
            throw new Error('Network response not ok')
        } 

        const rawData = await response.json();
        return filterData(rawData);
    } catch (error) {
        console.log('There was an error!', error);
        throw error
    }
};



function filterData(rawData) {
    return{
        location: {
            country: rawData.location.country,
            localtime: rawData.location.localtime,
            name: rawData.location.name,
            region: rawData.location.region
        },
        current: {
            condition: rawData.current.condition.text,
            feelslike_c: rawData.current.feelslike_c,
            feelslike_f: rawData.current.feelslike_f,
            humidity: rawData.current.humidity,
            temp_c: rawData.current.temp_c,
            temp_f: rawData.current.temp_f,
            wind_kph: rawData.current.wind_kph,
            wind_mph: rawData.current.wind_mph
        }
    }
};

export { getWeatherData }