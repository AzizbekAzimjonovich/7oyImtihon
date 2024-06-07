import React from "react";
import "./ProductMain.css";
import { Link } from "react-router-dom";
import earphones from "../assets/home/desktop/image-earphones-yx1.jpg";

function ProductMain() {
  return (
    <div className="product-main">
      <div className="div1">
        <div className="res1"></div>
        <div className="res2">
          <p className="proName">ZX9 SPEAKER</p>
          <p className="proInfo">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link className="prolink">SEE PRODUCT</Link>
        </div>
      </div>
      <div className="div2">
        <p>ZX& SPEAKER</p>
        <Link className="prolink2">SEE PRODUCT</Link>
      </div>
      <div className="div3">
        <img src={earphones} alt="" />
        <div>
          <p>YX1 EARPHONES</p>
          <Link className="prolink2">SEE PRODUCT</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductMain;
