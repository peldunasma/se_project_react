import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ selectedCard, onClose, deleteCard }) => {

  const currentUser = useContext(CurrentUserContext);
  // Checking if the current user is the owner of the current clothing item
  const isOwn = selectedCard.owner === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
const itemDeleteButton = (
  `modal__item-delete-button ${isOwn ? 'modal__item-delete-button_visible' : 'modal__item-delete-button_hidden'}`
);

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
            className={itemDeleteButton}
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
