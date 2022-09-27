import React, { useContext } from "react";
import shopContext from "../context/shopContext";

const CartItem = ({ id, image, title, price }) => {
  const { deleteItem } = useContext(shopContext);

  const deleteItemHandler = () => {
    deleteItem(id);
  };

  return (
    <div className="mx-5 py-5">
      <div className="flex justify-between items-center">
        <img src={image} alt={title} className="w-[80px] h-auto mt-5" />
        <h1 className="text-xs font-extrabold mt-5">{title}</h1>
        <p className="mt-2 font-semibold">$ {price}</p>
        <button
          className="my-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 w-1/5"
          onClick={deleteItemHandler}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
