import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Products from "./pages/Products.jsx";
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
import Orderlist from "./pages/Auth/Adminpanel/Orderlist.jsx";
import AddAProduct from "./pages/Auth/Adminpanel/AddAProduct.jsx";
import LayoutWithAlert from "./components/LayoutWithAlert.jsx";
import LayoutWithoutAlert from "./components/LayoutWithoutAlert.jsx";
import LayoutWithAdminPanel from "./components/LayoutWithAdminPanel.jsx";
import Adminpanelmain from "./pages/Auth/Adminpanel/Adminpanelmain.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Checkout from "./pages/Checkout.jsx";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWithAlert />}>
          <Route index element={<App />} />
          <Route path="/newarrivals" element={<Newarrivals />} />
          <Route path="/fabric" element={<Fabric />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/sale" element={<Sale />} />
        </Route>
        <Route element={<LayoutWithoutAlert />}>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pd" element={<Productcard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route element={<LayoutWithAdminPanel />}>
            <Route path="adminpanelmain" element={<Adminpanelmain />} />
            <Route path="/orderlist" element={<Orderlist />} />
            <Route path="/addaproduct" element={<AddAProduct />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
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
