const weatherOptions = [
    { url: ("../images/Day/Sunny.svg").default, day: true, type: "sunny"},
    {url: ("../images/Day/Cloudy.svg").default, day: true, type: "cloudy"},
    {url: ("../images/Night/Cloudy.svg").default, day: false, type: "cloudy"},
    {url: ("../images/Night/Sunny.svg").default, day: false, type: "sunny"},
];


const WeatherCard = ({day, type}) => {
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
          <div className="weather_info">75F</div>
          <img src={imageSrcUrl} className="weather_image" /> 
        </section>
    )
}

export default WeatherCard;