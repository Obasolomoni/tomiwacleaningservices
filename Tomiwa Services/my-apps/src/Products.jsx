import React, { useRef } from "react";

export default function Products() {
  const containerRef = useRef(null);

  const handleNext = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handlePrev = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const products = [
    { id: 1, name: "Air Freshener", size: "200ml", img: "/images/air1.jpg" },
    { id: 2, name: "Floor Cleaner", size: "1L", img: "/images/floor1.jpg" },
    { id: 3, name: "Disinfectant", size: "500ml", img: "/images/disinfectant.jpg" },
    { id: 4, name: "Glass Cleaner", size: "750ml", img: "/images/glass1.jpg" },
    { id: 5, name: "Multi-purpose Spray", size: "500ml", img: "/images/spray.jpg" },
    { id: 6, name: "Laundry Soap", size: "250g", img: "/images/laundry.jpg" },
    { id: 7, name: "Bleach", size: "1L", img: "/images/bleach.jpg" },
  ];

  return (
    <section id="products" style={{ padding: "50px", background: "#dee2e6" }}>
      <h2 className="text-center mb-4">Our Products</h2>

      <div className="products-slider">
        <button className="arrow-btn left" onClick={handlePrev}>
          ❮
        </button>

        <div className="products-grid" ref={containerRef}>
          {products.map((product) => (
            <div className="products-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <span>{product.size}</span>
            </div>
          ))}
        </div>

        <button className="arrow-btn right" onClick={handleNext}>
          ❯
        </button>
      </div>
    </section>
  );
}
