import { products } from "../data/products.js";
import { createRatingStars } from "../components/rating-stars.js";
import { renderHeader, initHeaderBehavior } from "../layout/header.js";
import { renderFooter } from "../layout/footer.js";
import {
  renderNewsletter,
  initNewsletterBehavior,
} from "../layout/newsletter.js";
import { loadAllIcons } from "../modules/svg-loader.js";
import { getDiscountedPrice } from "../modules/pricing.js";

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const product = products.find((p) => p.slug === slug);

function renderProductDetail(product) {
  const container = document.querySelector("#product-detail");
  if (product) {
    const discountedPrice = getDiscountedPrice(product);
    container.innerHTML = `
    <div class="product-images">
      <img src="../${product.image}" alt="${product.title}">
    </div>
    <div class="product-info-detail">
      <h1>${product.title}</h1>
      <div class="stars-container">
      ${createRatingStars(product.rating.rate)}
    </div>
    <div class="price-section">
      ${
        product.discount > 0
          ? `<span class="price">$${discountedPrice}</span>
            <span class="old-price">$${product.price}</span>`
          : `<span class="price">$${product.price}</span>`
      }
    </div>
    <p class="product-description">${product.description}</p>
    </div>
    `;
  } else {
    container.innerHTML = `
     <div class="empty-page">
        <span>this page hs empty</span>
        <a  href="../index.html">go back home</a>
        <a href="Shop.html">go back shop</a>
    </div>`;
  }
}
renderProductDetail(product);
renderHeader("..");
initHeaderBehavior();
renderFooter();
renderNewsletter();
initNewsletterBehavior();
loadAllIcons("..");
