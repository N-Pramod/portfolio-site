// -------------------------
// Hamburger menu toggle
// -------------------------
// Hamburger menu toggle removed

// -------------------------
// Initialize AOS
// -------------------------
AOS.init();

// -------------------------
// Contact form submission
// -------------------------
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://formspree.io/f/mblavakw", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset(); // Clear form
        window.location.href = "thank-you.html"; // ✅ Redirect
      } else {
        alert("⚠️ Something went wrong. Please try again later.");
      }
    })
    .catch(() => {
      alert("⚠️ Failed to submit the form. Please check your connection.");
    });
});




