//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const longitude = 10.99;
const latitude = 44.34;
const APIkey = "65bd70c77b2834525bfd81480ec0c5fc";


export const getForcastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
        return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
    const main = data.main; 
    const temperature = main && main.temp;
    const weather = {
      temperature: { 
        F: Math.round(temperature),
        C: Math.round((temperature - 32) * 5/9)}}

    return weather;
};
