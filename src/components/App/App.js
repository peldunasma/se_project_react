import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForcastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext"; 

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0)
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview")
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  }

  
  useEffect(() => {
  getForcastWeather().then((data) => {
    const temperature = parseWeatherData(data);
    setTemp(temperature)
  })
  .catch(console.error);
}, []);

console.log(currentTemperatureUnit);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}} >
      <Header onCreateModal={handleCreateModal} temp={temp} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} temp={temp} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label className="modal__label">
            Name
            <input 
            className="modal__input"
            type="text" 
            name="name"
            minLength="1" 
            maxLength="30"
            placeholder="Name" 
            />
          </label>
          <label className="modal__label">
            Image
            <input 
            className="modal__input"
            type="url" 
            name="link" 
            minLength="1" 
            maxLength="30" 
            placeholder="Image URL"
            />
          </label>
          <p className="modal__radio-button-title">
            Select the weather type
            </p>
          <div>
            <label>
            <div>
              <input 
              className="modal__radio-button"
              type="radio" 
              name="testing"
              id="hot" 
              value="hot" 
              />
              <label>
                Hot
              </label>
            </div>
            </label>
            <label>
            <div>
              <input
              className="modal__radio-button"
               type="radio" 
               name="testing"
               id="warm" 
               value="warm" />
              <label>
                Warm
              </label>
            </div>
            </label>
            <label>
            <div>
              <input
              className="modal__radio-button"
               type="radio" 
               name="testing"
               id="cold" 
               value="cold" />
              <label>
                Cold
                </label>
            </div>
            </label>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />}
    </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
