import React, {useState} from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("")
  const [imageUrl, setUrl] = useState("")
  const [weather, setWeatherType] = useState("");
  
  const handleNameChange =(e) => {
    setName(e.target.value)
  }

  const handleUrlChange =(e) => {
    setUrl(e.target.value)
  }

  const handleWeatherType = (e) => {
    setWeatherType(e.target.value);
  };
  
  const handleSubmit =(e) => {
    e.preventDefault();
    onAddItem({name, imageUrl, weather})
  }
  
    return (
    <ModalWithForm 
    title="New Garment" 
    onClose={handleCloseModal} 
    isOpen={isOpen} 
    onSubmit={handleSubmit}>
      
    <label className="modal__label">
      Name
      <input
        className="modal__input"
        type="text"
        name="name"
        minLength="1"
        maxLength="30"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
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
        value={imageUrl}
        onChange={handleUrlChange}
      />
    </label>
    <p className="modal__radio-button-title">Select the weather type</p>
    <div>
      <label>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            name="weather"
            id="hot"
            value="hot"
            onChange={handleWeatherType}
          />
          <label>Hot</label>
        </div>
      </label>
      <label>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            name="weather"
            id="warm"
            value="warm"
            onChange={handleWeatherType}
          />
          <label>Warm</label>
        </div>
      </label>
      <label>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            name="weather"
            id="cold"
            value="cold"
            onChange={handleWeatherType}
          />
          <label>Cold</label>
        </div>
      </label>
    </div>
  </ModalWithForm>
  )
};

export default AddItemModal
