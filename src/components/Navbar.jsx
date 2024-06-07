import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
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
          <img className="cart" src={cart} alt="Cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
