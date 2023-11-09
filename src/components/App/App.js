import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForcastWeather, parseWeatherData } from "../../util/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0)

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onAddItem({ name, imageUrl, weather });
  // };
  
  useEffect(() => {
  getForcastWeather().then((data) => {
    const temperature = parseWeatherData(data);
    setTemp(temperature)
  });
}, []);

  return (
    <div>
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
            <div>
              <input 
              className="modal__radio-button"
              type="radio" 
              id="hot" 
              value="hot" 
              />
              <label>
                Hot
              </label>
            </div>
            <div>
              <input
              className="modal__radio-button"
               type="radio" 
               id="warm" 
               value="warm" />
              <label>
                Warm
              </label>
            </div>
            <div>
              <input
              className="modal__radio-button"
               type="radio" 
               id="cold" 
               value="cold" />
              <label>
                Cold
                </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
