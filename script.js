// -------------------------
// Hamburger menu toggle
// -------------------------
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
const nav = document.getElementById('nav');
const navCancel = document.getElementById('nav-cancel');

// Open nav
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  if (nav.classList.contains('active')) {
    navCancel.style.display = 'block';
  } else {
    navCancel.style.display = 'none';
  }
});

// Close nav on cancel button
navCancel.addEventListener('click', () => {
  nav.classList.remove('active');
  navCancel.style.display = 'none';
});

// Close nav when any nav link is clicked (mobile only)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove('active');
      navCancel.style.display = 'none';
    }
  });
});

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




