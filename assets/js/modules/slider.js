function initSlider(section, config) {
  const sliderTrack = section.querySelector(config.trackSelector);
  const prevBtn = section.querySelector(config.prevSelector);
  const nextBtn = section.querySelector(config.nextSelector);

  if (!sliderTrack || !prevBtn || !nextBtn) {
    return;
  }

  const items = sliderTrack.querySelectorAll(config.itemSelector);
  const itemsLength = items.length;

  if (itemsLength === 0) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  let currentIndex = 0;
  let itemWidth = 0;
  let itemsPerPage = 1;
  let maxIndex = 0;
  let resizeTimeoutId;

  function updateSliderMetrics() {
    const firstItem = items[0];

    const itemStyle = window.getComputedStyle(firstItem);
    const trackStyle = window.getComputedStyle(sliderTrack);

    const itemMargin =
      parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight);

    const itemRect = firstItem.getBoundingClientRect();

    itemWidth = itemRect.width + itemMargin;

    itemsPerPage = parseInt(
      trackStyle.getPropertyValue("--items-per-view"),
      10,
    );

    maxIndex = Math.max(0, itemsLength - itemsPerPage);
  }

  function updateSliderPosition() {
    const offset = currentIndex * itemWidth;

    sliderTrack.style.transform = `translateX(-${offset}px)`;
  }

  function checkButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
  }
  updateSliderMetrics();
  checkButtons();

  nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
    }
    updateSliderPosition();
    checkButtons();
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    }
    updateSliderPosition();
    checkButtons();
  });
  // debounce
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeoutId);

    resizeTimeoutId = setTimeout(() => {
      updateSliderMetrics();
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }

      updateSliderPosition();
      checkButtons();
    }, 150);
  });
}

export function initProductSliders() {
  const productSections = document.querySelectorAll(".product-section");

  const productSliderConfig = {
    trackSelector: ".slider-track",
    itemSelector: ".product-card",
    prevSelector: ".slider-arrow-prev",
    nextSelector: ".slider-arrow-next",
  };

  productSections.forEach((section) => {
    initSlider(section, productSliderConfig);
  });
}

export function initReviewSlider() {
  const reviewSection = document.querySelector(".reviews-section");

  if (!reviewSection) {
    return;
  }

  const reviewSliderConfig = {
    trackSelector: ".reviews-track",
    itemSelector: ".review-card",
    prevSelector: ".reviews-arrow-prev",
    nextSelector: ".reviews-arrow-next",
  };

  initSlider(reviewSection, reviewSliderConfig);
}
