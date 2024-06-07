import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // CSS faylini import qilishni unutmang

function Home() {
  return (
    <div className="container">
      <div className="main-container">
        <div className="main">
          <p className="product">NEW PRODUCT</p>
          <p className="headphone">XX99 Mark II Headphones</p>
          <p className="info">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link className="btn" to={"/headphones"}>
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
