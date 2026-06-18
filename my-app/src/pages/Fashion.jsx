import { motion } from "framer-motion";

function Fashion() {
  return (
    <div className="bg-gray-50 text-slate-800 rounded-b-md">

      {/* ================= HERO ================= */}
      <section className="bg-slate-950 text-white py-24 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Nails & Fashion Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Elevate your style with elegant nail designs and fashion services tailored to your unique beauty.
        </motion.p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Nail Extensions",
            "Gel Polish & Manicure",
            "Pedicure Treatments",
            "Custom Nail Designs",
            "Fashion Styling",
            "Personal Shopping Assistance"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">
                💅 {item}
              </h3>
              <p className="text-gray-600 text-sm">
                Premium beauty and fashion service designed to enhance your confidence and style.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-200 rounded-xl h-48 overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="h-full w-full flex items-center justify-center text-gray-500">
                  Nail / Fashion Preview
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              { title: "💅 Skilled Professionals", desc: "Experienced nail technicians and stylists." },
              { title: "✨ Premium Quality", desc: "We use high-quality products for lasting beauty." },
              { title: "💖 Personalized Style", desc: "Every service is tailored to your unique look." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-950 text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Elevate Your Style?
        </h2>

        <p className="text-gray-300 mb-6">
          Book your nail and fashion session today and step out with confidence.
        </p>

        <a
          href="https://wa.me/2349030884705?text=Hello%20I%20want%20to%20book%20a%20nails%20or%20fashion%20service"
          className="bg-white text-slate-900 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        >
          Book on WhatsApp
        </a>
      </section>

    </div>
  );
}

export default Fashion;