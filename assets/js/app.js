import { renderProductList } from "./modules/product-list.js";
import { initProductSliders, initReviewSlider } from "./modules/slider.js";
import { renderReviews } from "./modules/review-list.js";
import { initHomePage, initNewsletter } from "./pages/home.js";
import { loadAllIcons } from "./modules/svg-loader.js";

loadAllIcons(".");

renderProductList("new-arrivals", ".");
renderProductList("top-selling", ".");
renderReviews();
loadAllIcons();

initProductSliders();
initReviewSlider();
initHomePage();
initNewsletter();
