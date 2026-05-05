import React, { useState } from "react";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    size: "",
  });
  const [quoteData, setQuoteData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic quotation logic
    let basePrice = 0;
    if (formData.service === "home") basePrice = 15000;
    else if (formData.service === "office") basePrice = 25000;
    else if (formData.service === "postConstruction") basePrice = 40000;

    let multiplier = 1;
    if (formData.size === "small") multiplier = 1;
    else if (formData.size === "medium") multiplier = 1.5;
    else if (formData.size === "large") multiplier = 2;

    const total = basePrice * multiplier;

    setQuoteData({
      ...formData,
      total,
    });

    setShowQuote(true);
  };

  const closeQuote = () => setShowQuote(false);

  return (
    <section id="hero">
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <h1>TOMIWA CLEANING SERVICES</h1>
        <p>...We make every corner shine</p>

        <button
          onClick={() => setShowForm(true)}
          style={{
            background: "#0d6efd",
            color: "white",
            padding: "12px 25px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Get a Free Quote
        </button>

        {/* FORM POPUP */}
        {showForm && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "1000",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                width: "320px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Get a Quote</h3>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="">Select Service Type</option>
                  <option value="home">Home Cleaning</option>
                  <option value="office">Office Cleaning</option>
                  <option value="postConstruction">Post Construction Cleaning</option>
                </select>

                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="">Select Area Size</option>
                  <option value="small">Small (1–2 rooms)</option>
                  <option value="medium">Medium (3–5 rooms)</option>
                  <option value="large">Large (6+ rooms)</option>
                </select>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    style={{
                      background: "gray",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    style={{
                      background: "#0d6efd",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* QUOTATION POPUP */}
        {showQuote && quoteData && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "1000",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                width: "340px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ textAlign: "center" }}>Quotation Summary</h3>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "10px",
                  textAlign: "left",
                }}
              >
                <tbody>
                  <tr>
                    <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Name</th>
                    <td style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>{quoteData.name}</td>
                  </tr>
                  <tr>
                    <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Service Type</th>
                    <td style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                      {quoteData.service === "home"
                        ? "Home Cleaning"
                        : quoteData.service === "office"
                        ? "Office Cleaning"
                        : "Post Construction Cleaning"}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Size</th>
                    <td style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                      {quoteData.size.charAt(0).toUpperCase() + quoteData.size.slice(1)}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "8px" }}>Estimated Price</th>
                    <td style={{ padding: "8px", fontWeight: "bold", color: "#0d6efd" }}>
                      ₦{quoteData.total.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <button
                  onClick={closeQuote}
                  style={{
                    background: "#0d6efd",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
