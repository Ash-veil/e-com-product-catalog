import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ShowProduct from "./pages/ShowProduct";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="grid min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/show" element={<ShowProduct />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
