export default function Carousel({ produk }) {
  return (
    <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 pb-3 no-scrollbar">
      {produk.map((item, i) => (
        <div
          key={i}
          className="snap-start shrink-0 w-40 sm:w-48 bg-white rounded-xl overflow-hidden shadow-md"
        >
          <img
            // src={item.foto}
            src={"https://placehold.co/200x200"}
            alt={item.nama}
            className="w-full h-40 object-cover"
          />
          <p className="text-center text-sm font-medium py-2">{item.nama}</p>
        </div>
      ))}
    </div>
  );
}
