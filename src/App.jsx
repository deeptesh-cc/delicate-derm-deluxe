import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";  
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";


function App() {
  
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
