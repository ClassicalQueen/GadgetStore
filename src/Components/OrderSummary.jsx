import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

function OrderSummary({ subtotal, tax, shipping }) {
  const total = subtotal + tax + shipping;

  return (
    <div className="OrderSummary">
      <h3>Order Summary</h3>
      <div className="OrderSummary-item">
        <p>SUBTOTAL:</p>
        <p>₦{subtotal.toLocaleString()}</p>
      </div>
      <div className="OrderSummary-item">
        <p>TAX:</p>
        <p>₦{tax.toLocaleString()}</p>
      </div>
      <div className="OrderSummary-item">
        <p>SHIPPING:</p>
        <p>₦{shipping.toLocaleString()}</p>
      </div>
      <div className="OrderSummary-item total">
        <p>TOTAL:</p>
        <p>₦{total.toLocaleString()}</p>
      </div>

      <Link to="/address">
        <button className="checkout-btn OrderSummary-button">
          Proceed Checkout
        </button>
      </Link>
    </div>
  );
}

export default OrderSummary;