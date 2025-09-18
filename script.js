// -------------------------
// Hamburger menu toggle
// -------------------------

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.nav').classList.remove('active');
});


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




