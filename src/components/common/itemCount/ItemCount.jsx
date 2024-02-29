import { useState } from "react";

const ItemCount = ({ stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={increment}>+</button>
        <strong>{count}</strong>
        <button onClick={decrement}>-</button>
      </div>
      <button> Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
