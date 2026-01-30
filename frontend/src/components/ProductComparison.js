export default function ProductComparison({ products }) {

  const formatINR = (price) => Number(price).toLocaleString("en-IN");

  if (!products.length) {
    return <p className="text-gray-500">No products found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {products.map(p => {
        const bestPrice = Math.min(p.amazonPrice, p.flipkartPrice);
        const bestStore =
          p.amazonPrice <= p.flipkartPrice ? "Amazon" : "Flipkart";

        return (
          <div
            key={p._id}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >

            {/* IMAGE */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="h-48 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* NAME */}
            <h3 className="font-semibold text-sm leading-snug mb-4 line-clamp-2">
              {p.name}
            </h3>

            {/* PRICES */}
            <div className="space-y-1 mb-4">

              <div className="flex justify-between">
                <span className="text-gray-500">Amazon</span>
                <span className="text-blue-600 font-semibold">
                  ₹{formatINR(p.amazonPrice)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Flipkart</span>
                <span className="text-green-600 font-semibold">
                  ₹{formatINR(p.flipkartPrice)}
                </span>
              </div>

            </div>

            {/* BEST PRICE */}
            <div className="bg-blue-50 rounded-xl py-3 text-center mb-5">
              <p className="text-xs text-gray-600">
                Best price on {bestStore}
              </p>
              <p className="text-xl font-bold text-blue-700">
                ₹{formatINR(bestPrice)}
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-auto flex gap-2">

              <a
                href={p.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg text-center font-semibold transition"
              >
                Amazon
              </a>

              <a
                href={p.flipkartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center font-semibold transition"
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
