import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
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
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__item-description">
          <p className="modal__item-name">{selectedCard.name}</p>
          <div className="modal__item-weather">
            Weather: {selectedCard.weather}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
