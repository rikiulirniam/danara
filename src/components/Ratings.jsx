export default function Ratings({ rating, totalReview, breakdown }) {
  // breakdown = {5: 80, 4: 15, 3: 3, 2: 1, 1: 1} -> persentase
  return (
    <div className="w-full max-w-sm bg-white rounded-xl p-4">

      <div className="flex items-center gap-4">
        <div className="text-center">
          <p className="text-5xl font-semibold text-gray-700">{rating.toFixed(1)}</p>
          <div className="flex justify-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-lg ${i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"}`}>
                ★
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">{totalReview} ulasan</p>
        </div>

        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2">
              <span className="w-4 text-sm text-gray-600">{star}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-yellow-500 h-full rounded-full"
                  style={{ width: `${breakdown[star] || 0}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
