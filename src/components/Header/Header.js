import "./Header.css";
// import logo from "../../images/Logo.svg";
// import avatar from "../../images/Avatar.svg";

const Header = () => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/Logo.svg").default} alt="logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text"> Add New Clothes</button>
        </div>
        <div>Name</div>
        <div>
          <img src="./images/Avatar.svg" alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
