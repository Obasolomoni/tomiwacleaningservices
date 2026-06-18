import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cleaning from "./pages/Cleaning";
import Food from "./pages/Food";
import RealEstate from "./pages/RealEstate";
import Products from "./pages/Products";
import Fashion from "./pages/Fashion";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./admin/pages/Dashboard";
import Requests from "./admin/pages/Request";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/food" element={<Food />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/products" element={<Products />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/request" element={<Requests />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;