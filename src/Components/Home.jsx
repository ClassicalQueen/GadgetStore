import React from "react";
import "./Index.css";
import Intro from "./Intro";
import NewArrivals from "./NewArrivals";
import ProductList from "./ProductList";
import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Intro />
      <ProductList />
      <NewArrivals />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;