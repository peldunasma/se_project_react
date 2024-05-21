import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ selectedCard, onClose, deleteCard }) => {

  const currentUser = useContext(CurrentUserContext);

  return (
    <div className={`modal`}>
      <div className="modal__item-content">
        <button
          className="modal__item-close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal_item-img"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__item-description">
          <p className="modal__item-name">{selectedCard.name}</p>
          <div className="modal__item-weather">
            Weather: {selectedCard.weather}
          </div>
          <button
            className="modal__item-delete-button"
            type=" button"
            onClick={() => deleteCard(selectedCard)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
