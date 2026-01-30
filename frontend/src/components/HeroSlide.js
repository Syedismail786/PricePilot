export default function HeroSlide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* AMAZON */}
      <div className="h-48 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500
                      text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold">Up to 80% Off</h2>
          <p className="mt-2 text-sm">Across Categories</p>
        </div>
        <span className="bg-white text-orange-500 px-4 py-1 rounded-full text-sm w-fit">
          Rewards Available
        </span>
      </div>

      {/* FLIPKART */}
      <div className="h-48 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500
                      text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold">50–90% Off</h2>
          <p className="mt-2 text-sm">Across Categories</p>
        </div>
        <span className="bg-white text-blue-500 px-4 py-1 rounded-full text-sm w-fit">
          Cashback Deals
        </span>
      </div>

      {/* AJIO */}
      <div className="h-48 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700
                      text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold">50–90% Off</h2>
          <p className="mt-2 text-sm">+ Flat 10% Cashback</p>
        </div>
        <span className="bg-white text-gray-800 px-4 py-1 rounded-full text-sm w-fit">
          Limited Offer
        </span>
      </div>

    </div>
  );
}
