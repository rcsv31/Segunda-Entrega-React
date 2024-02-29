import ItemCount from "../../common/itemCount/ItemCount";

const ItemDetail = ({ title, description, img, price, stock }) => {
  const formattedPrice = price.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });

  return (
    <div className="detailContainer">
      <div className="cardDetail">
        <div className="detailBody">
          <h1 className="detailTitle">{title}</h1>
          <img src={img} alt={title} />
          <p className="detaiDescription">{description}</p>
          <p>Precio: {formattedPrice}</p>
          <ItemCount stock={stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
