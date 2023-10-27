import "./Header.css";
import logo from "../../images/Logo.svg";
import avatar from "../../images/Avatar.svg";

const Header = ({ onCreateModal }) => {
  console.log("Header");
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header class="header">
    <div class="header__logo">
      <div>
        <img src="#" class="header__logo" alt="" />
      </div>
      <div class="header__date-location">{currentDate}, Florida</div>
    </div>
    <div class="header__content-right">
      <div>
        <button
          class="header__add-button"
          type="button"
        >
          + Add clothes
        </button>
      </div>
      <div class="header__name">Matthew Peldunas</div>
      <div className="header__avatar">
        <img src={avatar} class="header__avatar" alt="avatar" />
      </div>
    </div>
  </header>
  );
};

export default Header;
   