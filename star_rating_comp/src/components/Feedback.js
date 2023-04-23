import React, { useState } from "react";

const Feedback = ({ stars }) => {
  const [rating, setRating] = useState(0);
  const allStars = new Array(stars).fill("*");

  function handleClick(index) {
    setRating(index + 1);
  }
  const handleStarHover = (index) => {
    const stars = Array.from(document.getElementsByClassName("star"));
    stars.forEach((star, i) => {
      if (i <= index) {
        star.classList.add("highlighted");
      } else {
        star.classList.remove("highlighted");
      }
    });
  };

  return (
    <div>
      {allStars.map((ui, index) => (
        <span
          className={`star ${index < rating ? "highlighted" : ""}`}
          key={index}
          id={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleStarHover(index)}
          onMouseLeave={() =>
            rating ? handleStarHover(rating - 1) : handleStarHover(-1)
          }
        >
          {ui}
        </span>
      ))}
    </div>
  );
};

export default Feedback;
