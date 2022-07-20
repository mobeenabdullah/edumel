import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return <div className="stars">{tempStars}</div>;
};

export default Stars;
