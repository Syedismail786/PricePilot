import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg opacity-90">
          Your privacy matters to us 🔐
        </p>
      </div>

      {/* POLICY CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-10">

        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We collect basic personal details such as name, email, and phone number
            when you register. We also collect browsing activity to improve deal accuracy.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Data</h2>
          <p className="text-gray-600 leading-relaxed">
            Your information is used to provide personalized deals, price alerts,
            secure login access, and better shopping experiences.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">3. Data Protection</h2>
          <p className="text-gray-600 leading-relaxed">
            We use industry-standard security measures to protect your personal data.
            Your information is never sold to third parties.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">4. Cookies & Tracking</h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies help us remember preferences and analyze traffic for better service.
            You can disable cookies anytime in your browser.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">5. Policy Updates</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this policy occasionally. Changes will be posted here with
            updated revision dates.
          </p>
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
