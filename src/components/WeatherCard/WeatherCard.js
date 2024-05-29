import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const WeatherCard = ({day, type, weatherTemp = ''}) => {
    const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
    //filters through each item
    const imageSrc = weatherOptions.filter((item) => {
        return item.day === day && item.type === type
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