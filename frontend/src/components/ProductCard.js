export default function ProductCard({ product }) {

  if (!product) return null;

  const format = v => Number(v).toLocaleString("en-IN");

  const amazon = Number(product.amazonPrice || 0);
  const flipkart = Number(product.flipkartPrice || 0);

  if (!amazon && !flipkart) return null;

  const best = Math.min(amazon, flipkart);
  const store = amazon <= flipkart ? "Amazon" : "Flipkart";

  return (
    <div className="bg-white rounded-2xl p-5 shadow flex flex-col h-full">

      <div className="h-52 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
        <img
          src={product.image}
          className="max-h-44 object-contain"
          alt={product.name}
        />
      </div>

      <h3 className="text-sm font-semibold mb-4 line-clamp-3 min-h-[60px]">
        {product.name}
      </h3>

      <div className="text-sm space-y-1 mb-4">

        <div className="flex justify-between">
          <span>Amazon</span>
          <span className="text-blue-600 font-semibold">₹{format(amazon)}</span>
        </div>

        <div className="flex justify-between">
          <span>Flipkart</span>
          <span className="text-green-600 font-semibold">₹{format(flipkart)}</span>
        </div>

      </div>

      <div className="bg-blue-50 py-3 rounded-xl text-center mb-5 min-h-[70px]">
        <p className="text-xs">Best on {store}</p>
        <p className="text-lg font-bold">₹{format(best)}</p>
      </div>

      <div className="mt-auto flex gap-2">
        <a href={product.amazonLink} className="flex-1 bg-yellow-400 py-2 rounded-lg text-center font-semibold">
          Amazon
        </a>
        <a href={product.flipkartLink} className="flex-1 bg-blue-600 py-2 rounded-lg text-center text-white font-semibold">
          Flipkart
        </a>
      </div>

    </div>
  );
}
