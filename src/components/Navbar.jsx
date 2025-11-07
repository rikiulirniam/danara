import { useState } from "react";
import { FaMagnifyingGlass, FaUser, FaBell } from "react-icons/fa6";
import { FaHome, FaHeart, FaTags, FaBox, FaTimes } from "react-icons/fa";

export const Navbar = ({ active = "home" }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar - Main Color Style */}
      <nav className="bg-main-color fixed top-0 left-0 right-0 z-[9999] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3 cursor-pointer group flex-shrink-0">
              <div className="relative">
                <div className="relative bg-white p-2 rounded-full shadow-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 56 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.3333 0C23.7194 0 24.1033 0.00932962 24.4847 0.0280265C24.4924 0.0284028 24.4989 0.0222809 24.4989 0.0145938V0.0145938C24.4989 0.00716838 24.5049 0.0011489 24.5123 0.0011489H45.8418C46.2974 0.00137965 46.6667 0.373466 46.6667 0.83295C46.6666 1.05356 46.5798 1.26515 46.4251 1.42119L40.8322 7.05882H52.7444C53.5415 7.05882 54.27 7.52957 54.5456 8.27757C55.4857 10.829 56 13.5892 56 16.4706C56 29.4655 45.5533 40 32.6667 40C32.2808 40 31.8971 39.9896 31.5158 39.9709C31.5078 39.9705 31.5011 39.9768 31.5011 39.9848V39.9848C31.5011 39.9926 31.4949 39.9989 31.4871 39.9989H10.1582C9.7026 39.9986 9.33333 39.6265 9.33333 39.1671C9.33336 38.9464 9.42022 38.7348 9.57487 38.5788L15.1655 32.9412H3.25562C2.45846 32.9412 1.73002 32.4704 1.4544 31.7224C0.514256 29.171 0 26.4109 0 23.5294C0 10.5345 10.4467 0 23.3333 0ZM31.3177 16.6556C29.3919 14.383 26.5301 12.9412 23.3333 12.9412C17.5343 12.9412 12.8333 17.6817 12.8333 23.5294C12.8333 24.7672 13.0456 25.9547 13.4326 27.0588H20.9989L24.6823 23.3444C26.6081 25.617 29.4699 27.0588 32.6667 27.0588C38.4657 27.0588 43.1667 22.3183 43.1667 16.4706C43.1667 15.2328 42.9544 14.0453 42.5674 12.9412H35.0011L31.3177 16.6556Z"
                      fill="#3754FA"
                    ></path>
                  </svg>
                </div>
              </div>
              <span className="hidden sm:block text-white font-bold text-xl tracking-tight">
                ShopHub
              </span>
            </div>

            {/* Mobile Search - Between Logo and Hamburger */}
            <div className="md:hidden flex-1 mx-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white text-main-color placeholder-main-color/60 text-sm rounded-xl pl-4 pr-10 h-10 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-main-color">
                  <FaMagnifyingGlass />
                </button>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div
                className={`relative w-full transition-all duration-300 ${
                  searchFocused ? "scale-105" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search products, brands, categories..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full bg-white text-main-color placeholder-main-color/60 text-sm rounded-2xl pl-5 pr-12 h-11 focus:outline-none focus:ring-2 focus:ring-white/50 border border-main-color/20 transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-main-color text-white rounded-xl px-4 h-8 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  <FaMagnifyingGlass className="text-sm" />
                </button>
              </div>
            </div>

            {/* Right Actions - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <button className="relative p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                <FaBell className="text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-pink-400 rounded-full ring-2 ring-white"></span>
              </button>
              <button className="relative p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                <FaHeart className="text-xl" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-main-color hover:bg-main-color/10 rounded-lg transition-all">
                <FaBell className="text-lg" />
                <span className="font-medium">Notifications</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-main-color hover:bg-main-color/10 rounded-lg transition-all">
                <FaHeart className="text-lg" />
                <span className="font-medium">My Wishlist</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 shadow-2xl rounded-t-3xl">
        <div className="flex justify-around items-center h-16 px-2">
          <button
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all ${
              active === "home"
                ? "text-main-color bg-main-color/10"
                : "text-gray-400 hover:text-main-color"
            }`}
          >
            <FaHome className="text-xl" />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all relative ${
              active === "wishlist"
                ? "text-main-color bg-main-color/10"
                : "text-gray-400 hover:text-main-color"
            }`}
          >
            <FaHeart className="text-xl" />
            <span className="text-xs font-medium">Wishlist</span>
          </button>

          <button
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all ${
              active === "profile"
                ? "text-main-color bg-main-color/10"
                : "text-gray-400 hover:text-main-color"
            }`}
          >
            <FaUser className="text-xl" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </>
  );
};
