import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}