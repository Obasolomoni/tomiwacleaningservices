import React from 'react';

export default function Services(){
    return(
      <section id="services" style={{ padding: "50px", background: "#e9ecef" }}>
      <h2>Services</h2>
      <div className="service-grid">
        <div className="service-card">
          <h3>Home Cleaning</h3>
          <p>We keep House clean, fresh and neat</p>
        </div>
        <div className="service-card">
          <h3>Office Cleaning</h3>
          <p>We keep office sparkling neat and cool</p>
        </div>
        <div className="service-card">
          <h3>Industrial Cleaning</h3>
          <p>We make every corner of your factory and industry nice.</p>
        </div>
      </div>
    </section>
    )
}