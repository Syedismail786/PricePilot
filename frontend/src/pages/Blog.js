import { Link } from "react-router-dom";

export default function Blog() {

 const posts = [
  {
    title: "How to Save Money Using Price Comparison Apps",
    excerpt: "Learn smart ways to compare prices and never overpay online again.",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Best Online Deals You Shouldn't Miss This Month",
    excerpt: "Top discounts from Amazon, Flipkart and more.",
    date: "Jan 18, 2026",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Credit Card Offers That Save You Thousands",
    excerpt: "Discover cashback tricks and instant discount offers.",
    date: "Jan 22, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  }
];


  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg opacity-90">
          Shopping smarter every day 💡
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden 
                       hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                {post.date}
              </p>

              <h3 className="text-xl font-bold mb-3">
                {post.title}
              </h3>

              <p className="text-gray-600">
                {post.excerpt}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* HOME BUTTON CENTER */}
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
