import { useState } from "react";

export default function RatingInput({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) return alert("Silakan beri rating dulu!");
    onSubmit({ rating, review });
    setRating(0);
    setReview("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 bg-white rounded-xl p-4 shadow-sm border"
    >
        <h1 className="text-xl font-medium">Berikan Rating dan Ulasan</h1>
        <p className="text-xs">Ulasan anda akan ditampilkan disini</p>

      {/* Interaktif bintang */}
      <div className="flex justify-center gap-1 my-4">
        {Array.from({ length: 5 }).map((_, i) => {
          const starValue = i + 1;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              className="focus:outline-none"
            >
              <span
                className={`text-3xl transition-colors ${
                  starValue <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            </button>
          );
        })}
      </div>

      {/* Input ulasan */}
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Tulis ulasanmu di sini..."
        className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none"
        rows={3}
      />

      {/* Tombol kirim */}
      <button
        type="submit"
        className="mt-3 w-full bg-main-color hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition"
      >
        Kirim Ulasan
      </button>
    </form>
  );
}
