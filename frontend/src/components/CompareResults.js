export default function CompareResults({ results }) {
  if (!results) return null;

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

      {results.all_prices.map((p) => (
        <div
          key={p.platform}
          className={`p-5 rounded-xl border shadow-sm ${
            p.platform === results.best_deal.platform
              ? "border-green-500 bg-green-50"
              : "bg-white"
          }`}
        >
          <h3 className="font-semibold">{p.platform}</h3>
          <p className="text-2xl font-bold mt-2">₹{p.price}</p>
          <p className="text-sm text-gray-500">Delivery: {p.delivery}</p>

          {p.platform === results.best_deal.platform && (
            <span className="inline-block mt-2 text-green-600 text-sm font-medium">
              Best Deal
            </span>
          )}

          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="block mt-3 text-blue-600"
          >
            Buy Now →
          </a>
        </div>
      ))}
    </div>
  );
}
