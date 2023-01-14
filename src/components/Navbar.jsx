import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const state = useSelector((state) => state.cartItems);
  return (
    <nav className="navbar">
      <ul className="nav-content">
        <li>
          <Link to="/">
            <h1>LOGO</h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/">Store</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <div className="">
        <Link to="/cart">
          <button className="shop-icon">
            <AiOutlineShopping></AiOutlineShopping>
            <div className="circle">{state.length}</div>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
