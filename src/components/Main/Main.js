import { defaultClothingItems } from "../../util/constants";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useMemo } from "react";
import "./Main.css";

function Main({weatherTemp, onSelectCard}) {
  const weatherType = useMemo (() => {
    if (weatherTemp >= 86) {
      return 'hot';
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return 'warm';
    } else if (weatherTemp <= 65) {
      return 'cold';
    }
  }, [weatherTemp]);

  const filterCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType
  })

    return <main className="main">
      <WeatherCard day={false} type="sunny" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card_items">
          {filterCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>;
  }

  export default Main