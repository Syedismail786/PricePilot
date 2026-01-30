import { FaBars, FaUserCircle, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ onMenu, onSearch }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <FaBars onClick={onMenu} className="cursor-pointer text-xl" />
          <Link to="/" className="text-2xl font-bold text-orange-500">
            PricePilot
          </Link>
        </div>

        <div className="flex items-center w-[40%] bg-gray-100 rounded-full px-4 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch && onSearch(e.target.value);
            }}
            placeholder="Search products..."
            className="bg-transparent w-full outline-none text-sm"
          />
        </div>

        <div className="relative flex items-center gap-4">

          {!isLoggedIn && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded">
                Sign up
              </Link>
            </>
          )}

          {isLoggedIn && (
            <div>
              <div onClick={() => setOpen(!open)} className="cursor-pointer flex items-center gap-2">
                <FaUserCircle />
                {user?.name}
              </div>

              {open && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded p-3">
                  <button onClick={handleLogout} className="text-red-500">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
