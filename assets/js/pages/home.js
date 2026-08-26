// حذف فاصله بین هدر و مِین بعد از حذف نوار سیاه بالای هدر 
export function initHomePage() {
  const closeBtn = document.querySelector(".cross-icon-cover");
  closeBtn.addEventListener("click", () => {
    const alertBar = document.querySelector(".alertBar");
    alertBar.remove();

    document.documentElement.style.setProperty("--header-height", "96px");
    document.documentElement.style.setProperty(
      "--header-height-mobile",
      "70px",
    );
  });
}

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
