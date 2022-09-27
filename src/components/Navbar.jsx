import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { SiReact } from "react-icons/si";
import shopContext from "../context/shopContext";

const Navbar = () => {
  const { count } = useContext(shopContext);

  return (
    <div className="flex justify-between items-center mx-auto container my-10">
      <NavLink to="/">
        <div className="flex items-end">
          <SiReact className="text-6xl" />
          <h1 className="text-5xl font-bold">contextSHOPPING</h1>
        </div>
      </NavLink>
      <div className="flex gap-10 items-center text-xl font-extrabold">
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/cart">
          <h3>Cart</h3>
        </NavLink>
        <NavLink to="/cart">
          <div className="flex items-center ">
            <BsFillCartFill />
            <div className="ml-1 text-2xl">
              <h2>{count}</h2>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
