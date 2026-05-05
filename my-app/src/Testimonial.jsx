import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "50px"}}>
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p>"They did an amazing job at my home! Highly recommend."</p>
          <h4>- Sarah L.</h4>
        </div>
        <div className="testimonial-card">
          <p>"Professional, fast, and affordable."</p>
          <h4>- James O.</h4>
        </div>
      </div>
    </section>
  );
}
