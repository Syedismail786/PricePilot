export default function ProductComparison({ products }) {

  const formatINR = (price) => Number(price).toLocaleString("en-IN");

  if (!products.length) {
    return <p>No products found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {products.map(p => {

        const bestPrice = Math.min(p.amazonPrice, p.flipkartPrice);
        const bestStore =
          p.amazonPrice <= p.flipkartPrice ? "Amazon" : "Flipkart";

        return (
          <div
            key={p.name}
            className="bg-white rounded-2xl p-5 shadow hover:shadow-xl flex flex-col"
          >

            <div className="bg-gray-50 rounded-xl p-4 mb-4 flex justify-center">
              <img
                src={p.image}
                alt={p.name}
                onError={(e)=>e.target.src="https://via.placeholder.com/300"}
                className="h-48 object-contain"
              />
            </div>

            <h3 className="font-semibold mb-4">{p.name}</h3>

            <div className="space-y-1 mb-4">
              <div className="flex justify-between">
                <span>Amazon</span>
                <span>₹{formatINR(p.amazonPrice)}</span>
              </div>

              <div className="flex justify-between">
                <span>Flipkart</span>
                <span>₹{formatINR(p.flipkartPrice)}</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl py-3 text-center mb-5">
              <p>Best on {bestStore}</p>
              <p className="font-bold">₹{formatINR(bestPrice)}</p>
            </div>

            <div className="mt-auto flex gap-2">
              <a href={p.amazonLink} target="_blank"
                className="flex-1 bg-yellow-400 py-2 rounded text-center">
                Amazon
              </a>

              <a href={p.flipkartLink} target="_blank"
                className="flex-1 bg-blue-600 text-white py-2 rounded text-center">
                Flipkart
              </a>
            </div>

          </div>
        );
      })}
    </div>
  );
}
