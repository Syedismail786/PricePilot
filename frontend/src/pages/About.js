import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 text-white py-28">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h1 className="text-6xl font-extrabold mb-6">
            Built to Save You Money
          </h1>

          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
            PricePilot compares thousands of deals in seconds — so you always pay the lowest price.
          </p>

          <Link
            to="/"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            ⬅ Back to Home
          </Link>
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe no one should overpay online.  
            Our mission is to bring transparency, speed and savings to every purchase.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 rounded-3xl p-12 shadow-xl"
        >
          <ul className="space-y-5 text-lg">
            🔍 Real-time comparison  
            💸 Best deal detection  
            🎯 Smart alerts  
            🔒 Trusted partners  
          </ul>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-14 text-center">

          {[
            ["1M+", "Users"],
            ["25K+", "Deals / Day"],
            ["₹50Cr+", "Saved"]
          ].map(([num, label], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-slate-800 rounded-2xl p-12 shadow-lg"
            >
              <h3 className="text-5xl font-bold text-cyan-400">{num}</h3>
              <p className="mt-2 text-gray-300">{label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Start Saving Smarter Today
        </motion.h2>

        <Link
          to="/"
          className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Explore Deals
        </Link>
      </section>

    </div>
  );
}
