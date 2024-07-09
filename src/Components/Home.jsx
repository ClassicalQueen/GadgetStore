import React from "react";
import "./Index.css";
import Intro from "./Intro";
import NewArrivals from "./NewArrivals";
import ProductList from "./ProductList";

function Home() {
  return (
    <div>
      <Intro />
      <ProductList />
      <NewArrivals />
    </div>
  );
}

export default Home;