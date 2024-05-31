import React from "react";
import "./Profile.css";
import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({
  onSelectCard,
  handleCreateModal,
  clothingItems,
  setIsLoggedIn,
  handleEditProfileModal,
  onCardLike,
  isLoggedIn,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const profileCards = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="profile">
      <SideBar
        setIsLoggedIn={setIsLoggedIn}
        handleEditProfile={handleEditProfileModal}
      />
      {profileCards.map((item) => {
       return ( 
      <ClothesSection
        onSelectCard={onSelectCard}
        handleCreateModal={handleCreateModal}
        clothingItems={clothingItems}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
       );
    })} 
    </div>
  );
};
export default Profile;
