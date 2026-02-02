import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import CategorySidebar from "../components/CategorySidebar";
import HeroBanner from "../components/HeroBanner";
import TopCategories from "../components/TopCategories";
import ProductComparison from "../components/ProductComparison";
import CreditCardOffers from "../components/CreditCardOffers";
import PromoAds from "../components/PromoAds";
import ProductRow from "../components/ProductRow";

const API = "http://18.118.142.235:8000";
;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category]);

  const handleSearch = (query) => {
    if (!query.trim()) return;

    fetch(`${API}/products/search/${query}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setCategory("SEARCH");
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetch(`${API}/products`)
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!category || category === "SEARCH") return;
    if (category === "Big Deals") return;

    if (category === "Credit Cards") {
      setProducts([]);
      return;
    }

    fetch(`${API}/products/${category}`)
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);

  }, [category]);

  return (
    <>
      <Navbar onMenu={() => setMenuOpen(true)} onSearch={handleSearch} />

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
          <div className="flex-1 bg-black/40" onClick={() => setMenuOpen(false)} />
        </div>
      )}

      <main className="pt-24 min-h-screen bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">

          {!category && (
            <>
              <HeroBanner />
              <TopCategories onSelect={setCategory} />
              <PromoAds />

              {products.length > 0 && (
                <>
                  <ProductRow title="Trending Deals" products={products.slice(0, 8)} />
                  <ProductRow title="Best Electronics" products={products.slice(8, 16)} />
                  <ProductRow title="Top Picks For You" products={products.slice(16, 24)} />
                </>
              )}
            </>
          )}

          {category && category !== "Credit Cards" && (
            <ProductComparison products={products} />
          )}

          {category === "Credit Cards" && <CreditCardOffers />}

        </div>
      </main>
    </>
  );
}

