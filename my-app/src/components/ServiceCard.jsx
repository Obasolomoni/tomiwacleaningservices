import { Link } from "react-router-dom";

function ServiceCard({ title, desc, link, color, icon }) {
  return (
    <Link to={link} className="group">
      <div
        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4"
        style={{ borderColor: color }}
      >
        {/* ICON */}
        <div
          className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-white text-xl"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-500 transition">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {desc}
        </p>

        {/* CTA */}
        <span className="text-sm font-medium text-sky-500 group-hover:underline">
          Learn More →
        </span>
      </div>
    </Link>
  );
}

export default ServiceCard;