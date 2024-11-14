import { useState, useEffect } from "react";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const productData = useLoaderData();
  useEffect(() => {
    setProducts(productData.data);
  }, [productData]);

  return (
    <div className="font-titleFont">
      <Products products={products}/>
    </div>
  );
};

export default Home;
