import "./Header.css";
import logo from "../../images/Logo.svg";
import avatar from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({onCreateModal}) => {

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo" className="App-logo" />
        </div>
        <div className="header__date-location">{currentDate}, New Jersey</div>
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
        <p className="header__author">Matthew Peldunas</p>
        <div>
          <img className="header__avatar" src={avatar} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
