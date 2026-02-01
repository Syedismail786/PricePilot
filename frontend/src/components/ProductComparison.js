export default function ProductComparison({ products }) {

  const formatINR = v => Number(v || 0).toLocaleString("en-IN");

  if (!products.length) return <p>No products found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {products.map(p => {

        const amazon = Number(p.amazonPrice || 0);
        const flipkart = Number(p.flipkartPrice || 0);

        if (!amazon && !flipkart) return null;

        const bestPrice = Math.min(amazon, flipkart);
        const bestStore = amazon <= flipkart ? "Amazon" : "Flipkart";

        return (
          <div
            key={p.name}
            className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition flex flex-col h-[520px]"
          >

            {/* IMAGE – locked */}
            <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
              <img
                src={p.image}
                alt={p.name}
                onError={(e) => e.target.src = "https://via.placeholder.com/300"}
                className="max-h-40 object-contain"
              />
            </div>

            {/* TITLE – locked height */}
            <h3 className="font-semibold text-sm leading-snug mb-3 line-clamp-3 h-[64px]">
              {p.name}
            </h3>

            {/* PRICES */}
            <div className="space-y-1 text-sm mb-3">
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

            {/* BEST PRICE – fixed */}
            <div className="bg-blue-50 rounded-xl py-3 text-center mb-4 h-[72px] flex flex-col justify-center">
              <p className="text-xs">Best on {bestStore}</p>
              <p className="text-lg font-bold">
                ₹{formatINR(bestPrice)}
              </p>
            </div>

            {/* BUTTONS always bottom */}
            <div className="mt-auto flex gap-2">
              <a
                href={p.amazonLink}
                target="_blank"
                className="flex-1 bg-yellow-400 py-2 rounded-lg text-center font-semibold"
              >
                Amazon
              </a>

              <a
                href={p.flipkartLink}
                target="_blank"
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center font-semibold"
              >
                Flipkart
              </a>
            </div>

          </div>
        );
      })}
    </div>
  );
}
