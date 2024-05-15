import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = ({
  onCreateModal, 
  handleSignUp, 
  handleLogin,
}) => {

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
          <img src={logo} alt="logo" className="App-logo" />
          </Link>
        </div>
        <div className="header__date-location">{currentDate}, New York </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch/>
        <div>
          <button
           className="header__add-button"
           type="text"
            onClick={onCreateModal}
            > 
            + Add clothes
            </button>
        </div>
        <NavLink to="/profile">
          <p className="header__author">Terrence Tegegne</p>
        </NavLink>
        <div>
          <img 
          className="header__avatar" 
          src={avatar} 
          alt="avatar" 
          />
        </div>
      </div>
          <>
            <button
              className="nav__register-button"
              type="button"
              onClick={handleSignUp}
            >
              <div className="header__sign-up">Sign up</div>
            </button>
            <button
              className="nav__login-button"
              type="button"
              onClick={handleLogin}
            >
              <div className="header__log-in" >Log in</div>
            </button>
          </>
    </header>
  );
};

export default Header;
