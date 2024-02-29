import carrito from "../../../images/carrito.svg";
import "./CartWidget.css";
const CartWidget = () => {
  const cantidadItems = 0;
  return (
    <div className="carrito">
      <img src={carrito} alt="Carrito" />
      <p>{cantidadItems}</p>
    </div>
  );
};

export default CartWidget;
