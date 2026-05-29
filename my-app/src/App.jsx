import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cleaning from "./pages/Cleaning";
import Food from "./pages/Food";
import RealEstate from "./pages/RealEstate";
import Media from "./pages/Media";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/food" element={<Food />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;