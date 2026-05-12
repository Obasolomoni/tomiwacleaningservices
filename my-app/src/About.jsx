import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="about">
        <h2>About Us</h2>

        <p className="about-text">
          Tomiwa Cleaning Services is a dedicated, single-owned business focused on
          delivering reliable, affordable, and high-quality cleaning solutions for
          homes and offices across Nigeria. 💙
        </p>

        <div className="about-features">
          <div>✔ Trusted & Reliable Service</div>
          <div>✔ Affordable Pricing</div>
          <div>✔ Attention to Detail</div>
          <div>✔ Customer Satisfaction First</div>
        </div>

        <button className="cta-btn">
          Book a Service
        </button>
      </div>

    </section>
  );
}