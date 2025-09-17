// -------------------------
// Hamburger menu toggle
// -------------------------
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navCancel = document.getElementById('nav-cancel');

if (hamburger && nav && navCancel) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    navCancel.style.display = nav.classList.contains('active') ? 'block' : 'none';
  });

  navCancel.addEventListener('click', () => {
    nav.classList.remove('active');
    navCancel.style.display = 'none';
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        navCancel.style.display = 'none';
      }
    });
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




