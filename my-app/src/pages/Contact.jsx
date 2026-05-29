import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="bg-gray-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="bg-slate-950 text-white py-24 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          We’re here to help. Reach out to us for any of our services and we’ll respond promptly.
        </motion.p>
      </section>

      {/* ================= CONTACT DETAILS ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">

        {[
          {
            title: "📍 Address",
            desc: "10, Peculiar People Street, Eleko Bus Stop, Iju Otta, Ogun State, Nigeria."
          },
          {
            title: "📞 Phone",
            desc: "+234 903 088 4705"
          },
          {
            title: "📧 Email",
            desc: "info@tomiwacleaning.com"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm text-center"
          >
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}

      </section>

      {/* ================= FORM ================= */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="border p-3 rounded w-full"
              placeholder="Your Name"
            />

            <input
              className="border p-3 rounded w-full"
              placeholder="Phone Number"
            />
          </div>

          <input
            className="border p-3 rounded w-full mt-4"
            placeholder="Email Address"
          />

          <select className="border p-3 rounded w-full mt-4">
            <option>Select Service</option>
            <option>Cleaning</option>
            <option>Food Supply</option>
            <option>Real Estate</option>
            <option>Media</option>
          </select>

          <textarea
            className="border p-3 rounded w-full mt-4"
            placeholder="Your Message"
            rows="4"
          ></textarea>

          <button className="w-full mt-6 bg-slate-900 text-white py-3 rounded hover:bg-slate-800 transition">
            Send Message
          </button>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-900 text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Prefer Quick Response?
        </h2>

        <p className="text-gray-300 mb-6">
          Chat with us directly on WhatsApp.
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

export default Contact;