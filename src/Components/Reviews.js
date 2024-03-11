import React, { useState, useEffect } from "react";
import "../Styles/Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const backBtnClick = () => {
    setCurrentReviewIndex(
      currentReviewIndex <= 0 ? reviews.length - 1 : currentReviewIndex - 1
    );
  };

  const frontBtnClick = () => {
    setCurrentReviewIndex(
      currentReviewIndex >= reviews.length - 1 ? 0 : currentReviewIndex + 1
    );
  };

  useEffect(() => {
    fetch("path/to/reviews") // Replace this with the actual API endpoint
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <div className="review-section" id="reviews">
      {/* Render your component here */}
    </div>
  );
};

export default Reviews;