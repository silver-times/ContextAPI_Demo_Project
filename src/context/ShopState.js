import React, { useState, useEffect } from "react";
import { useReducer } from "react";
import shopContext from "./shopContext";
import shopReducers from "./shopReducers";

const ShopState = (props) => {
  // API CALL
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Entire Shop State
  const initialState = {
    count: 0,
    items: [],
  };

  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  };
  const [state, dispatch] = useReducer(shopReducers, initialState);

  return (
    <shopContext.Provider
      value={{
        count: state.count,
        items: state.items,
        addItem,
        deleteItem,
        products,
      }}
    >
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopState;
