
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        {/* BIG 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-slate-700 mb-4">
          404
        </h1>

        {/* MESSAGE */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8">
          Oops… the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">

          <Link
            to="/"
            className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Go Home
          </Link>

          <a
            href="https://wa.me/2349030884705"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition"
          >
            Contact Us
          </a>

        </div>

        {/* SMALL EXTRA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs text-gray-600 mt-10"
        >
          Error code: 404 • Route not found
        </motion.p>

      </motion.div>

    </div>
  );
}