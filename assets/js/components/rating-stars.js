export function createRatingStars(rating) {
  const starMarkup = `
    <span class="rating-star">
      <span class="icon" data-icon="star" data-icon-path="icons"></span>
    </span>
  `;

  return starMarkup.repeat(rating);
}