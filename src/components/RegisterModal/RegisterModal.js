import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleCloseModal,handleSignUp,isOpen, switchToLogin }) => {
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

  // Resets input fields

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatarUrl("");
    }
  }, [isOpen]);

  //Submit Function

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      className="register"
      onSubmit={handleSubmit}
      buttonText="Sign Up"
    >
      <label className="modal__label">
        Email*
        <input
          className="modal__input"
          type="text"
          name="email"
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
          className="modal__input"
          type="text"
          name="password"
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
        Avatar
        <input
          className="modal__input"
          type="url"
          minLength="1"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarUrlChange}
        />
      </label>
      <p className="modal__switch" onClick={switchToLogin}>
        or Log in
      </p>
    </ModalWithForm>
  );
};
export default RegisterModal;
