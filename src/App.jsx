import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import Nav from "./Components/Nav.jsx";
import ErrorBoundary from "./Components/ErrorBoundary.jsx";
import Home from "./Components/Home.jsx";
import './App.css'
import Newsletter from "./Components/Newsletter.jsx";
import Footer from "./Components/Footer.jsx";
import Cart from "./Components/Cart.jsx";
import Address from "./Components/Address.jsx";

const App = () => {

  return (
    <ErrorBoundary>
     <Nav />
     <Router>
                <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/address" element={<Address />} />
                </Routes>
        </Router>
      <Newsletter />
      <Footer />
    </ErrorBoundary>
  )
}

export default App