import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">

        {/* LOGO */}
        <Link to="/" className="text-lg font-semibold">
          Tomiwa Services
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/cleaning" className="hover:text-gray-300 transition">Cleaning</Link>
          <Link to="/food" className="hover:text-gray-300 transition">Food</Link>
          <Link to="/real-estate" className="hover:text-gray-300 transition">Real Estate</Link>
          <Link to="/products" className="hover:text-gray-300 transition">Products</Link>
          <Link to="/fashion" className="hover:text-gray-300 transition">Fashion</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>

        {/* HAMBURGER */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1">
            <span className={`block h-0.5 w-6 bg-white transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>
        </div>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-900 px-4 pb-4"
          >
            <div className="flex flex-col gap-4 text-sm">

              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/cleaning" onClick={() => setIsOpen(false)}>Cleaning</Link>
              <Link to="/food" onClick={() => setIsOpen(false)}>Food</Link>
              <Link to="/real-estate" onClick={() => setIsOpen(false)}>Real Estate</Link>
              <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
              <Link to="/fashion" onClick={() => setIsOpen(false)}>Fashion</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;