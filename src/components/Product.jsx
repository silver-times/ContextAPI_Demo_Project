import React, { useContext } from "react";
import shopContext from "../context/shopContext";

const Product = ({ image, title, price, id }) => {
  const { addItem } = useContext(shopContext);

  const addItemHandler = () => {
    const item = {
      title,
      price,
      image,
      id,
    };
    addItem(item);
  };

  return (
    <div className="bg-white rounded-2xl flex flex-col items-center justify-end">
      <div className="flex flex-col justify-center items-center">
        <img src={image} alt={title} className="w-[120px] h-auto mt-5" />
        <h1 className="text-xs font-extrabold mt-5">{title}</h1>
        <p className="mt-2 font-semibold">$ {price}</p>
      </div>
      <button
        className="my-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 w-1/2"
        onClick={addItemHandler}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
