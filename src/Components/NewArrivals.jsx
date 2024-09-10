import React from "react";
import ProductCard from "./ProductCard";
import "./Index.css";

const newArrivals = [
  {
    name: "Noise-Cancelling Wireless Earbuds",
    image: "/assets/earpiece.png",
    price: "₦45,000",
    rating: 4.5,
  },
  {
    name: "Vision Pro",
    image: "/assets/visionpro.png",
    price: "₦350,000",
    rating: 5,
  },
  {
    name: "Redmi Note 11 Pro",
    image: "/assets/phone.png",
    price: "₦45,000",
    rating: 4.2,
  },
];

function NewArrivals() {
  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="products">
        {newArrivals.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;