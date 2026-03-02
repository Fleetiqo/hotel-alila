// Set copyright year and handle interactions
document.addEventListener('DOMContentLoaded', () => {
  // Set copyright year
  const yearElement = document.getElementById('copyright-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll for navigation links
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

  // Mobile menu toggle (placeholder for future implementation)
  const mobileMenuBtn = document.querySelector('.header__menu-mobile');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      console.log('Mobile menu clicked - implement mobile menu');
    });
  }

  // Form submission handler
  const contactForm = document.querySelector('.contact__form form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Merci pour votre demande! Nous vous contacterons bientôt.');
      contactForm.reset();
    });
  }
});
