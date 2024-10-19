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
import Adminpanel from "./pages/Auth/Adminpanel/Adminpanel.jsx";
import Orderlist from "./pages/Auth/Adminpanel/Orderlist.jsx";
import LayoutWithAlert from "./components/LayoutWithAlert.jsx";
import LayoutWithoutAlert from "./components/LayoutWithoutAlert.jsx";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWithAlert />}>
          <Route index element={<App />} />
          <Route path="/newarrivals" element={<Newarrivals />} />
          <Route path="/fabric" element={<Fabric />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sale" element={<Sale />} />
        </Route>
        <Route element={<LayoutWithoutAlert />}>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/adminpanel" element={<Adminpanel />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productcard" element={<Productcard />} />
          <Route path="/orderlist" element={<Orderlist />} />
        {/* <Route path="*" element={<Notfound />} /> */}
        </Route>
      </Routes>
      <WhatsappButton />
      <Footer />
    </BrowserRouter>
  );
}

export default Approuter;
