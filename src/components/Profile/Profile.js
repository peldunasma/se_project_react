import React from "react";
import "./Profile.css";
import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile ({
  onSelectCard,
  handleCreateModal,
  clothingItems,
  setIsLoggedIn,
  handleEditProfileModal,
  onCardLike,
  isLoggedIn,
}) {
  return (
    <div className="profile">
      <SideBar
        setIsLoggedIn={setIsLoggedIn}
        handleEditProfile={handleEditProfileModal}
      />
      <ClothesSection
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
        clothingItems={clothingItems}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};
export default Profile;
