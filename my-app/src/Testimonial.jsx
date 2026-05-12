import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "50px" }}>
      <h2 className="section-title">What Our Clients Say</h2>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>

          <p>
            "They did an amazing job at my home. Everything was spotless and fresh.
            I’ll definitely use them again!"
          </p>

          <div className="client">
            <img src="/user1.jpg" alt="client" />
            <div>
              <h4>Sarah L.</h4>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>

          <p>
            "Professional, fast, and affordable. My office has never looked this clean."
          </p>

          <div className="client">
            <img src="/user2.jpg" alt="client" />
            <div>
              <h4>James O.</h4>
              <span>Ogun State</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
