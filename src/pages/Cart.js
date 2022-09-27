import React, { useContext } from "react";
import shopContext from "../context/shopContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { items } = useContext(shopContext);

  return (
    <div className="grid grid-cols-1 bg-white mx-10">
      {items.map((item) => (
        <CartItem
          image={item.image}
          title={item.title}
          price={item.price}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Cart;
