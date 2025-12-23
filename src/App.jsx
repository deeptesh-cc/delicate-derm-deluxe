import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";  
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import ContactUs from "./pages/ContactUs";
import ThankYou from "./pages/ThankYou";
import Wishlist from "./pages/Wishlist";


function App() {

  const location = useLocation();

  const pathName = location.pathname;

  const firstSegment = pathName.split("/")[1];

  const pageClass = firstSegment === "" ? "home" : firstSegment;
  
  return (
    <CartProvider>
    <div className={`app ${pageClass}`}> 
      <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
      <Footer/>
    </div>
    </CartProvider>
  )
}

export default App
