import React from "react";

interface StarRatingProps {
  rating: number;
  id: number;
}

export default function StarRating({ rating, id }: StarRatingProps) {
  const ratingValue = Math.round(rating * 2);

  return (
    <div className="rating rating-sm rating-half">
      <input
        type="radio"
        name={`rating-${id}`}
        className="rating-hidden"
        checked={ratingValue === 0}
        readOnly
      />
      {[...Array(10)].map((_, index) => {
        const value = index + 1;
        const isHalf = value % 2 !== 0;
        return (
          <input
            key={index}
            type="radio"
            name={`rating-${id}`}
            className={`bg-orange-400 mask mask-star-2 ${
              isHalf ? "mask-half-1" : "mask-half-2"
            }`}
            checked={value === ratingValue}
            disabled
            style={{ cursor: "default" }}
          />
        );
      })}
    </div>
  );
}