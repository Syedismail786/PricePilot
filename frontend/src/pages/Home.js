import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import CategorySidebar from "../components/CategorySidebar";
import HeroBanner from "../components/HeroBanner";
import TopCategories from "../components/TopCategories";
import ProductComparison from "../components/ProductComparison";
import CreditCardOffers from "../components/CreditCardOffers";
import PromoAds from "../components/PromoAds";
import ProductRow from "../components/ProductRow";

// Backend API
const API = "http://localhost:8000";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category]);

  // 🔍 Search
  const handleSearch = async (query) => {
    if (!query.trim()) return;

    try {
      setLoading(true);
      const res = await fetch(`${API}/products/search/${query}`);
      const data = await res.json();
      setProducts(data);
      setCategory("SEARCH");
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 📦 Load all products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // 📂 Load by category (sidebar click)
  useEffect(() => {
    if (!category || category === "SEARCH") return;

    if (category === "Credit Cards") {
      setProducts([]);
      return;
    }

    const loadCategory = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API}/products/${category}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Category error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadCategory();
  }, [category]);

  /* ---------------- CATEGORY FILTERING ---------------- */

  const mobiles = products.filter(p => p.category === "Mobiles");
  const laptops = products.filter(p => p.category === "Laptops");
  const tvs = products.filter(p => p.category === "TVs");

  return (
    <>
      <Navbar onMenu={() => setMenuOpen(true)} onSearch={handleSearch} />

      {/* Sidebar */}
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

          {/* HOME UI */}
          {!category && (
            <>
              <HeroBanner />
              <TopCategories onSelect={setCategory} />
              <PromoAds />

              {mobiles.length > 0 && (
                <ProductRow
                  title="Trending Deals"
                  products={mobiles.slice(0, 8)}
                />
              )}

              {laptops.length > 0 && (
                <ProductRow
                  title="Best Electronics"
                  products={laptops.slice(0, 8)}
                />
              )}

              {tvs.length > 0 && (
                <ProductRow
                  title="Top Picks For You"
                  products={tvs.slice(0, 8)}
                />
              )}
            </>
          )}

          {/* LOADING */}
          {loading && (
            <p className="text-center py-20 text-gray-500">
              Loading products...
            </p>
          )}

          {/* CATEGORY / SEARCH GRID */}
          {category && !loading && (
            <ProductComparison products={products} />
          )}

          {/* CREDIT CARD OFFERS */}
          {category === "Credit Cards" && <CreditCardOffers />}

        </div>
      </main>
    </>
  );
}
