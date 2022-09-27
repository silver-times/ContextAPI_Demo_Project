import React, { useContext } from "react";
import Product from "../components/Product";
import shopContext from "../context/shopContext";

const Home = () => {
  const { products } = useContext(shopContext);

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <Product
          key={product.id}
          id={Math.random()}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Home;
