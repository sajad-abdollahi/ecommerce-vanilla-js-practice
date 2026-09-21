import { initHeaderBehavior, renderHeader } from "../layout/header.js";
import { renderFooter } from "../layout/footer.js";
import { loadAllIcons } from "../modules/svg-loader.js";
import { products } from "../data/products.js";
import { createProductCard } from "../components/product-card.js";
import { debounce } from "../modules/debounce.js";
import {
  renderNewsletter,
  initNewsletterBehavior,
} from "../layout/newsletter.js";

// این تابع رو برای رندر همه محصولات در  فروشگاه مینویسیم
function renderProducts(products) {
  const grid = document.getElementById("products-grid");
  if (products.length) {
    grid.innerHTML = products
      .map((product) => createProductCard(product, ".."))
      .join("");
  } else {
    grid.innerHTML = `
    <div class="empty-state">
      <span class="icon" data-icon="not-found" data-icon-path="icons"></span>
      <p>محصولی یافت نشد</p>
   </div>`;
  }
}

const defaultFilters = {
  category: null,
  style: null,
  colors: [],
  sizes: [],
  minPrice: null,
  maxPrice: null,
  sortBy: "popular",
};
let filters = { ...defaultFilters };

// pagination
let currentPage = 1;
const productsPerPage = 6;

function getPaginatedProducts(products) {
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  return products.slice(start, end);
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / productsPerPage);
  const pagination = document.querySelector("#pagination");

  let buttonsHTML = `<button type="button" id="prev-page" ${currentPage === 1 ? "disabled" : ""}>previous</button>`;
  let lastShown = false;
  for (let i = 1; i <= totalPages; i++) {
    const shouldShow =
      i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1;
    if (shouldShow) {
      buttonsHTML += `<button type="button" data-page="${i}"  class="${i === currentPage ? "active" : ""}">${i}</button>`;
      lastShown = true;
    } else {
      if (lastShown) {
        buttonsHTML += `<span class="pagination-dots">...</span>`;
      }
      lastShown = false;
    }
  }
  buttonsHTML += `<button type="button" id="next-page" ${currentPage === totalPages ? "disabled" : ""}>next</button>`;

  pagination.innerHTML = buttonsHTML;

  const paginationBtns = document.querySelectorAll("[data-page]");
  paginationBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const currentBtn = Number(button.dataset.page);
      if (currentBtn === currentPage) {
        return;
      } else {
        currentPage = currentBtn;
        applyFilters(false);
      }
    });
  });

  const prevBtn = document.querySelector("#prev-page");
  prevBtn.addEventListener("click", () => {
    if (currentPage !== 1) currentPage = currentPage - 1;
    applyFilters(false);
  });

  const nextBtn = document.querySelector("#next-page");
  nextBtn.addEventListener("click", () => {
    if (currentPage !== totalPages) currentPage = currentPage + 1;
    applyFilters(false);
  });
}
// x of y of z products
function updateProductCount(totalItems) {
  const start = 1 + (currentPage - 1) * productsPerPage;
  const end = Math.min(
    Number(currentPage * productsPerPage),
    Number(totalItems),
  );
  const countText = document.querySelector("#product-count");
  countText.textContent = `Showing ${start}-${end} of ${totalItems} Products`;
}

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
initHeaderBehavior();
renderNewsletter();
initNewsletterBehavior();
renderFooter();
applyFilters();

function applyFilters(isNewFilter = true) {
  if (isNewFilter) {
    currentPage = 1;
  }
  const filtered = getFilteredProducts();
  const paginated = getPaginatedProducts(filtered);
  renderProducts(paginated);
  renderPagination(filtered.length);
  updateProductCount(filtered.length);
  loadAllIcons("..");
}
// debouns
const debouncedApplyFilters = debounce(applyFilters, 300);

// sort
const sortSelect = document.querySelector(".sort-select");
sortSelect.addEventListener("change", (e) => {
  const option = e.target.value;
  filters.sortBy = option;
  applyFilters();
});

// colors filter
const colorCheckboxes = document.querySelectorAll(
  '#color-filter input[type="checkbox"]',
);

colorCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const color = checkbox.value;

    if (checkbox.checked) {
      filters.colors.push(color);
    } else {
      filters.colors = filters.colors.filter((c) => c !== color);
    }

    applyFilters();
  });
});
// size filter
const sizeCheckboxes = document.querySelectorAll(
  '#size-filter input[type="checkbox"]',
);

sizeCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const size = checkbox.value;

    if (checkbox.checked) {
      filters.sizes.push(size);
    } else {
      filters.sizes = filters.sizes.filter((s) => s !== size);
    }

    applyFilters();
  });
});

// filter style & filter category

function setupToggleFilter(selector, filterKey) {
  const buttons = document.querySelectorAll(selector);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset[filterKey];

      if (filters[filterKey] === value) {
        filters[filterKey] = null;
      } else {
        filters[filterKey] = value;
      }

      buttons.forEach((b) => b.classList.remove("active"));
      if (filters[filterKey]) btn.classList.add("active");

      applyFilters();
    });
  });
}

setupToggleFilter("[data-category]", "category");
setupToggleFilter("[data-style]", "style");

// price filter
function updateTooltipPosition(input, tooltip) {
  const min = Number(input.min);
  const max = Number(input.max);
  const value = Number(input.value);

  const percent = ((value - min) / (max - min)) * 100;
  tooltip.style.left = `${percent}%`;
  tooltip.textContent = value;
}

const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const minPriceTooltip = document.getElementById("min-price-tooltip");
const maxPriceTooltip = document.getElementById("max-price-tooltip");

updateTooltipPosition(minPriceInput, minPriceTooltip);
updateTooltipPosition(maxPriceInput, maxPriceTooltip);

minPriceInput.addEventListener("input", () => {
  if (Number(minPriceInput.value) > Number(maxPriceInput.value)) {
    minPriceInput.value = maxPriceInput.value;
  }
  updateTooltipPosition(minPriceInput, minPriceTooltip);

  filters.minPrice = Number(minPriceInput.value);

  debouncedApplyFilters();
});

maxPriceInput.addEventListener("input", () => {
  if (Number(maxPriceInput.value) < Number(minPriceInput.value)) {
    maxPriceInput.value = minPriceInput.value;
  }
  updateTooltipPosition(maxPriceInput, maxPriceTooltip);

  filters.maxPrice = Number(maxPriceInput.value);

  debouncedApplyFilters();
});

// reset filters button

const resetFilterBtn = document.querySelector("#reset-filters-btn");

resetFilterBtn.addEventListener("click", () => {
  filters = { ...defaultFilters, colors: [], sizes: [] };

  const categoryFilter = document.querySelectorAll("[data-category]");
  const styleFilter = document.querySelectorAll("[data-style]");

  function removeFilter(elements) {
    elements.forEach((el) => {
      el.classList.remove("active");
    });
  }
  colorCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  sizeCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  minPriceInput.value = Number(minPriceInput.min);
  maxPriceInput.value = Number(maxPriceInput.max);
  updateTooltipPosition(minPriceInput, minPriceTooltip);
  updateTooltipPosition(maxPriceInput, maxPriceTooltip);

  sortSelect.value = defaultFilters.sortBy;
  removeFilter(categoryFilter);
  removeFilter(styleFilter);
  applyFilters();
});
// filters hn mobile
const filterBtn = document.querySelector("#mobile-filter-btn");
const filterSidebar = document.querySelector(".filters-sidebar");
const filterOverlay = document.querySelector(".filter-overlay");
const filterCloseBtn = document.querySelector(".filter-close-btn");

filterBtn.addEventListener("click", () => {
  filterSidebar.classList.toggle("show");
  filterOverlay.classList.toggle("show");
});
function closeFilterDrawer() {
  const layers = [filterSidebar, filterOverlay];
  layers.forEach((layer) => {
    layer.classList.remove("show");
  });
}

filterCloseBtn.addEventListener("click", closeFilterDrawer);
filterOverlay.addEventListener("click", closeFilterDrawer);
