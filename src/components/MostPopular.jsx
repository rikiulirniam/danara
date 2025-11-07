import React, { useRef } from "react";
import { FaStar, FaHeart } from "react-icons/fa";

function MostPopular() {
  const items = [
    {
      id: 1,
      title: "Lorem Ipsum",
      subtitle: "Lorem Ipsum is simpy dummy text",
      rating: 5,
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      subtitle: "Lorem Ipsum is simpy dummy text",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      subtitle: "Lorem Ipsum is simpy dummy text",
      rating: 5,
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      subtitle: "Lorem Ipsum is simpy dummy text",
      rating: 5,
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      subtitle: "Lorem Ipsum is simpy dummy text",
      rating: 4.8,
    },
  ];

  const containerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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
    const walk = (x - startX.current) * 1; // scroll-fast factor
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
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Most Popular</h2>
      </div>

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
        {items.map((it) => (
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

export default MostPopular;
