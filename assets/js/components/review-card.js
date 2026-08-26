import { createRatingStars } from "./rating-stars.js";

export function createReviewCard(review) {

  return `
    <li class="review-card">

      <div class="review-rating">
         ${createRatingStars(review.rating)}
      </div>

      <div class="review-customer">
        <h3>${review.customerName}</h3>
        <span>${review.verified ? "✓" : ""}</span>
      </div>

      <p>${review.comment}</p>

    </li>
    `;
}
