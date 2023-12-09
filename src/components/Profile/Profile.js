import React from "react";
import "./Profile.css";
import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection"; 

function Profile ({ onSelectCard, handleCreateModal, clothingItems }) {

    return (
        <div className = "profile">
            <SideBar />
            <ClothesSection 
                onSelectCard={onSelectCard}
                handleCreateModal={handleCreateModal}
                clothingItems={clothingItems}
            />
        </div>
    );
}
export default Profile;