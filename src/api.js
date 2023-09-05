async function getWeatherData(location) {
    const apiKey = 'e768ec92b4d440e1a4c25011232908';
    const endPoint = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const response = await fetch(endPoint);

        if(!response.ok) {
            throw new Error('Network response not ok')
        } 

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('There was an error!', error);
        throw error
    }
};

export { getWeatherData }