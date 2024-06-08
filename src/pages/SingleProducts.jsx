import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Also from "../components/Also";
import "./SingleProduct.css";

function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {};

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const productGallery = product.gallery;

  return (
    <div className="single-product" style={{ backgroundColor: "#fff" }}>
      <div className="buy">
        <Link className="backHome" to={"/"}>
          Go Back
        </Link>
        <div className="card-headphone" key={product.id}>
          <img src={product.image.desktop} alt="" width={540} />
          <div className="product-item">
            <p className="text-new">
              {product.new === true ? "NEW PRODUCT" : ""}
            </p>
            <h2 className="text-name">{product.name}</h2>
            <p className="text-info">{product.description}</p>
            <p className="price">${product.price}</p>
            <div className="btns">
              <div className="quantity-controls ">
                <button onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
              </div>
              <button onClick={handleAddToCart} className="see-product">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fullInfo">
        <div className="feature">
          <p className="text-feature">FEATURES</p>
          <p className="description">{product.description}</p>
          <p className="description">{product.features}</p>
        </div>
        <div className="box">
          <p className="text-feature">IN THE BOX</p>

          {product.includes.map((e, index) => (
            <div className="description" key={index}>
              <span>{e.quantity}x</span> <p>{e.item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="galery">
        <div className="galeryMin">
          <img src={productGallery[0]} alt="" width={445} />
          <img src={productGallery[1]} alt="" width={445} />
        </div>
        <img src={productGallery[2]} alt="" width={635} />
      </div>
      <Also />
    </div>
  );
}

export default SingleProduct;
