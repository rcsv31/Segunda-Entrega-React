import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="cards-container">
      {products.map(({ id, img, title, description, price }) => (
        <Link to={`/item/${id}`} key={id} style={{ textDecoration: "none" }}>
          <ProductCard
            img={img}
            title={title}
            description={description}
            price={price.toLocaleString("es-ES", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
            })}
            id={id}
          />
        </Link>
      ))}
    </div>
  );
};

ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ItemList;
