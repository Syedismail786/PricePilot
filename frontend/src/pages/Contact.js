import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-90">
          We’d love to hear from you 📩
        </p>
      </div>

      {/* CONTACT CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div className="space-y-6">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">📍 Our Office</h3>
            <p className="text-gray-600">
              Hyderabad, India
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">📧 Email</h3>
            <p className="text-gray-600">
              support@pricepilot.com
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">📞 Phone</h3>
            <p className="text-gray-600">
              +91 98765 43210
            </p>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form
          className="bg-white rounded-2xl shadow-xl p-10 space-y-6 
                     hover:shadow-2xl transition"
        >

          <h2 className="text-2xl font-bold text-center">
            Send a Message
          </h2>

          <input
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
                       font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

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
