import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs/AboutUs";
import ProductPage from "./pages/ProductPage/ProductPage";
import Navbar from "./component/Navbar/Navabr";
import HomePage from "./pages/Homepage/HomePage";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
