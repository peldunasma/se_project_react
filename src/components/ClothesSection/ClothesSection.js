import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ onSelectCard, handleCreateModal, clothingItems }) {
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
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              onSelectCard={onSelectCard}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ClothesSection;