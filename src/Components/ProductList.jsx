import React from "react";
import ProductCard from "./ProductCard";

const products = [
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
    name: "Redmi Case",
    image: "/assets/phone.png",
    price: "₦25,000",
    rating: 4,
  },
  {
    name: "Redmi Note 11 Pro",
    image: "/assets/phone.png",
    price: "₦45,000",
    rating: 4.2,
  },
  {
    name: "Wireless Mouse",
    image: "/assets/mouse.png",
    price: "₦18,000",
    rating: 3.8,
  },
  {
    name: "Noise-Cancelling headset",
    image: "/assets/headset.png",
    price: "₦45,000",
    rating: 4.7,
  },
];

function ProductList() {
  return (
    <section className="product-list">
      <h2 id="explore">Explore Our Products</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;