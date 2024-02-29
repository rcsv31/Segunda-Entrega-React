import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../../../productsMock";
import ItemDetail from "./ItemDetail";
import { ClipLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lógica para obtener el producto según el ID
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getProducts(); // Modifica esto según tu lógica real
        const selectedProduct = response.find(
          (prod) => prod.id === parseInt(id)
        );
        setProduct(selectedProduct);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <ClipLoader size={50} color="#ff2c6e" loading={isLoading} />
        </div>
      ) : (
        product && (
          <ItemDetail
            title={product.title}
            description={product.description}
            img={product.img}
            price={product.price}
            stock={product.stock}
          />
        )
      )}
    </div>
  );
};

export default ItemDetailContainer;
