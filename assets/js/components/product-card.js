import { createRatingStars } from "./rating-stars.js";

export function createProductCard(product,basePath = ".") {
  const discountedPrice = (
    product.price -
    (product.price * product.discount) / 100
  ).toFixed(2);
  return `
    <li class="product-card">
        <div class="prd-card-img">
            <img src="${basePath}/${product.image}" alt="${product.title}">
            ${
              product.discount > 0
                ? `<span class="discount-badge">-${product.discount}%</span>`
                : ""
            }
        </div>
        <div class="product-info">
            <span class="product-name">${product.title}</span>
            <div class="stars-container">
                ${createRatingStars(product.rating.rate)}
            </div>
           <div>
              ${
                product.discount > 0
                  ? `<span class="price">$${discountedPrice}</span>
              <span class="old-price">$${product.price}</span>`
                  : `<span class="price">$${product.price}</span>`
              }
           </div>
        </div>
    </li>
    `;
}
