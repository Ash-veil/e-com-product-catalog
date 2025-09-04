import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ShowProduct from "./pages/ShowProduct";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="grid min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:ref/:productName" element={<ShowProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
