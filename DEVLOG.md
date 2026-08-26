# Dev Log — SHOP.CO (E-commerce UI Practice Project)

*[فارسی ⬇️ پایین همین صفحه](#فارسی)*

## Why This Project Exists

Before moving into React and Next.js, I wanted to be genuinely comfortable with core JavaScript — not just able to recognize concepts, but able to use them to solve real UI problems. So I picked a full e-commerce interface (based on a Figma design) and decided to build it with **plain HTML, CSS, and Vanilla JavaScript only** — no frameworks, no shortcuts.

The goal isn't just to reproduce a design. It's to practice the things a real product actually needs: rendering data-driven UI, filtering and sorting, managing cart state, persisting data with `localStorage`, and keeping the codebase organized as it grows.

## Why Vanilla JS First

It's tempting to jump straight into React. But I'd rather understand *what React is solving* before I use it. Building state management, DOM updates, and event handling by hand first means that when I do move to React, I'll understand why it exists — not just how to use its syntax.

## Architecture Decisions

- **Modules over one giant script.** JS is split into `data/`, `modules/`, `components/`, `layout/`, and `pages/` — each file has one clear responsibility (e.g. `slider.js` only handles the slider, `product-card.js` only renders a product card).
- **Data-driven UI.** Products are modeled as plain JS objects (id, title, price, colors, sizes, images, etc.) and the UI is generated *from* that data — not hardcoded HTML per product.
- **Semantic, accessible HTML.** Proper use of `header`, `nav`, `main`, `section`, `footer`, meaningful `alt` text, and accessible labels for interactive elements — not just `div` soup.
- **CSS driven by actual layout needs.** Flexbox vs. Grid, and breakpoints, are chosen based on what the layout actually requires — not applied as defaults.

## Challenges I'm Working Through

- **Building a working slider from scratch** — handling index state, boundaries (disabling prev/next at the edges), and making item width calculations respond correctly to window resizing.
- **Keeping product rendering reusable** — making sure the same product-card logic works across Home, Shop, and Search results without duplicating markup or logic.
- **Planning cart state before writing it** — deciding how cart data should be structured and synced with `localStorage` before implementing add/remove/quantity logic.
- **Resisting the urge to over-engineer** — keeping the simplest architecture that's still clean and maintainable at this project's size.

## What I'm Practicing

Arrays & objects, `map` / `filter` / `find` / `reduce` / `sort`, destructuring, DOM manipulation & event delegation, `data-*` attributes, JS modules (`import`/`export`), `localStorage`, `URLSearchParams`, form validation, and structuring vanilla state management without a framework.

## What's Next

Once the core pages (Home, Shop, Product Detail, Cart) are complete and fully responsive, with all JS features working end-to-end, this project moves toward React fundamentals — applying the same state and data-flow thinking, but with the tools React provides.

---

<a name="فارسی"></a>
## فارسی

### چرا این پروژه رو ساختم

قبل از رفتن سراغ React و Next.js، می‌خواستم واقعاً با جاوااسکریپت خالص راحت باشم — نه فقط بلد باشم مفاهیمشو تشخیص بدم، بلکه بتونم باهاش مسائل واقعی رابط کاربری رو حل کنم. برای همین یه رابط کامل فروشگاهی (بر اساس یه طراحی Figma) انتخاب کردم و تصمیم گرفتم فقط با **HTML، CSS و جاوااسکریپت خالص** بسازمش — بدون فریم‌ورک، بدون میان‌بر.

هدف فقط پیاده‌سازی یه طراحی نیست. هدف تمرین چیزهاییه که یه محصول واقعی واقعاً بهشون نیاز داره: رندر رابط کاربری بر اساس داده، فیلتر و مرتب‌سازی، مدیریت وضعیت سبد خرید، ذخیره‌سازی داده با `localStorage`، و منظم نگه‌داشتن کد هرچی پروژه بزرگ‌تر می‌شه.

### چرا اول Vanilla JS

وسوسه‌انگیزه که مستقیم بری سراغ React. ولی ترجیح می‌دم قبل از استفاده از React، بفهمم *چه مشکلی رو حل می‌کنه*. اگه اول خودم مدیریت وضعیت، آپدیت DOM، و مدیریت رویدادها رو دستی بسازم، وقتی برم سراغ React، می‌فهمم چرا وجود داره — نه فقط اینکه چطور سینتکسشو بنویسم.

### تصمیمات معماری

- **ماژول به‌جای یه فایل غول‌پیکر.** جاوااسکریپت به `data/`, `modules/`, `components/`, `layout/`, و `pages/` تقسیم شده — هر فایل یه مسئولیت مشخص داره.
- **رابط کاربری داده‌محور.** محصولات به‌شکل آبجکت‌های ساده جاوااسکریپتی مدل شدن و رابط کاربری *از روی* اون داده تولید می‌شه، نه اینکه هاردکد باشه.
- **HTML معنایی و قابل دسترسی.** استفاده درست از `header`، `nav`، `main`، `section`، `footer`، متن‌های `alt` معنادار — نه فقط انبوهی از `div`.
- **CSS بر اساس نیاز واقعی چیدمان.** انتخاب Flexbox یا Grid و breakpoint‌ها بر اساس نیاز واقعی صفحه، نه به‌صورت پیش‌فرض.

### چالش‌هایی که دارم روشون کار می‌کنم

- **ساخت یه اسلایدر کاربردی از صفر** — مدیریت وضعیت ایندکس، محدودیت‌های لبه (غیرفعال کردن دکمه قبلی/بعدی در ابتدا و انتها)، و محاسبه درست عرض آیتم‌ها هنگام تغییر اندازه پنجره.
- **قابل‌استفاده مجدد نگه‌داشتن رندر محصولات** — که منطق کارت محصول بدون تکرار کد، توی صفحه اصلی، فروشگاه و نتایج جستجو کار کنه.
- **برنامه‌ریزی وضعیت سبد خرید قبل از نوشتنش** — تصمیم‌گیری درباره ساختار داده سبد خرید و همگام‌سازیش با `localStorage`، پیش از نوشتن منطق افزودن/حذف/تغییر تعداد.
- **مقاومت در برابر پیچیده‌سازی بیش از حد** — نگه‌داشتن ساده‌ترین معماری‌ای که همچنان تمیز و قابل نگهداریه.

### چیزهایی که دارم تمرین می‌کنم

آرایه‌ها و آبجکت‌ها، `map` / `filter` / `find` / `reduce` / `sort`، دیستراکچرینگ، دستکاری DOM و event delegation، `data-*`، ماژول‌های جاوااسکریپت (`import`/`export`)، `localStorage`، `URLSearchParams`، اعتبارسنجی فرم، و مدیریت وضعیت بدون فریم‌ورک.

### قدم بعدی

بعد از تکمیل صفحات اصلی (خانه، فروشگاه، جزئیات محصول، سبد خرید) و کاملاً واکنش‌گرا شدنشون، همراه با کارکرد کامل تمام قابلیت‌های جاوااسکریپت، این پروژه به سمت مبانی React پیش می‌ره — با همون تفکر مدیریت وضعیت و جریان داده، ولی این‌بار با ابزارهایی که React ارائه می‌ده.

---
*این لاگ همراه با پیشرفت پروژه به‌روزرسانی می‌شه — هدفش ثبت دلیل تصمیم‌ها هست، نه فقط کد نهایی.*
