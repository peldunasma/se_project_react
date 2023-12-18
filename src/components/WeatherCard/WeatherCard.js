import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext  from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({day, type, weatherTemp = '', CurrentTemperatureUnitContext}) => {
    //filters through each item
    const imageSrc = weatherOptions.filter((i) => {
        return i.day === day && i.type === type
    });

    const imageSrcUrl = imageSrc[0].url || "";

    return(
        <section className='weather' id='weather'>
          <div className="weather_info">{weatherTemp}°{CurrentTemperatureUnitContext}</div>
          <img src={imageSrcUrl} alt={type} className="weather_image" /> 
        </section>
    )
}

export default WeatherCard;