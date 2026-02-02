export default function ProductComparison({ products }) {

  const formatINR = v => Number(v || 0).toLocaleString("en-IN");

  if (!products || !products.length) {
    return <p className="text-center mt-10 text-gray-500">No products found</p>;
  }

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
            className="
              bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl
              transition flex flex-col
              h-[540px]   /* 🔒 FULL CARD HEIGHT LOCK */
            "
          >

            {/* 🖼 IMAGE BOX — fixed */}
            <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
              <img
                src={p.image}
                alt={p.name}
                onError={e => e.target.src="https://via.placeholder.com/300"}
                className="max-h-40 object-contain"
              />
            </div>

            {/* 📛 TITLE — fixed height */}
            <h3 className="font-semibold text-sm leading-snug line-clamp-3 h-[64px] mb-3">
              {p.name}
            </h3>

            {/* 💰 PRICES — fixed block */}
            <div className="space-y-1 text-sm mb-3 h-[52px]">
              <div className="flex justify-between">
                <span>Amazon</span>
                <span className="font-semibold text-blue-600">
                  ₹{formatINR(amazon)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Flipkart</span>
                <span className="font-semibold text-green-600">
                  ₹{formatINR(flipkart)}
                </span>
              </div>
            </div>

            {/* ⭐ BEST PRICE — fixed */}
            <div className="bg-blue-50 rounded-xl py-3 text-center h-[72px] mb-4 flex flex-col justify-center">
              <p className="text-xs">Best on {bestStore}</p>
              <p className="text-lg font-bold">
                ₹{formatINR(bestPrice)}
              </p>
            </div>

            {/* 🔘 BUTTONS ALWAYS BOTTOM */}
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
