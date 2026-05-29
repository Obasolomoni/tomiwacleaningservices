import { motion } from "framer-motion";

function RealEstate() {
  return (
    <div className="bg-gray-50 text-slate-800">
      {/* ================= HERO ================= */}
      <section className="bg-slate-900 text-white py-24 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Real Estate Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Helping you buy, sell and rent properties with confidence and ease.
        </motion.p>
      </section>

      {/* ================= PROPERTY TYPES ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Property Solutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Property Sales",
            "Property Rentals",
            "Land Acquisition",
            "Property Management",
            "Short Let Apartments",
            "Commercial Properties"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">🏠 {item}</h3>
              <p className="text-gray-600 text-sm">
                Trusted and professional real estate service tailored for you.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= FEATURED LISTINGS ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Featured Listings
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[1, 2, 3].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="h-48 bg-gray-300"></div>

                <div className="p-4">
                  <h3 className="font-semibold mb-1">
                    3 Bedroom Apartment
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Lagos, Nigeria
                  </p>

                  <p className="font-semibold text-slate-800">
                    ₦3,500,000 / year
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Why Work With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              { title: "✔ Trusted Agents", desc: "Reliable and verified property deals." },
              { title: "⚡ Fast Process", desc: "Quick property acquisition and rental." },
              { title: "💼 Professional Service", desc: "Handled with expertise and care." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CONTACT / INQUIRY ================= */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Make an Inquiry
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <input
            className="w-full border p-3 mb-4 rounded"
            placeholder="Your Name"
          />

          <input
            className="w-full border p-3 mb-4 rounded"
            placeholder="Phone Number"
          />

          <select className="w-full border p-3 mb-4 rounded">
            <option>Interested In</option>
            <option>Buying</option>
            <option>Renting</option>
          </select>

          <textarea
            className="w-full border p-3 mb-4 rounded"
            placeholder="Tell us what you are looking for"
          ></textarea>

          <button className="w-full bg-slate-900 text-white py-3 rounded hover:bg-slate-800 transition">
            Submit Inquiry
          </button>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Looking for a Property?
        </h2>

        <p className="mb-6 text-gray-300">
          Let us help you find the perfect place.
        </p>

        <a
          href="https://wa.me/2349030884705"
          className="bg-white text-slate-900 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}

export default RealEstate;