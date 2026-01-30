export default function HeroBanner() {
  const promos = [
    {
      title: "Amazon Deals",
      subtitle: "Up to 80% Off",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      link: "https://www.amazon.in/deals",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      title: "Flipkart Offers",
      subtitle: "50–90% Discount",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
      link: "https://www.flipkart.com/offers-store",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Credit Card Offers",
      subtitle: "Extra Cashback",
      logo: "https://cdn-icons-png.flaticon.com/512/4305/4305615.png",
      link: "https://www.hdfcbank.com/personal/pay/cards/credit-cards",
      gradient: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {promos.map((p, i) => (
        <a
          key={i}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`promo-card bg-gradient-to-br ${p.gradient}`}
        >
          <img src={p.logo} className="promo-logo" />

          <div className="promo-text">
            <h2>{p.title}</h2>
            <p>{p.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
