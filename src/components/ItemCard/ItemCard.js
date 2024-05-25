import "./ItemCard.css";
import heartIcon from "../../images/heart-default.svg";
import heartLikedIcon from "../../images/heart-liked.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemCard = ({ item, onSelectCard, onCardLike, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((id) => id === currentUser._id);

  return (
    <div>
    <div className="card_element">
      <div className="card_name">{item.name}</div>
      {isLoggedIn ? (
          <button
            className="card__like-button"
            onClick={() => onCardLike(item._id, isLiked)}
          >
            <img
              src={isLiked ? heartLikedIcon : heartIcon}
              alt="like button"
              className="card__like-button_img"
            />
          </button>
        ) : (
          ""
        )}
        </div>
        <img
        src={item.imageUrl}
        alt={item.name}
        className="card_image"
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;