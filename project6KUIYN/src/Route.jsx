import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router';
import App from "./App";
import Navbar from "./components/navbar.jsx";
import Login from "./pages/login.jsx";
import ProductDetail from "./pages/productdetails.jsx";
import Signup from "./pages/signup.jsx";
import Home from "./pages/Home.jsx";

function AppRouter() {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<App />} />
                <Route path="/login" element={<Login />}  />
                <Route path="/signup" element={<Signup />}  />
                <Route path="/product/:id" element={<ProductDetail />}  />
            </Routes>
        </BrowserRouter>
        </>
    )


}

export default AppRouter