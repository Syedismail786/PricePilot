import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="text-center py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Help & Support</h1>
        <p className="text-lg opacity-90">
          We’re here to help you shop smarter 💡
        </p>
      </div>

      {/* HELP CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* LEFT – QUICK HELP */}
        <div className="space-y-6">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">🛒 How price comparison works?</h3>
            <p className="text-gray-600">
              Search any product and we instantly compare prices across multiple stores
              like Amazon and Flipkart to find the best deal.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">💳 How do card offers apply?</h3>
            <p className="text-gray-600">
              We automatically display active bank discounts and cashback offers
              that apply to each product.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">🔔 Can I track price drops?</h3>
            <p className="text-gray-600">
              Yes! You can save products and receive alerts when prices drop.
            </p>
          </div>

        </div>

        {/* RIGHT – SUPPORT OPTIONS */}
        <div className="space-y-6">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">📧 Email Support</h3>
            <p className="text-gray-600">support@pricepilot.com</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">📞 Phone Support</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">📚 Help Center</h3>
            <p className="text-gray-600">
              Browse tutorials, guides, and FAQs anytime.
            </p>
          </div>

        </div>

      </div>

      {/* HOME BUTTON */}
      <div className="flex justify-center pb-20">
        <Link
          to="/"
          className="bg-blue-600 text-white px-12 py-3 rounded-full 
                     font-semibold shadow-lg hover:bg-blue-700 
                     hover:scale-105 transition-all"
        >
          Home
        </Link>
      </div>

    </div>
  );
}
