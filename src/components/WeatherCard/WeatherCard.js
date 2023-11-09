import "./WeatherCard.css";

const weatherOptions = [
    {url: require("../../images/Day/Sunny.svg").default, day: true, type: "sunny"},
    {url: require("../../images/Day/Storm.svg").default, day: true, type: "storm"},
    {url: require("../../images/Day/Snow.svg").default, day: true, type: "snow"},
    {url: require("../../images/Day/Rain.svg").default, day: true, type: "rain"},
    {url: require("../../images/Day/Fog.svg").default, day: true, type: "fog"},
    {url: require("../../images/Day/Cloudy.svg").default, day: true, type: "cloudy"},
    {url: require("../../images/Night/Cloudy.svg").default, day: false, type: "cloudy"},
    {url: require("../../images/Night/Fog.svg").default, day: false, type: "fog"},
    {url: require("../../images/Night/Storm.svg").default, day: false, type: "storm"},
    {url: require("../../images/Night/Snow.svg").default, day: false, type: "snow"},
    {url: require("../../images/Night/Rain.svg").default, day: false, type: "rain"},
    {url: require("../../images/Night/Sunny.svg").default, day: false, type: "sunny"},
];


const WeatherCard = ({day, type, weatherTemp = ''}) => {
    //filters through each item
    const imageSrc = weatherOptions.filter((i) => {
        return i.day === day && i.type === type
    });

    const imageSrcUrl = imageSrc[0].url || "";

    return(
        <section className='weather' id='weather'>
          <div className="weather_info">{weatherTemp}°F</div>
          <img src={imageSrcUrl} alt="Current forcast" className="weather_image" /> 
        </section>
    )
}

export default WeatherCard;