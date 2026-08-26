export function renderHeader(basePath = ".") {
  const header = document.querySelector("header");
  header.innerHTML = `
    <section class="alertBar">
            <span> Sign up and get 20% off to your first order . <a href="#">Sign Up Now</a></span>
            <button type="button" class="cross-icon-cover">
                <span class="icon" data-icon="Cross" data-icon-path="icons"></span>
            </button>
        </section>
        <section class="header">
            <label for="nav-control" class="nav-control-label">
                <div></div>
                <div></div>
                <div></div>
            </label>
            <div class="logo">SHOP.CO</div>
            <input type="checkbox" id="nav-control" class="nav-control-checkbox">

            <nav>
                <a href="${basePath}/pages/Shop.html">Shop</a>
                <a href="#">On Sale</a>
                <a href="#">New Arrivals</a>
                <a href="#">Brands</a>
            </nav>

            <div class="head-tool">
                <div class="search-console">
                    <button type="button" class="icon-search">
                        <span class="icon" data-icon="search" data-icon-path="icons"></span>
                    </button>
                    <input type="search" id="head-search" placeholder="Search for products...">
                </div>
                <div class="cart-and-prof-cover">
                    <button type="button" class="head-cart">
                        <span class="icon" data-icon="cart" data-icon-path="icons"></span>
                    </button>
                    <button type="button" class="head-prof">
                        <span class="icon" data-icon="prof" data-icon-path="icons"></span>
                    </button>
                </div>
            </div>
     </section>
  `;
}
