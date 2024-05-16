import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";


const Header = ({
  onCreateModal, 
  handleSignUp, 
  handleLogin,
  isLoggedIn
}) => {

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
          <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>{currentDate}, New York </div>
      </div>
      <div className="header__info-container">
        <ToggleSwitch/>
        {isLoggedIn ? (
          <>
        <div>
          <button
           className="header__add-button"
           type="text"
            onClick={onCreateModal}
            > 
            + Add clothes
            </button>
        </div>
        <Link 
        to="/profile"
        style={{ textDecoration: "none", color: "black" }}
        >
        {currentUser?.name}
        </Link>
        <div>
          <img 
          src={currentUser?.avatar}
          className="header__avatar" 
          alt="avatar logo" 
          />
        </div>
      </>
    ) : (
          <>
            <button
              className="header__button"
              type="button"
              onClick={handleSignUp}
            >
             Sign up
            </button>
            <button
              className="header__button"
              type="button"
              onClick={handleLogin}
            >
              Log in
            </button>
          </>
        )}
        </div>
    </header>
  );
};

export default Header;