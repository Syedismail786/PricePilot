import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import CategorySidebar from "../components/CategorySidebar";
import HeroBanner from "../components/HeroBanner";
import TopCategories from "../components/TopCategories";
import ProductComparison from "../components/ProductComparison";
import CreditCardOffers from "../components/CreditCardOffers";
import PromoAds from "../components/PromoAds";
import ProductRow from "../components/ProductRow";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  // ⬆ Scroll to top on category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category]);

  // 🔍 SEARCH
  const handleSearch = (query) => {
    if (!query.trim()) return;

    fetch(`http://127.0.0.1:8000/products/search/${query}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setCategory("SEARCH");
      })
      .catch(console.error);
  };

  // 📡 LOAD ALL PRODUCTS (for homepage preview + big deals)
  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  // 📦 LOAD BY CATEGORY
  useEffect(() => {
    if (!category || category === "SEARCH") return;

    if (category === "Big Deals") return;

    if (category === "Credit Cards") {
      setProducts([]);
      return;
    }

    fetch(`http://127.0.0.1:8000/products/${category}`)
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);

  }, [category]);

  return (
    <>
      <Navbar
        onMenu={() => setMenuOpen(true)}
        onSearch={handleSearch}
      />

      {/* 📂 MOBILE SIDEBAR */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <CategorySidebar
            selected={category}
            onSelect={(cat) => {
              setCategory(cat);
              setMenuOpen(false);
            }}
            onHome={() => {
              setCategory(null);
              setMenuOpen(false);
            }}
            onClose={() => setMenuOpen(false)}
          />
          <div
            className="flex-1 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}

      <main className="pt-24 min-h-screen bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* 🏠 HOMEPAGE EXPERIENCE */}
          {!category && (
            <>
              <HeroBanner />

              <TopCategories onSelect={setCategory} />

              <PromoAds />

              {/* 🛍 Browsing preview rows */}
              {products.length > 0 && (
                <>
                  <ProductRow
                    title="Trending Deals"
                    products={products.slice(0, 8)}
                  />

                  <ProductRow
                    title="Best Electronics"
                    products={products.slice(8, 16)}
                  />

                  <ProductRow
                    title="Top Picks For You"
                    products={products.slice(16, 24)}
                  />
                </>
              )}
            </>
          )}

          {/* 📊 PRODUCT RESULTS */}
          {category && category !== "Credit Cards" && (
            <ProductComparison products={products} />
          )}

          {/* 💳 CREDIT CARDS */}
          {category === "Credit Cards" && <CreditCardOffers />}

        </div>
      </main>
    </>
  );
}
