import React from "react";
import "./Cart.css";

function CartItem({ product }) {
  return (
    <div className="CartItem">
      <img src={product.image} alt={product.name} className="CartItem-image" />
      <div className="CartItem-details">
        <p className="CartItem-name">{product.name}</p>
        <p className="CartItem-remove">Remove</p>
      </div>
      <div className="CartItem-quantity">
        <button>-</button>
        <span>{product.quantity}</span>
        <button>+</button>
      </div>
      <p className="CartItem-price">{product.price}</p>
    </div>
  );
}

export default CartItem;