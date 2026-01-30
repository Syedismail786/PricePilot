import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaArrowUp
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 relative">

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">About PriceCompress</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-orange-400">Blog</Link></li>
           
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Useful Reads</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/terms" className="hover:text-orange-400">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-400">Privacy & Cookie Policy</Link></li>
            
          </ul>
        </div>

        {/* Column 3 */}
      

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:text-orange-400">Help</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Section */}
      <div className="max-w-7xl mx-auto px-6 pb-12 border-t border-slate-700">

        <h3 className="text-white font-semibold mb-4 mt-8">Let’s Get Social</h3>

        <div className="flex gap-4 mb-8">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map(
            (Icon, index) => (
              <div
                key={index}
                className="bg-white text-slate-900 p-3 rounded-full cursor-pointer hover:bg-orange-400 transition"
              >
                <Icon />
              </div>
            )
          )}
        </div>

        <h3 className="text-white font-semibold mb-4">Download App</h3>

        <div className="flex gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            className="h-12 cursor-pointer"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            className="h-12 cursor-pointer"
          />
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 py-4 border-t border-slate-700">
        © {new Date().getFullYear()} PriceCompress. All rights reserved.
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}
