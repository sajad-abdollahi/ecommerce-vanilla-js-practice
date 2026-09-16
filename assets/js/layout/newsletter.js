export function renderNewsletter() {
  const section = document.querySelector(".newsletter-section");
  section.innerHTML = `
            <div class="newsletter-container">

                <h2 class="newsletter-title">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h2>

                <form class="newsletter-form" novalidate>

                    <div class="newsletter-input-wrapper">
                        <span class="icon" data-icon="email" data-icon-path="icons"></span>
                        <input type="email" placeholder="Enter your email address" required>
                    </div>

                    <button type="submit" class="newsletter-button">
                        Subscribe to Newsletter
                    </button>

                    <p class="newsletter-message"></p>
                </form>
            </div>
  `;
}

export function initNewsletterBehavior() {
  const form = document.querySelector(".newsletter-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector(".newsletter-form input");
    const message = document.querySelector(".newsletter-message");

    const messageColor = document.documentElement;

    if (input.checkValidity()) {
      message.textContent = "You have successfully joined!";
      messageColor.style.setProperty("--validation-color", "#33f116");
    } else {
      message.textContent = "Please enter a valid email.";
      messageColor.style.setProperty("--validation-color", "red");
    }
  });
}

