import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import ErrorBoundary from "./Components/ErrorBoundary.jsx";
import Home from "./Components/Home.jsx";
import "./App.css";
import Cart from "./Components/Cart.jsx";
import Address from "./Components/Address.jsx";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </Router>
    );
  };
  
  export default App;
  