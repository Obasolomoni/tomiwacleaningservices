import React from 'react';

export default function Services() {
  return (
    <section id="services" style={{ padding: "50px", background: "#e9ecef" }}>
      <h2 className="section-title">Our Services</h2>

      <div className="service-grid">
        <div className="service-card">
          <div className="icon">🏠</div>
          <h3>Home Cleaning</h3>
          <p>We keep your home fresh, neat, and spotless.</p>

          <ul>
            <li>✔ Deep cleaning</li>
            <li>✔ Kitchen & bathroom</li>
            <li>✔ Dust & sanitization</li>
          </ul>

          <button className="service-btn">Learn More</button>
        </div>

        <div className="service-card">
          <div className="icon">🏢</div>
          <h3>Office Cleaning</h3>
          <p>Maintain a clean and productive workspace.</p>

          <ul>
            <li>✔ Daily cleaning</li>
            <li>✔ Workspace hygiene</li>
            <li>✔ Trash removal</li>
          </ul>

          <button className="service-btn">Learn More</button>
        </div>

        <div className="service-card">
          <div className="icon">🏭</div>
          <h3>Industrial Cleaning</h3>
          <p>Heavy-duty cleaning for factories and industries.</p>

          <ul>
            <li>✔ Equipment cleaning</li>
            <li>✔ Floor maintenance</li>
            <li>✔ Safety compliance</li>
          </ul>

          <button className="service-btn">Learn More</button>
        </div>
      </div>
    </section>
  )
}