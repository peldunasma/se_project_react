import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen, 
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? " modal__opened" : ""}`}>
      <div className="modal__content">
        <button 
        className="modal__close-button"
        type="button" 
        onClick={onClose}
        />
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
            </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
