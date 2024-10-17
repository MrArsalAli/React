import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Products from "./pages/Products.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Contact from "./pages/Contact.jsx";
import WhatsappButton from "./components/WhatsappButton.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import Signin from "./pages/Auth/Signin.jsx";
import Cart from "./pages/Cart.jsx";
import Newarrivals from "./pages/NewArrivals.jsx";
import Fabric from "./pages/Fabric.jsx";
import Sale from "./pages/Sale.jsx";
import Productcard from "./components/Productcard.jsx";

function Approuter() {
  return (
    <BrowserRouter>
      <div className="flex bg-emerald-100 justify-center p-1 font-bold">
        <marquee direction="right">Get 10% discount on all items!</marquee>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="products" element={<Products />} />
        <Route path="newarrivals" element={<Newarrivals />} />
        <Route path="fabric" element={<Fabric />} />
        <Route path="sale" element={<Sale />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="cart" element={<Cart />} />
        <Route path="productcard" element={<Productcard />} />
      </Routes>
      <WhatsappButton />
      <Footer />
    </BrowserRouter>
  );
}

export default Approuter;
