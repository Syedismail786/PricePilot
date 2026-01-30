export default function CreditCardOffers() {
  const offers = [
  {
    bank: "HDFC Bank",
    offer: "10% Instant Discount up to ₹3000",
    link: "https://www.hdfcbank.com/personal/pay/cards",
    color: "from-blue-600 to-indigo-700",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg"
  },
  {
    bank: "ICICI Bank",
    offer: "No Cost EMI for 12 Months",
    link: "https://www.icicibank.com/credit-card",
    color: "from-orange-500 to-red-600",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg"
  },
  {
    bank: "Axis Bank",
    offer: "5% Cashback on Electronics",
    link: "https://www.axisbank.com/retail/cards",
    color: "from-purple-600 to-pink-600",
    logo: "https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png"

  }
];

  return (
    <div className="grid md:grid-cols-3 gap-10 mt-12">

      {offers.map((o, i) => (
        <a
          key={i}
          href={o.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative rounded-2xl p-8 text-white shadow-xl 
          bg-gradient-to-br ${o.color}
          hover:scale-105 transition-all duration-300`}
        >

          {/* Bank Logo */}
          <img
  src={o.logo}
  alt={o.bank}
  className={`bg-white rounded-xl mb-6 shadow object-contain
    ${o.bank === "Axis Bank"
      ? "h-16 px-2 py-2 scale-125"
      : "h-12 px-4 py-2"}
  `}
/>
          <p className="text-sm opacity-80 mb-4">
            Credit Card Offer
          </p>

          <h3 className="text-2xl font-bold mb-3">
            {o.bank}
          </h3>

          <p className="text-lg font-medium">
            {o.offer}
          </p>

          <div className="mt-8 text-sm font-semibold opacity-90">
            Apply Now →
          </div>

        </a>
      ))}

    </div>
  );
}
