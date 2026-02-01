export default function ProductComparison({ products }) {

  const formatINR = v => Number(v || 0).toLocaleString("en-IN");

  if (!products.length) return <p>No products found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">

      {products.map(p => {

        const amazon = Number(p.amazonPrice || 0);
        const flipkart = Number(p.flipkartPrice || 0);

        if (!amazon && !flipkart) return null;

        const bestPrice = Math.min(amazon, flipkart);
        const bestStore = amazon <= flipkart ? "Amazon" : "Flipkart";

        return (
          <div
            key={p.name}
            className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition flex flex-col h-full"
          >

            {/* IMAGE – fixed height */}
            <div className="h-52 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
              <img
                src={p.image}
                alt={p.name}
                onError={(e) => e.target.src = "https://via.placeholder.com/300"}
                className="max-h-44 object-contain"
              />
            </div>

            {/* TITLE – fixed block */}
            <h3 className="font-semibold text-sm mb-4 line-clamp-3 min-h-[60px]">
              {p.name}
            </h3>

            {/* PRICES */}
            <div className="space-y-1 text-sm mb-4">
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

            {/* BEST PRICE – fixed height */}
            <div className="bg-blue-50 rounded-xl py-3 text-center mb-5 min-h-[70px]">
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
