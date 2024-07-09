import React from "react";
import "./Cart.css";

const Address = () => {
  return (
    <div className="address-form-container">
      <form className="address-form">
        <h3>Add New Address</h3>
        <label>First Name</label>
        <input type="text" placeholder="" />
        <label>Last Name</label>
        <input type="text" placeholder="" />
        <label>Street Address</label>
        <input type="text" placeholder="" />
        <label>Country or Region</label>
        <input type="text" placeholder="" />
        <label>Town City</label>
        <input type="text" placeholder="" />
        <label>Apt Number</label>
        <input type="text" placeholder="" />
        <button type="submit" className="save-address-btn">
          Save this address
        </button>
      </form>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>SUBTOTAL:</span>
          <span>₦90,000</span>
        </div>
        <div className="summary-item">
          <span>TAX:</span>
          <span>₦0.00</span>
        </div>
        <div className="summary-item">
          <span>SHIPPING:</span>
          <span>₦500</span>
        </div>
        <span className="line"> </span>
        <div className="summary-item total">
          <span>TOTAL:</span>
          <span>₦90,500</span>
        </div>
        <button className="checkout-btn">Proceed Checkout</button>
      </div>
    </div>
  );
};

export default Address;