import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

function Home() {
  return (
    <div className="font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center bg-[url('/OriginalCleaningImage.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-900/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-6 max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            One Trusted Brand. <br /> Multiple Reliable Services.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8"
          >
            From professional cleaning to food supply, real estate and media —
            we deliver quality, reliability and excellence across every service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#services"
              className="bg-sky-500 px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition hover:scale-105"
            >
              Explore Services
            </a>

            <Link
              to="/contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 max-w-2xl mx-auto mb-12"
        >
          We provide a range of professional services tailored to meet your needs across multiple industries.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Cleaning",
              desc: "Professional home and office cleaning services tailored to your needs.",
              link: "/cleaning",
              color: "#38bdf8",
            },
            {
              title: "Food Supply",
              desc: "Reliable sourcing and delivery of quality food products.",
              link: "/food",
              color: "#fb923c",
            },
            {
              title: "Real Estate",
              desc: "Helping you find, buy or rent the perfect property.",
              link: "/real-estate",
              color: "#22c55e",
            },
            {
              title: "Fashion",
              desc: "Creative branding, media production and storytelling.",
              link: "/fashion",
              color: "#a855f7",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-gray-50 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Our Business
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are a multi-service business dedicated to delivering excellence across different industries.
            Our goal is simple — to provide reliable, high-quality services that make life easier for our clients.
            Whether you need cleaning, food supply, real estate assistance, or media services,
            we are committed to professionalism, trust, and customer satisfaction.
          </p>
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Why Choose Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            We combine experience, dedication, and attention to detail to deliver exceptional service every time.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "✔ Trusted",
                desc: "Proven track record of satisfied clients across multiple services.",
              },
              {
                title: "⚡ Reliable",
                desc: "We deliver on time and ensure consistent quality.",
              },
              {
                title: "💎 Quality",
                desc: "High standards and attention to detail in every service.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 bg-slate-800 rounded-xl hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-sky-900 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Work With Us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-lg"
        >
          Contact us today and let’s help you get started.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="/contact"
            className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;