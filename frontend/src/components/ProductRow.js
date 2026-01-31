import ProductCard from "./ProductCard";

export default function ProductRow({ title, products = [] }) {
  return (
    <div className="mb-20">

      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-3">
        {products.map(p => (
          <div key={p._id} className="min-w-[220px]">
            <ProductCard p={p} />   {/* ✅ correct prop */} 
          </div>
        ))}
      </div>

    </div>
  );
}

