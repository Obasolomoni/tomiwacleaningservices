function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300">

      {/* Category */}
      <p className="text-xs text-gray-400 mb-1">
        {product.category}
      </p>

      {/* Name */}
      <h2 className="text-lg font-semibold text-slate-800 mb-2">
        {product.name}
      </h2>

      {/* Price */}
      <p className="text-sky-600 font-bold text-md mb-4">
        ₦{product.price.toLocaleString()}
      </p>

      {/* Button */}
      <button className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-700 transition">
        View Details
      </button>

    </div>
  );
}

export default ProductCard;