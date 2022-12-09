import Footer from "../components/Footer";
import Header from "../components/Header";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CateGoryPage from "../pages/CategoryPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import IntroducePage from "../pages/IntroducePage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import Home from "../components/User/Home";
import Profile from "../components/User/Profile";
import Order from "../components/User/Order";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DeliveryPage from "../pages/DeliveryPage";

function Layouts() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category" element={<CateGoryPage />} />
            <Route path="/:nameProd" element={<ProductDetailPage />} />
            <Route path="/introduce" element={<IntroducePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/user" element={<UserPage />}>
              <Route path="" element={<Home />} />
              <Route path="order" element={<Order />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default Layouts;
