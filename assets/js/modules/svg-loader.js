// لود یک اس وی جی از آدرسی که تابع پایینی میده در صفحه
export async function loadSVG(url, targetElement) {
  const respons = await fetch(url);
  const svgContent = await respons.text();
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

