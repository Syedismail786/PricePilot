import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="text-center py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-lg opacity-90">
          Please read carefully before using PricePilot
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-10">

        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing PricePilot, you agree to comply with all terms and policies
            stated on this platform.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">2. Service Usage</h2>
          <p className="text-gray-600 leading-relaxed">
            Our platform provides product comparisons, deals, and offers for
            informational purposes only.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
          <p className="text-gray-600 leading-relaxed">
            Users must provide accurate information and not misuse the service
            for fraudulent activity.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">4. Third Party Links</h2>
          <p className="text-gray-600 leading-relaxed">
            PricePilot may link to external platforms like Amazon or Flipkart.
            We are not responsible for their content or transactions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">5. Modifications</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update these terms at any time without notice.
          </p>
        </div>

      </div>

      {/* HOME BUTTON */}
      <div className="flex justify-center pb-20">
        <Link
          to="/"
          className="bg-indigo-600 text-white px-12 py-3 rounded-full
                     font-semibold shadow-lg hover:bg-indigo-700
                     hover:scale-105 transition-all"
        >
          Home
        </Link>
      </div>

    </div>
  );
}
