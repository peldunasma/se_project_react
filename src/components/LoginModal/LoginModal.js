import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  handleCloseModal,
  onSubmit,
  isOpen,
  switchToLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      onClose={handleCloseModal}
      isOpen={isOpen}
      className="login"
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
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
      <div className="modal__buttons">
        {/* <button className="modal__submit-button" type="submit">
            Log In
        </button> */}
      <button className="modal__switch" type="button" onClick={switchToLogin}>
        or Register
      </button> 
      </div>
    </ModalWithForm>
  );
};
export default LoginModal;
