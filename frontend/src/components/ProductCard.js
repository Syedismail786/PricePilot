export default function ProductCard({ p }) {

  if (!p) return null;

  const formatINR = (price) =>
    Number(price || 0).toLocaleString("en-IN");

  const amazon = Number(p.amazonPrice || 0);
  const flipkart = Number(p.flipkartPrice || 0);

  if (!amazon && !flipkart) return null;

  const bestPrice = Math.min(amazon, flipkart);
  const bestStore = amazon <= flipkart ? "Amazon" : "Flipkart";

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col min-w-[220px]">

      {/* IMAGE */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4 flex justify-center items-center h-48">
        <img
          src={p.image}
          alt={p.name}
          className="max-h-full object-contain"
          onError={(e) => e.target.src = "/no-image.png"}
        />
      </div>

      {/* NAME */}
      <h3 className="font-semibold text-sm mb-4 line-clamp-2">
        {p.name}
      </h3>

      {/* PRICES */}
      <div className="space-y-1 mb-4 text-sm">
        <div className="flex justify-between">
          <span>Amazon</span>
          <span className="text-blue-600 font-semibold">
            ₹{formatINR(amazon)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Flipkart</span>
          <span className="text-green-600 font-semibold">
            ₹{formatINR(flipkart)}
          </span>
        </div>
      </div>

      {/* BEST */}
      <div className="bg-blue-50 rounded-xl py-3 text-center mb-4">
        <p className="text-xs">Best price on {bestStore}</p>
        <p className="text-lg font-bold text-blue-700">
          ₹{formatINR(bestPrice)}
        </p>
      </div>

      {/* LINKS */}
      <div className="mt-auto flex gap-2">
        <a
          href={p.amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg text-center font-semibold"
        >
          Amazon
        </a>

        <a
          href={p.flipkartLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center font-semibold"
        >
          Flipkart
        </a>
      </div>

    </div>
  );
}
