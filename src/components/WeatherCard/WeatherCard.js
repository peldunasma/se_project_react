import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";


const WeatherCard = ({day, type, weatherTemp = '', currentTemperatureUnit}) => {
    //filters through each item
    const imageSrc = weatherOptions.filter((i) => {
        return i.day === day && i.type === type
    });

    const imageSrcUrl = imageSrc[0].url || "";

    return(
        <section className='weather' id='weather'>
          <div className="weather_info">{weatherTemp}°{currentTemperatureUnit}</div>
          <img src={imageSrcUrl} alt={type} className="weather_image" /> 
        </section>
    )
}

export default WeatherCard;