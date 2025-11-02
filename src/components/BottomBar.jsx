import { FaHome, FaHeart, FaUser } from "react-icons/fa";

const BottomBar = ({ active = "home" }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow md:hidden">
      <div className="flex justify-around items-center h-14">
        <button
          className={`flex flex-col items-center text-xs ${
            active === "home" ? "text-main-color" : "text-gray-400"
          }`}
        >
          <FaHome className="text-lg mb-0.5" />
          Home
        </button>
        <button
          className={`flex flex-col items-center text-xs ${
            active === "wishlist" ? "text-main-color" : "text-gray-400"
          }`}
        >
          <FaHeart className="text-lg mb-0.5" />
          Wishlist
        </button>
        <button
          className={`flex flex-col items-center text-xs ${
            active === "profile" ? "text-main-color" : "text-gray-400"
          }`}
        >
          <FaUser className="text-lg mb-0.5" />
          Profile
        </button>
      </div>
    </nav>
  );
};

export default BottomBar;
