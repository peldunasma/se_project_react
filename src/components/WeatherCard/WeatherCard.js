const weatherOptions = [
    {url: require("../../images/Day/Sunny.svg").default, day: true, type: "sunny"},
    {url: require("../../images/Day/Cloudy.svg").default, day: true, type: "cloudy"},
    {url: require("../../images/Night/Cloudy.svg").default, day: false, type: "cloudy"},
    {url: require("../../images/Night/Sunny.svg").default, day: false, type: "sunny"},
];


const WeatherCard = ({day, type, weatherTemp = ''}) => {
    console.log('weather card');
    //filters through each item
    const imageSrc = weatherOptions.filter((i) => {
        console.log(i)
        return i.day === day && i.type === type
    });
    console.log(imageSrc)
    console.log(imageSrc[0].url)

    const imageSrcUrl = imageSrc[0].url || "";
    return(
        <section className='weather' id='weather'>
          <div className="weather_info">{weatherTemp}</div>
          <img src={imageSrcUrl} className="weather_image" /> 
        </section>
    )
}

export default WeatherCard;