/*contact*/

const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const status = document.getElementById("contact-status");
  status.textContent = "Sending...";
  setTimeout(() => {
    status.textContent = "Message sent! I will reply soon.";
    form.reset();
  }, 900);
});