import React from "react";
import avatar from "../../images/Avatar.svg"
import "./Sidebar.css"; 

function SideBar() {
    return (
        <div className="profile__logo">
            <img
                src={avatar}
                alt="profile__avatar"
                className="profile__avatar-image"
            />
            <p className="profile__avatar-name">Terrence Tegegne</p>
        </div>
    );
}
export default SideBar; 