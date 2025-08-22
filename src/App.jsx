import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";  
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";


function App() {

  const location = useLocation();

  const pathName = location.pathname;

  const firstSegment = pathName.split("/")[1];

  const pageClass = firstSegment === "" ? "home" : firstSegment;
  
  return (
    <div className={`app ${pageClass}`}>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
