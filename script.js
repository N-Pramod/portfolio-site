// AOS Initialization
AOS.init();

// EmailJS Initialization
(function() {
  emailjs.init("your_emailjs_user_id"); // Replace with your actual user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('your_service_id', 'your_template_id', this)
    .then(function(response) {
       alert('Message sent successfully!');
    }, function(error) {
       alert('Failed to send message. Please try again.');
       console.log(error);
    });

  // Optionally reset the form
  this.reset();
});
