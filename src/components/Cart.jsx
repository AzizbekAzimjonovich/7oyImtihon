import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, onRemoveAll, onQuantityChange }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Cart ({cartItems.length})</h2>
        <button className="remove-all" onClick={onRemoveAll}>
          Remove all
        </button>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <div className="quantity-controls">
              <button
                onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total</h3>
        <p>${total}</p>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;
