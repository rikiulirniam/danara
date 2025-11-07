import React, { useState, useRef } from "react";
import {
  FaHamburger,
  FaTshirt,
  FaStore,
  FaHandHoldingHeart,
  FaPrint,
  FaStar,
  FaHeart,
} from "react-icons/fa";

const categories = [
  { key: "food", label: "Food & Beverage", icon: <FaHamburger /> },
  { key: "cloths", label: "Cloths", icon: <FaTshirt /> },
  { key: "store", label: "Store", icon: <FaStore /> },
  { key: "service", label: "Service", icon: <FaHandHoldingHeart /> },
  { key: "fotocopy", label: "Fotocopy", icon: <FaPrint /> },
];

const itemsData = [
  // Food & Beverage
  {
    id: 1,
    category: "food",
    title: "Burger Queen",
    subtitle: "Best burger in town",
    rating: 4.8,
  },
  {
    id: 2,
    category: "food",
    title: "Coffee Spot",
    subtitle: "Fresh coffee everyday",
    rating: 4.7,
  },
  {
    id: 3,
    category: "food",
    title: "Pizza Palace",
    subtitle: "Authentic Italian pizza",
    rating: 4.9,
  },
  // Cloths
  {
    id: 4,
    category: "cloths",
    title: "Trendy Shirt",
    subtitle: "Fashionable & comfy",
    rating: 4.5,
  },
  {
    id: 5,
    category: "cloths",
    title: "Denim Store",
    subtitle: "Best jeans collection",
    rating: 4.6,
  },
  {
    id: 6,
    category: "cloths",
    title: "Fashion Hub",
    subtitle: "Latest trends",
    rating: 4.7,
  },
  // Store
  {
    id: 7,
    category: "store",
    title: "Mini Mart",
    subtitle: "Groceries & more",
    rating: 4.3,
  },
  {
    id: 8,
    category: "store",
    title: "Book Corner",
    subtitle: "Books for everyone",
    rating: 4.9,
  },
  {
    id: 9,
    category: "store",
    title: "Tech Store",
    subtitle: "Latest gadgets",
    rating: 4.6,
  },
  // Service
  {
    id: 10,
    category: "service",
    title: "Laundry Express",
    subtitle: "Clean & fast",
    rating: 4.4,
  },
  {
    id: 11,
    category: "service",
    title: "Barber Bros",
    subtitle: "Haircut & style",
    rating: 4.8,
  },
  {
    id: 12,
    category: "service",
    title: "Spa Relax",
    subtitle: "Relaxation therapy",
    rating: 4.7,
  },
  // Fotocopy
  {
    id: 13,
    category: "fotocopy",
    title: "Copy Center",
    subtitle: "Print & copy",
    rating: 4.2,
  },
  {
    id: 14,
    category: "fotocopy",
    title: "Print House",
    subtitle: "Digital printing",
    rating: 4.5,
  },
  {
    id: 15,
    category: "fotocopy",
    title: "Quick Print",
    subtitle: "Fast & affordable",
    rating: 4.3,
  },
];

function ShortByCategory() {
  const [activeCat, setActiveCat] = useState("food");
  const containerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const filteredItems = itemsData.filter((item) => item.category === activeCat);

  // Slider drag logic
  const onMouseDown = (e) => {
    isDown.current = true;
    containerRef.current.classList.add("dragging");
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    containerRef.current?.classList.remove("dragging");
  };

  const onMouseUp = () => {
    isDown.current = false;
    containerRef.current?.classList.remove("dragging");
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onTouchStart = (e) => {
    isDown.current = true;
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    if (!isDown.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onTouchEnd = () => {
    isDown.current = false;
  };

  return (
    <div className="px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Browse by Category</h2>
      </div>

      {/* Category Icons */}
      <div className="flex justify-start gap-3 mb-6 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCat(cat.key)}
            className={`flex flex-col items-center justify-center min-w-[70px] px-3 py-3 rounded-2xl transition-all shadow-sm
              ${
                activeCat === cat.key
                  ? "bg-main-color text-white shadow-lg scale-105"
                  : "bg-white text-main-color hover:bg-gray-50 border border-gray-200"
              }
            `}
          >
            <span className="text-2xl mb-1.5">{cat.icon}</span>
            <span className="text-[10px] font-semibold text-center leading-tight">
              {cat.label.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Active Category Label */}
      <div className="mb-4 px-1 flex items-center justify-between">
        <div>
          <span className="text-lg font-bold text-gray-800">
            {categories.find((c) => c.key === activeCat)?.label}
          </span>
          <span className="ml-2 text-sm text-gray-500">
            ({filteredItems.length} items)
          </span>
        </div>
        <button className="text-sm text-main-color font-semibold hover:underline">
          View All
        </button>
      </div>

      {/* Slider - Same as MostPopular */}
      <div
        ref={containerRef}
        className="relative flex gap-4 overflow-x-auto no-scrollbar pb-4 cursor-grab"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {filteredItems.map((it) => (
          <article
            key={it.id}
            className="min-w-[200px] w-[200px] bg-white rounded-2xl shadow-md overflow-hidden relative"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative h-36 bg-gray-100">
              <img
                src={`https://placehold.co/420x300`}
                alt={it.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow flex items-center justify-center text-main-color"
                aria-label="favorite"
                title="Favorite"
              >
                <FaHeart />
              </button>
            </div>

            <div className="p-3">
              <h3 className="text-base font-semibold mb-1">{it.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{it.subtitle}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-orange-400">
                    <FaStar />
                  </span>
                  <strong className="text-orange-500">{it.rating}</strong>
                </div>

                <div className="text-xs text-gray-500">★ reviews</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ShortByCategory;
