import React from "react";
import { BsWhatsapp, BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        height: "50vh",
        background: "#0d6efd",
        color: "white",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <div className="footer">
        <h2 className="footer-title">Contact Us</h2>

        <div className="footer-container">

          {/* Address */}
          <div className="footer-section">
            <h3>Address</h3>
            <p>
              10, Peculiar People Street,<br />
              Eleko Bus Stop, Iju Otta,<br />
              Ogun State, Nigeria.
            </p>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Reach Us</h3>
            <p>📞 +234 903 088 4705</p>
            <p>📧 info@tomiwacleaning.com</p>
          </div>

          {/* Socials */}
          <div className="footer-section">
            <h3>Follow Us</h3>

            <div className="socials">
              <a href="https://wa.me/2349030884705" target="_blank" rel="noopener noreferrer">
                <BsWhatsapp />
              </a>

              <a href="https://twitter.com/@koladeanuoluwa4" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
              </a>

              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>

              <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
            </div>
          </div>

        </div>

        <p className="footer-bottom">
          © 2026 Tomiwa Cleaning Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
