import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

function Home() {
  return (
    <div className="font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center bg-[url('/OriginalCleaningImage.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-900/70"></div>

        <div className="relative text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            One Trusted Brand. <br /> Multiple Reliable Services.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            From professional cleaning to food supply, real estate and media —
            we deliver quality, reliability and excellence across every service.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="bg-sky-500 px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition"
            >
              Explore Services
            </a>

            <Link
              to="/contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          We provide a range of professional services tailored to meet your needs across multiple industries.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Cleaning"
            desc="Professional home and office cleaning services tailored to your needs."
            link="/cleaning"
            color="#38bdf8"
          />

          <ServiceCard
            title="Food Supply"
            desc="Reliable sourcing and delivery of quality food products."
            link="/food"
            color="#fb923c"
          />

          <ServiceCard
            title="Real Estate"
            desc="Helping you find, buy or rent the perfect property."
            link="/real-estate"
            color="#22c55e"
          />

          <ServiceCard
            title="Media"
            desc="Creative branding, media production and storytelling."
            link="/media"
            color="#a855f7"
          />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Our Business
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are a multi-service business dedicated to delivering excellence across different industries.
            Our goal is simple — to provide reliable, high-quality services that make life easier for our clients.
            Whether you need cleaning, food supply, real estate assistance, or media services,
            we are committed to professionalism, trust, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Us?
          </h2>

          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            We combine experience, dedication, and attention to detail to deliver exceptional service every time.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">✔ Trusted</h3>
              <p className="text-gray-400 text-sm">
                Proven track record of satisfied clients across multiple services.
              </p>
            </div>

            <div className="p-6 bg-slate-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">⚡ Reliable</h3>
              <p className="text-gray-400 text-sm">
                We deliver on time and ensure consistent quality.
              </p>
            </div>

            <div className="p-6 bg-slate-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">💎 Quality</h3>
              <p className="text-gray-400 text-sm">
                High standards and attention to detail in every service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-sky-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Work With Us?
        </h2>

        <p className="mb-6 text-lg">
          Contact us today and let’s help you get started.
        </p>

        <Link
          to="/contact"
          className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default Home;