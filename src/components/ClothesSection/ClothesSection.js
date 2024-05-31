import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


const ClothesSection = ({ 
  onSelectCard, 
  handleCreateModal, 
  clothingItems,
  isLoggedIn,
  onCardLike, 
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const profileCards = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );
  return (
    <div className="clothes__items">
      <div className="clothes__items-heading-wrapper">
        <p className="clothes__items-heading">Your items</p>
        <button
          type="submit"
          className="clothes__items-add-button"
          onClick={handleCreateModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothing__items-cards">
        {profileCards.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              isLoggedIn={isLoggedIn}
              onCardLike={onCardLike}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ClothesSection;