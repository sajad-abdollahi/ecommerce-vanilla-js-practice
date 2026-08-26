export function renderFooter() {
  const footer = document.querySelector("footer");
  footer.innerHTML=`
    <div class="footer-container">

            <div class="footer-brand">
                <div class="footer-logo">
                    SHOP.CO
                </div>

                <p>
                    We have clothes that suit your style and which you're proud to wear.
                </p>

                <div class="footer-socials">
                    <a href="#">
                        <span class="icon" data-icon="twitter" data-icon-path="icons"></span>
                    </a>

                    <a href="#">
                        <span class="icon" data-icon="facebook" data-icon-path="icons"></span>
                    </a>

                    <a href="#">
                        <span class="icon" data-icon="instagram" data-icon-path="icons"></span>
                    </a>
                    <a href="#">
                        <span class="icon" data-icon="github" data-icon-path="icons"></span>
                    </a>
                </div>
            </div>


            <div class="footer-links">

                <div class="footer-column">
                    <h3>COMPANY</h3>

                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>


                <div class="footer-column">
                    <h3>HELP</h3>

                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>


                <div class="footer-column">
                    <h3>FAQ</h3>

                    <a href="#">Account</a>
                    <a href="#">Manage Deliveries</a>
                    <a href="#">Orders</a>
                    <a href="#">Payments</a>
                </div>


                <div class="footer-column">
                    <h3>RESOURCES</h3>

                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>

            </div>

        </div>


        <div class="footer-bottom">

            <p>
                Shop.co &copy; 2000-2026, All Rights Reserved
            </p>

            <div class="payment-methods">
                <a href="#">
                    <span class="icon" data-icon="visa" data-icon-path="icons"></span>
                </a>
                <a href="#">
                    <span class="icon" data-icon="mastercard" data-icon-path="icons"></span>
                </a>
                <a href="#">
                    <span class="icon" data-icon="paypal" data-icon-path="icons"></span>
                </a>
                <a href="#">
                    <span class="icon" data-icon="iphonpay" data-icon-path="icons"></span>
                </a>
                <a href="#">
                    <span class="icon" data-icon="gpay" data-icon-path="icons"></span>
                </a>
        </div>

    </div>

  `
}
