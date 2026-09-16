import { renderProductList } from "./modules/product-list.js";
import { initProductSliders, initReviewSlider } from "./modules/slider.js";
import { renderReviews } from "./modules/review-list.js";
import { initNewsletterBehavior } from "./layout/newsletter.js";
import { loadAllIcons } from "./modules/svg-loader.js";
import { initHeaderBehavior } from "./layout/header.js";

renderProductList("new-arrivals", ".");
renderProductList("top-selling", ".");
renderReviews();
loadAllIcons();

initProductSliders();
initReviewSlider();
initNewsletterBehavior();
initHeaderBehavior();
