import React from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import "./Cart.css";
import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const products = [
  {
    name: "Redmi Note 11 Pro",
    image: "/assets/phone.png",
    price: "₦45,000",
    quantity: 1,
  },
  {
    name: "Redmi Case",
    image: "/assets/phone.png",
    price: "₦45,000",
    quantity: 1,
  },
];

function Cart() {
  const subtotal = products.reduce(
    (acc, product) =>
      acc + parseFloat(product.price.replace("₦", "").replace(",", "")),
    0
  );
  const tax = 0;
  const shipping = 500;

  return (
    <div className="whole">
    <Nav />
    <div className="CartPage">
      <h2>Cart</h2>
      <div className="CartPage-content">
        <div className="CartPage-items">
          {products.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
        </div>
        <OrderSummary subtotal={subtotal} tax={tax} shipping={shipping} />
      </div>
    </div>
    <Newsletter />
    <Footer />
    </div>
  );
}

export default Cart;