// import React from "react";
import "./Sidebar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = ({setIsLoggedIn, handleEditProfile}) => {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img
          src={currentUser?.avatar}
          alt="avatar"
          className="sidebar__profile-avatar"
        />
        <p className="sidebar__profile-name">{currentUser?.name}</p>
      </div>
      <div className="sidebar__profile-info">
      <button 
      className="sidebar__profile-button"
      type="text"
      onClick={handleEditProfile}
      >
        Change profile data
      </button>
      <button 
      className="sidebar__profile-button"
      type="text"
      onClick={() => {
        navigate("/");
        setIsLoggedIn(false);
        localStorage.removeItem("jwt");
      }}
      >
        Log out
      </button>
    </div>
    </div>
  );
};
export default SideBar;
