import { motion } from "framer-motion";

function Cleaning() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="bg-slate-900 text-white py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Professional Cleaning Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto"
        >
          We deliver spotless results for homes, offices and commercial spaces.
        </motion.p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Cleaning Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Home Cleaning",
            "Office Cleaning",
            "Deep Cleaning",
            "Post Construction Cleaning",
            "Move-in / Move-out Cleaning",
            "Industrial Cleaning"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-2">🧹 {item}</h3>
              <p className="text-gray-600 text-sm">
                High-quality service tailored to your needs.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Our Cleaning Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              { title: "✔ Professional Team", desc: "Experienced and trained cleaners." },
              { title: "⚡ Fast Service", desc: "Quick and efficient service delivery." },
              { title: "💎 Quality Guaranteed", desc: "We ensure top-notch results." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= BOOKING FORM ================= */}
      <section className="bg-white text-black py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Book a Cleaning Service
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex p-6 rounded-xl shadow gap- 20 flex-wrap"
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
            <option>Select Service</option>
            <option>Home Cleaning</option>
            <option>Office Cleaning</option>
            <option>Deep Cleaning</option>
          </select>

          <textarea
            className="w-full border p-3 mb-4 rounded"
            placeholder="Additional Details"
          ></textarea>

          <button className="w-full bg-gray-700 text-white py-3 rounded hover:bg-slate-800 transition">
            Submit Request
          </button>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Food Supplies Urgently?
        </h2>

        <p className="mb-6">
          Contact us now and we’ll deliver quickly.
        </p>

        <a
          href="https://wa.me/2349030884705"
          className="bg-white text-slate-500 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}

export default Cleaning;