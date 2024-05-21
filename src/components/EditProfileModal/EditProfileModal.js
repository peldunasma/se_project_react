import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ handleEditProfile, handleCloseModal, isOpen }) => {
    
    const currentUser = useContext(CurrentUserContext);
    
    const [name, setName] = useState("");
    const [avatar, setAvatarUrl] = useState("");
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleAvatarUrlChange = (e) => {
      setAvatarUrl(e.target.value);
    };
  
    //Submit Function
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleEditProfile({name, avatar})
    };
  
    return (
      <ModalWithForm
        title="Change profile data"
        onClose={handleCloseModal}
        isOpen={isOpen}
        onSubmit={handleSubmit}
        buttonText="Save Changes"
      >
        <label className="modal__label">
          Name*
          <input
            className="modal__input"
            type="text"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="modal__label">
          Avatar*
          <input
            className="modal__input"
            type="url"
            minLength="1"
            placeholder="Avatar URL"
            value={avatar}
            onChange={handleAvatarUrlChange}
          />
        </label>
      </ModalWithForm>
    );
  };
  export default EditProfileModal;
  