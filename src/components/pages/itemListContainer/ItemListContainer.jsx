import ItemList from "./ItemList.jsx";
import { getProducts } from "../../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners"; // Importa el componente de spinner

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const resp = await getProducts();

        if (category) {
          const productsFilter = resp.filter(
            (product) => product.category === category
          );
          setProducts(productsFilter);
        } else {
          setProducts(resp);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <ClipLoader loading={isLoading} />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
