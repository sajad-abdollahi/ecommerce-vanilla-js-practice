export function initNewsletter() {
  const form = document.querySelector(".newsletter-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector(".newsletter-form input");
    const email = input.value.trim();
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
