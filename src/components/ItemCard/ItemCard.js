import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card_element">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card_image"
        onClick={() => onSelectCard(item)}
      />

      <div className="card_name">{item.name}</div>
    </div>
  );
};

export default ItemCard;