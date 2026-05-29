function Food() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="bg-orange-500 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Food Supply Services
        </h1>

        <p className="text-lg max-w-2xl mx-auto">
          Supplying fresh, quality and affordable food products for homes,
          businesses and events.
        </p>
      </section>

      {/* ================= WHAT WE SUPPLY ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Supply
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">🍚 Grains & Staples</h3>
            <p className="text-gray-600 text-sm">
              Rice, beans, garri, yam and other essential food staples.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">🥩 Proteins</h3>
            <p className="text-gray-600 text-sm">
              Fresh meat, fish, chicken and other protein sources.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">🥬 Vegetables</h3>
            <p className="text-gray-600 text-sm">
              Fresh vegetables sourced directly for quality and freshness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">🍱 Bulk Supply</h3>
            <p className="text-gray-600 text-sm">
              Food supply for events, restaurants and large orders.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">🚚 Delivery</h3>
            <p className="text-gray-600 text-sm">
              Fast and reliable delivery to your doorstep.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Our Food Supply?
          </h2>

          <p className="text-gray-600 mb-10">
            We ensure quality, freshness and reliability in every order.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">✔ Fresh Products</h3>
              <p className="text-sm text-gray-500">
                We source and deliver fresh food items every time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">⚡ Fast Delivery</h3>
              <p className="text-sm text-gray-500">
                Timely delivery you can rely on.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">💰 Affordable</h3>
              <p className="text-sm text-gray-500">
                Competitive pricing without compromising quality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ORDER FORM ================= */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Place an Order
        </h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <input
            className="w-full border p-3 mb-4 rounded"
            placeholder="Your Name"
          />

          <input
            className="w-full border p-3 mb-4 rounded"
            placeholder="Phone Number"
          />

          <textarea
            className="w-full border p-3 mb-4 rounded"
            placeholder="What food items do you need?"
          ></textarea>

          <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition">
            Submit Order
          </button>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-orange-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Food Supplies Urgently?
        </h2>

        <p className="mb-6">
          Contact us now and we’ll deliver quickly.
        </p>

        <a
          href="https://wa.me/2349030884705"
          className="bg-white text-orange-500 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}

export default Food;