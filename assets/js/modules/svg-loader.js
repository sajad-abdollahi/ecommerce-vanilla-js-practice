// cache
const svgCache = {};

// لود یک اس وی جی از آدرسی که تابع پایینی میده در صفحه
export async function loadSVG(url, targetElement) {
  if (!svgCache[url]) {
    svgCache[url] = fetch(url).then((response) => response.text());
  }

  const svgContent = await svgCache[url];
  targetElement.innerHTML = svgContent;
}

// پیدا کردن همه آیکون ها و لود آنها
export function loadAllIcons(basePath = ".") {
  const icons = document.querySelectorAll("[data-icon]");

  icons.forEach((element) => {
    if (element.innerHTML.trim() === "") {
      const iconName = element.dataset.icon;
      const iconPath = element.dataset.iconPath;
      const url = `${basePath}/assets/svgs/${iconPath}/${iconName}.svg`;
      loadSVG(url, element);
    }
  });
}