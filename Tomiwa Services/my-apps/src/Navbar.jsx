import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="headerNav">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#product" onClick={() => setMenuOpen(false)}>
          Products
        </a>
        <a href="#testimonial" onClick={() => setMenuOpen(false)}>
          Testimonials
        </a>
        <a href="#footer" onClick={() => setMenuOpen(false)}>
          Contacts
        </a>
      </nav>
    </header>
  );
}
