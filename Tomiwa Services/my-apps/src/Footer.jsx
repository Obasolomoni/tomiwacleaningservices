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
      <h2>Contact Us</h2>
      <div className="footer-header">
        <h3>Address</h3>
        <p>10, Peculiar People Street, Eleko Bus Stop, Iju Otta, Ogun State, Nigeria.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "25px", marginTop: "20px" }}>
          <a
            href="https://wa.me/2349030884705"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <BsWhatsapp />
          </a>

          <a
            href="https://twitter.com/@koladeanuoluwa4"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <BsTwitterX />
          </a>

          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <BsInstagram />
          </a>

          <a
            href="https://facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <BsFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
