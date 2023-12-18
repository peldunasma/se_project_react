import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  console.log(item)
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