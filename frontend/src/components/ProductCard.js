export default function ProductCard({ product }) {

  if (!product) return null;

  const formatINR = (v) => Number(v).toLocaleString("en-IN");

  const amazon = Number(product.amazonPrice);
  const flipkart = Number(product.flipkartPrice);

  if (!amazon && !flipkart) return null;

  const bestPrice = Math.min(amazon, flipkart);
  const bestStore = amazon <= flipkart ? "Amazon" : "Flipkart";

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all flex flex-col">

      {/* IMAGE */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 object-contain"
        />
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-sm leading-snug mb-4 line-clamp-3">
        {product.name}
      </h3>

      {/* PRICES */}
      <div className="space-y-1 text-sm mb-4">

        <div className="flex justify-between">
          <span className="text-gray-500">Amazon</span>
          <span className="text-blue-600 font-semibold">
            ₹{formatINR(amazon)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Flipkart</span>
          <span className="text-green-600 font-semibold">
            ₹{formatINR(flipkart)}
          </span>
        </div>

      </div>

      {/* BEST PRICE */}
      <div className="bg-blue-50 rounded-xl py-3 text-center mb-6">
        <p className="text-xs text-gray-600">Best on {bestStore}</p>
        <p className="text-lg font-bold text-blue-700">
          ₹{formatINR(bestPrice)}
        </p>
      </div>

      {/* BUTTONS */}
      <div className="mt-auto flex gap-2">

        <a
          href={product.amazonLink}
          target="_blank"
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg text-center font-semibold"
        >
          Amazon
        </a>

        <a
          href={product.flipkartLink}
          target="_blank"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center font-semibold"
        >
          Flipkart
        </a>

      </div>
    </div>
  );
}
