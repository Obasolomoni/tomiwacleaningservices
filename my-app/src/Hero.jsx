import { useState } from "react";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    service: "",
    size: "",
  });

  const [quoteData, setQuoteData] = useState("");

  // 🔥 cleaner logic
  const prices = {
    home: 15000,
    office: 25000,
    postConstruction: 40000,
  };

  const sizes = {
    small: 1,
    medium: 1.5,
    large: 2,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const total =
      prices[formData.service] * sizes[formData.size];

    setQuoteData({ ...formData, total });
    setShowForm(false);
    setShowQuote(true);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>TOMIWA CLEANING SERVICES</h1>
        <p>We make every corner shine ✨</p>

        <button onClick={() => setShowForm(true)} className="cta-btn">
          Get a Free Quote
        </button>
      </div>

      {/* FORM MODAL */}
      {showForm && (
  <div className="showedForm">
    <h3 className="center">Get a Quote</h3>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="">Select Service</option>
        <option value="home">Home Cleaning</option>
        <option value="office">Office Cleaning</option>
        <option value="postConstruction">
          Post Construction
        </option>
      </select>

      <select
        name="size"
        value={formData.size}
        onChange={handleChange}
        required
      >
        <option value="">Select Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <div className="btn-group">
        <button
          type="button"
          onClick={() => setShowForm(false)}
          className="btn-gray"
        >
          Cancel
        </button>

        <button type="submit" className="btn-primary" onClick={() => setShowQuote(true)}>
          Submit
        </button>
      </div>
    </form>
  </div>
)}

      {/* QUOTE MODAL */}
{showQuote && (
  <div className="quote-box">
    <h3 className="center">Quotation Summary</h3>

    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{quoteData.name}</td>
        </tr>
        <tr>
          <th>Service</th>
          <td>{quoteData.service}</td>
        </tr>
        <tr>
          <th>Size</th>
          <td>{quoteData.size}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td className="price">
            ₦{quoteData.total}
          </td>
        </tr>
      </tbody>
    </table>

    <button
      onClick={() => setShowQuote(false)}
      className="btn-primary full"
    >
      Close
    </button>
  </div>
)}
    </section>
  );
}