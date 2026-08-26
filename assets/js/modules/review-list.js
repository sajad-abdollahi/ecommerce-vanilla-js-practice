import { reviews } from "../data/reviews.js";
import { createReviewCard } from "../components/review-card.js";

export function renderReviews() {
  const reviewList = document.querySelector("[data-review-list]");

  const reviewCards = reviews.map((review) => {
    return createReviewCard(review);
  });

  const markup = reviewCards.join("");

  reviewList.innerHTML = markup;
}
