import React, { useState, useEffect } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = customerReviews[reviewIndex];

  const handleNextReview = () => {
    setReviewIndex((prevIndex) => (prevIndex === customerReviews.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePreviousReview = () => {
    setReviewIndex((prevIndex) => (prevIndex === 0 ? customerReviews.length - 1 : prevIndex - 1));
  };

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{review.message}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{review.name}</p>
            <p className="rw-reviewer-place">{review.location}</p>
          </div>

          <div className="rw-btns">
            <button className="rw-next-btn" type="button" onClick={handlePreviousReview}>
              ←
            </button>
            <button className="rw-next-btn" type="button" onClick={handleNextReview}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
