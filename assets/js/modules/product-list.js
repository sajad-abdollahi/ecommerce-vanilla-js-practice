import { products } from "../data/products.js";
import { createProductCard } from "../components/product-card.js";

// رندر محصولات هر کالکشن
export function renderProductList(collectionName) {
  const productList = document.querySelector(
    `[data-product-list="${collectionName}"]`,
  );

  const filteredProducts = products.filter((product) => {
    return product.collections.includes(collectionName);
  });

  const productCards = filteredProducts.map((product) => {
    return createProductCard(product);
  });

  const markup = productCards.join("");

  productList.innerHTML = markup;
}


