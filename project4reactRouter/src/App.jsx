import Homepage from "../pages/homepage.jsx";
import AboutUs from "../pages/aboutus.jsx";
import Signup from "../pages/signup.jsx";
import Products from "../pages/products.jsx";
import ProductDetails from "../pages/productdetails.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
