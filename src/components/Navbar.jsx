import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/shared/desktop/logo.svg";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Cart from "./Cart"; // Import the Cart component

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [cartVisible, setCartVisible] = useState(false); // State for cart visibility
  const [cartItems, setCartItems] = useState([
    // Example cart items
    {
      id: 1,
      name: "XX99 MK II",
      price: 2999,
      quantity: 1,
      image: "path-to-image",
    },
    { id: 2, name: "XX59", price: 899, quantity: 2, image: "path-to-image" },
    { id: 3, name: "YX1", price: 599, quantity: 1, image: "path-to-image" },
  ]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    alert("Proceed to checkout");
  };

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="res">
            <button className="menu-button" onClick={toggleMenu}>
              <MdOutlineMenu size={20} />
            </button>
            <Link to={"/"}>
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className={`menu ${menuActive ? "active" : ""}`}>
            <Link className="menuName" to={"/"}>
              HOME
            </Link>
            <Link className="menuName" to={"/headphones"}>
              HEADPHONES
            </Link>
            <Link className="menuName" to={"/speakers"}>
              SPEAKERS
            </Link>
            <Link className="menuName" to={"/earphones"}>
              EARPHONES
            </Link>
          </ul>
          <img
            className="cart"
            src={cartIcon}
            alt="Cart"
            onClick={toggleCart} // Add onClick handler to toggle cart
          />
        </div>
      </div>
      {cartVisible && (
        <Cart
          cartItems={cartItems}
          onRemoveAll={handleRemoveAll}
          onQuantityChange={handleQuantityChange}
          onCheckout={handleCheckout}
        />
      )}{" "}
      {/* Conditionally render the Cart component */}
    </>
  );
}

export default Navbar;
