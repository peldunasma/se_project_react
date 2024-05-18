import React from "react";
import "./Sidebar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function SideBar(setIsLoggedIn) {
  const navigate = NavLink();
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img
          src={currentUser?.avatar}
          alt="sidebar__avatar"
          className="sidebar__avatar-image"
        />
        <p className="sidebar__avatar-name">
            {currentUser?.name}
        </p>
      </div>
      <button 
      className="sidebar__edit-data"
      type="text"
      >
        Change profile data
      </button>
      <button 
      className="sidebar__logout"
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
  );
}
export default SideBar;
