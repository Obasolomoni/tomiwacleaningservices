import { BsWhatsapp, BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 px-6">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Address */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Address
          </h3>
          <p className="text-sm leading-relaxed">
            10, Peculiar People Street,<br />
            Eleko Bus Stop, Iju Otta,<br />
            Ogun State, Nigeria.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Reach Us
          </h3>
          <p className="text-sm mb-2">📞 +234 903 088 4705</p>
          <p className="text-sm">📧 info@tomiwacleaning.com</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl">
            <a
              href="https://wa.me/2349030884705"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <BsWhatsapp />
            </a>

            <a
              href="https://twitter.com/@koladeanuoluwa4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <BsTwitterX />
            </a>

            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <BsInstagram />
            </a>

            <a
              href="https://facebook.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <BsFacebook />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2026 Tomiwa Cleaning Services. All rights reserved.
      </div>

    </footer>
  );
}