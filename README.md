# SHOP.CO — Vanilla JS E-Commerce UI

**[🔴 Live Demo](https://sajad-abdollahi.github.io/ecommerce-vanilla-js-practice/)**

*[فارسی ⬇️](#فارسی)*

A full e-commerce interface (based on a Figma design) built entirely with **plain HTML, CSS, and Vanilla JavaScript** — no frameworks, no libraries, no shortcuts. Built as a deliberate practice project to master core JavaScript before moving on to React.

## Features

- Data-driven product rendering (Home, Shop, filtering & sorting)
- Reusable, componentized JS modules (no copy-pasted markup)
- Custom-built image slider (no external slider library)
- Dynamic star ratings and review rendering
- Responsive layout across breakpoints
- SVG icons loaded and injected dynamically

## Tech Stack

`HTML5` · `CSS3` · `Vanilla JavaScript (ES Modules)`

No frameworks, no build tools, no bundlers — every piece of behavior on this site is hand-written.

## Project Structure

```
├── assets/
│   ├── css/          → styles, split by concern
│   ├── js/
│   │   ├── data/      → product & review data (source of truth)
│   │   ├── components/→ small reusable render functions (e.g. product card)
│   │   ├── modules/    → feature logic (slider, product list, icon loader)
│   │   ├── layout/    → shared header/footer
│   │   └── pages/      → page-specific logic
│   ├── imgs/          → product & layout images
│   └── svgs/          → icons, loaded dynamically at runtime
├── pages/              → secondary HTML pages (Shop, etc.)
└── index.html          → home page
```

## Running It Locally

No build step needed — it's plain HTML/CSS/JS.

1. Clone the repo: `git clone https://github.com/sajad-abdollahi/ecommerce-vanilla-js-practice.git`
2. Open the folder in VS Code
3. Use the **Live Server** extension (or any local static server) and open `index.html`

## The Reasoning Behind It

This README covers *what* the project is. For *why* it was built this way — the architecture decisions, the challenges, what's being practiced — see **[DEVLOG.md](./DEVLOG.md)**.

## Author

**Sajad Abdollahi** — Frontend Developer
[GitHub](https://github.com/sajad-abdollahi) · [Instagram](https://www.instagram.com/sajad.abdollahi.dev)

---

<a name="فارسی"></a>
## فارسی

**[🔴 دموی زنده](https://sajad-abdollahi.github.io/ecommerce-vanilla-js-practice/)**

یه رابط کاربری کامل فروشگاهی (بر اساس یه طراحی Figma) که کاملاً با **HTML، CSS و جاوااسکریپت خالص** ساخته شده — بدون فریم‌ورک، بدون کتابخونه، بدون میان‌بر. این پروژه به‌عنوان یه تمرین هدفمند ساخته شده تا قبل از رفتن سراغ React، پایه‌های جاوااسکریپت کاملاً جا بیفته.

### امکانات

- رندر محصولات بر اساس داده (خانه، فروشگاه، فیلتر و مرتب‌سازی)
- ماژول‌های جاوااسکریپت قابل‌استفاده مجدد (بدون تکرار کد)
- اسلایدر تصاویر ساخته‌شده از صفر (بدون کتابخونه خارجی)
- امتیازدهی ستاره‌ای و نمایش نظرات پویا
- طراحی واکنش‌گرا در اندازه‌های مختلف صفحه
- آیکون‌های SVG که به‌صورت پویا لود می‌شن

### تکنولوژی‌ها

`HTML5` · `CSS3` · `جاوااسکریپت خالص (ES Modules)`

بدون فریم‌ورک، بدون ابزار build یا bundler — هر رفتاری روی این سایت دستی نوشته شده.

### اجرای پروژه روی سیستم خودتون

نیازی به build نیست — پروژه کاملاً HTML/CSS/JS خالصه.

۱. کلون کردن ریپازیتوری: `git clone https://github.com/sajad-abdollahi/ecommerce-vanilla-js-practice.git`
۲. باز کردن پوشه توی VS Code
۳. استفاده از اکستنشن **Live Server** (یا هر سرور استاتیک محلی دیگه) و باز کردن `index.html`

### دلیل تصمیمات این پروژه

این README توضیح می‌ده این پروژه *چیه*. برای اینکه بفهمید *چرا* این‌طور ساخته شده — تصمیمات معماری، چالش‌ها، و چیزهایی که در حال تمرینشونم — فایل **[DEVLOG.md](./DEVLOG.md)** رو ببینید.

### سازنده

**سجاد عبدالهی** — توسعه‌دهنده فرانت‌اند
[گیت‌هاب](https://github.com/sajad-abdollahi) · [اینستاگرام](https://www.instagram.com/sajad.abdollahi.dev)
