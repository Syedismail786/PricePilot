export default function ProductComparison({ products }) {

  const formatINR = v => Number(v || 0).toLocaleString("en-IN");

  if (!products.length) return <p>No products found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {products.map(p => {

        const amazon = parseInt(p.amazonPrice, 10);
        const flipkart = parseInt(p.flipkartPrice, 10);

        const bestPrice = Math.min(amazon, flipkart);
        const bestStore = amazon <= flipkart ? "Amazon" : "Flipkart";

        return (
          <div key={p.name} className="bg-white rounded-2xl p-5 shadow flex flex-col h-[520px]">

            <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
              <img src={p.image} alt={p.name} className="max-h-40 object-contain" />
            </div>

            <h3 className="font-semibold text-sm mb-3 line-clamp-3 h-[64px]">
              {p.name}
            </h3>

            <div className="space-y-1 text-sm mb-3">
              <div className="flex justify-between">
                <span>Amazon</span>
                <span className="text-blue-600 font-semibold">₹{formatINR(amazon)}</span>
              </div>
              <div className="flex justify-between">
                <span>Flipkart</span>
                <span className="text-green-600 font-semibold">₹{formatINR(flipkart)}</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl py-3 text-center mb-4">
              <p className="text-xs">Best on {bestStore}</p>
              <p className="text-lg font-bold">₹{formatINR(bestPrice)}</p>
            </div>

            <div className="mt-auto flex gap-2">
              <a href={p.amazonLink} target="_blank" className="flex-1 bg-yellow-400 py-2 rounded-lg text-center font-semibold">
                Amazon
              </a>
              <a href={p.flipkartLink} target="_blank" className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center font-semibold">
                Flipkart
              </a>
            </div>

          </div>
        );
      })}
    </div>
  );
}
