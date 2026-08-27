import { renderHeader } from "../layout/header.js";
import { renderFooter } from "../layout/footer.js";
import { loadAllIcons } from "../modules/svg-loader.js";
import { products } from "../data/products.js";
import { createProductCard } from "../components/product-card.js";

// این تابع رو برای رندر همه محصولات در  فروشگاه مینویسیم
function renderProducts(products) {
  const grid = document.getElementById("products-grid");
  grid.innerHTML = products
    .map((product) => createProductCard(product, ".."))
    .join("");
}

const filters = {
  category: null,
  style: null,
  colors: [],
  sizes: [],
  minPrice: null,
  maxPrice: null,
  sortBy: "popular",
};

function getFilteredProducts() {
  //کپی ارایه اصلی
  let result = [...products];

  // فیلتر دسته بندی
  if (filters.category) {
    result = result.filter((p) => p.category === filters.category);
  }

  // فیلتر استایل
  if (filters.style) {
    result = result.filter((p) => p.style === filters.style);
  }

  // فیلتر بر اساس رنگ
  if (filters.colors.length > 0) {
    result = result.filter((p) =>
      filters.colors.some((color) => p.colors.includes(color)),
    );
  }

  // فیلتر بر اساس سایز
  if (filters.sizes.length > 0) {
    result = result.filter((p) =>
      filters.sizes.some((size) => p.sizes.includes(size)),
    );
  }

  // فیلتر قیمت
  if (filters.minPrice !== null) {
    result = result.filter((p) => p.price >= filters.minPrice);
  }
  if (filters.maxPrice !== null) {
    result = result.filter((p) => p.price <= filters.maxPrice);
  }
  // sort
  if (filters.sortBy === "low-price") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === "high-price") {
    result = [...result].sort((a, b) => b.price - a.price);
  } else if (filters.sortBy === "high-rating") {
    result = [...result].sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return result;
}

renderHeader("..");
renderFooter();
renderProducts(getFilteredProducts());
loadAllIcons("..");

function applyFilters() {
  const filtered = getFilteredProducts();
  renderProducts(filtered);
  loadAllIcons("..");
}

const sortSelect = document.querySelector(".sort-select");
sortSelect.addEventListener("change", (e) => {
  const option = e.target.value;
  filters.sortBy = option;
  applyFilters();
});

const categoryButtons = document.querySelectorAll("[data-category]");

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    if (filters.category === category) {
      filters.category = null;
    } else {
      filters.category = category;
    }

    categoryButtons.forEach((b) => b.classList.remove("active"));

    if (filters.category) {
      btn.classList.add("active");
    }

    applyFilters();
  });
});
