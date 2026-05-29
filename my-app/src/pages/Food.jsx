import { motion } from "framer-motion";

function Food() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="bg-slate-800 text-white py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Food Supply Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto"
        >
          Supplying fresh, quality and affordable food products for homes,
          businesses and events.
        </motion.p>
      </section>

      {/* ================= WHAT WE SUPPLY ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-10"
        >
          What We Supply
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "🍚 Grains & Staples",
              desc: "Rice, beans, garri, yam and other essential food staples."
            },
            {
              title: "🥩 Proteins",
              desc: "Fresh meat, fish, chicken and other protein sources."
            },
            {
              title: "🥬 Vegetables",
              desc: "Fresh vegetables sourced directly for quality and freshness."
            },
            {
              title: "🍱 Bulk Supply",
              desc: "Food supply for events, restaurants and large orders."
            },
            {
              title: "🚚 Delivery",
              desc: "Fast and reliable delivery to your doorstep."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition hover:scale-105"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold mb-6"
          >
            Why Choose Our Food Supply?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-10"
          >
            We ensure quality, freshness and reliability in every order.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: "✔ Fresh Products",
                desc: "We source and deliver fresh food items every time."
              },
              {
                title: "⚡ Fast Delivery",
                desc: "Timely delivery you can rely on."
              },
              {
                title: "💰 Affordable",
                desc: "Competitive pricing without compromising quality."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= ORDER FORM ================= */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold mb-6 text-center"
        >
          Place an Order
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <input
            className="w-full border p-3 mb-4 rounded focus:scale-[1.01] transition"
            placeholder="Your Name"
          />

          <input
            className="w-full border p-3 mb-4 rounded focus:scale-[1.01] transition"
            placeholder="Phone Number"
          />

          <textarea
            className="w-full border p-3 mb-4 rounded focus:scale-[1.01] transition"
            placeholder="What food items do you need?"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-slate-900 text-white py-3 rounded hover:bg-slate-700 transition"
          >
            Submit Order
          </motion.button>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-500 text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Need Food Supplies Urgently?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          Contact us now and we’ll deliver quickly.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/2349030884705"
          className="bg-white text-slate-500 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Chat on WhatsApp
        </motion.a>
      </section>
    </div>
  );
}

export default Food;