import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  onSubmit,
  isOpen,
  switchToLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatarUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAvatarUrlChange = (e) => {
    setAvatarUrl(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      className="register"
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email*
        <input
          className="modal__input modal__input_type_email"
          type="text"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__label">
        Password*
        <input
          className="modal__input modal__input_type_password"
          type="password"
          minLength="1"
          maxLength="30"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label className="modal__label">
        Name
        <input
          className="modal__input modal__input_type_name"
          type="text"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          className="modal__input modal__input_type_avatar"
          type="url"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarUrlChange}
        />
      </label>
      <div className="modal__buttons">
        <button className="modal__submit-button" type="submit">
            Next
        </button>
      <button className="modal__switch" type="button" onClick={switchToLogin}>
        or Log in
      </button> 
      </div>
    </ModalWithForm>
  );
};
export default RegisterModal;
