import "./Header.css";
// import logo from "../../images/Logo.svg";
// import avatar from "../../images/Avatar.svg";

const Header = ({onCreateModal}) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/Logo.svg").default} alt="logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}> Add New Clothes</button>
        </div>
        <div>Name</div>
        <div>
          <img src={require("../../images/Avatar.svg").default} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
