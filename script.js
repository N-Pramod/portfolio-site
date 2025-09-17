// -------------------------
// Hamburger menu toggle
// -------------------------
const hamburger = document.getElementById('hamburger');
const mobileDropdown = document.getElementById('mobileDropdown');
const dropdownClose = document.getElementById('dropdownClose');

// Show dropdown only on mobile
function isMobile() {
  return window.innerWidth <= 768;
}

if (hamburger && mobileDropdown && dropdownClose) {
  hamburger.addEventListener('click', () => {
    if (isMobile()) {
      mobileDropdown.classList.add('active');
    }
  });

  dropdownClose.addEventListener('click', () => {
    mobileDropdown.classList.remove('active');
  });

  document.querySelectorAll('.dropdown-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileDropdown.classList.remove('active');
    });
  });

  // Hide dropdown on resize to desktop
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      mobileDropdown.classList.remove('active');
    }
  });
}

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




