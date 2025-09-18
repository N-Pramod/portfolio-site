// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const closeBtn = document.getElementById('close-btn');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Open mobile menu
  hamburger.addEventListener('click', () => {
    nav.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close mobile menu
  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Close menu when clicking on nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  // Close menu when clicking outside
  nav.addEventListener('click', (e) => {
    if (e.target === nav) {
      nav.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animate skill bars when they come into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 200);
      });
    }
  });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// Contact form submission
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    const formData = new FormData(contactForm);

    fetch("https://formspree.io/f/mblavakw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          contactForm.reset();
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
          submitBtn.style.background = 'linear-gradient(45deg, #10b981, #059669)';
          
          setTimeout(() => {
            window.location.href = "thank-you.html";
          }, 1500);
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(() => {
        submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Try Again';
        submitBtn.style.background = 'linear-gradient(45deg, #ef4444, #dc2626)';
        
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = 'linear-gradient(45deg, #6366f1, #8b5cf6)';
          submitBtn.disabled = false;
        }, 3000);
      });
  });
}

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 50);
    }, 1000);
  }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroParticles = document.querySelector('.hero-particles');
  
  if (heroParticles) {
    heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Add click animation to buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .btn {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);