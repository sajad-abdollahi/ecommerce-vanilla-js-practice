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
    const colorsHTML = product.colors
      .map(
        (color, index) =>
          `<button type="button" class="color-option ${index === 0 ? "active" : ""}" data-color="${color}" style="background-color: ${color};"></button>`,
      )
      .join("");

    const sizesHTML = product.sizes
      .map(
        (size, index) =>
          `<button type="button" class="size-option ${index === 0 ? "active" : ""}" data-size="${size}">${size}</button>`,
      )
      .join("");
    const thumbnailsHTML = product.images
      .map(
        (img, index) =>
          `<button type="button" class="image-option ${index === 0 ? "active" : ""}" data-index="${index}"><img src="../${img}" alt="${product.title} - image ${index + 1}"></button>`,
      )
      .join("");

    container.innerHTML = `
    <div class="product-images">
      <img src="../${product.images[0]}" class="main-image" alt="${product.title}">
      <div class="image-options">${thumbnailsHTML}</div>
    </div>
    <div class="product-info-detail">
        <h1>${product.title}</h1>
        <div class="stars-container">
          ${createRatingStars(product.rating.rate)}
        </div>
      <div class="price-section">
        ${
          product.discount > 0
            ? `<span class="price">$${discountedPrice}</span> <span class="old-price">$${product.price}</span>`
            : `<span class="price">$${product.price}</span>`
        }
      </div>
        <p class="product-description">${product.description}</p>
        <div class="color-options">${colorsHTML}</div>
        <div class="size-options">${sizesHTML}</div>
        <div class="quantity-section">
            <button type="button" id="qty-decrease">-</button>
            <span id="qty-value">1</span>
            <button type="button" id="qty-increase">+</button>
        </div>
        <button type="button" id="add-to-cart-btn">Add to Cart</button>
    </div>
    `;
  } else {
    container.innerHTML = `
     <div class="empty-page">
        <span>this page is empty</span>
        <a  href="../index.html">go back home</a>
        <a href="Shop.html">go back shop</a>
    </div>`;
  }
}

let selectedColor = product ? product.colors[0] : null;
let selectedSize = product ? product.sizes[0] : null;
let quantity = 1;
let selectedImageIndex = 0;

const detailContainer = document.querySelector("#product-detail");
detailContainer.addEventListener("click", (event) => {
  const isColorButton = event.target.classList.contains("color-option");
  const isSizeButton = event.target.classList.contains("size-option");
  const imageButton = event.target.closest(".image-option");

  if (isColorButton) {
    selectedColor = event.target.dataset.color;
    const allColorButtons = detailContainer.querySelectorAll(".color-option");
    allColorButtons.forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");
  }
  if (isSizeButton) {
    selectedSize = event.target.dataset.size;
    const allSizeButtons = detailContainer.querySelectorAll(".size-option");
    allSizeButtons.forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");
  }
  if (imageButton) {
    const mainImage = detailContainer.querySelector(".main-image");
    selectedImageIndex = Number(imageButton.dataset.index);
    mainImage.setAttribute("src", `../${product.images[selectedImageIndex]}`);
    const allImageButtons = detailContainer.querySelectorAll(".image-option");
    allImageButtons.forEach((btn) => btn.classList.remove("active"));
    imageButton.classList.add("active");
  }
});
renderProductDetail(product);
if (product) {
  const productBreadcrumb = document.querySelector("#product-breadcrumb");
  productBreadcrumb.textContent = product.title;
  document.title = `${product.title} - SHOP.CO`;
}
renderHeader("..");
initHeaderBehavior();
renderFooter();
renderNewsletter();
initNewsletterBehavior();
loadAllIcons("..");

if (product) {
  const qtyDecreaseBtn = document.querySelector("#qty-decrease");
  const qtyIncreaseBtn = document.querySelector("#qty-increase");
  const qtyValueText = document.querySelector("#qty-value");

  qtyDecreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity -= 1;
      qtyValueText.textContent = quantity;
    }
  });
  qtyIncreaseBtn.addEventListener("click", () => {
    quantity += 1;
    qtyValueText.textContent = quantity;
  });
  const addToCartBtn = document.querySelector("#add-to-cart-btn");
  addToCartBtn.addEventListener("click", () => {
    console.log("Added to cart:", {
      product: product.title,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    });
  });
}
