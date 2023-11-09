import "./Header.css";

const Header = ({onCreateModal}) => {

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/Logo.svg").default} alt="logo" className="App-logo" />
        </div>
        <div className="header__date-location">{currentDate}, New Jersey</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
           className="header__add-button"
           type="text"
            onClick={onCreateModal}
            > 
            + Add clothes
            </button>
        </div>
        <div className="header__author">Matthew Peldunas</div>
        <div>
          <img className="header__avatar" src={require("../../images/Avatar.svg").default} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
