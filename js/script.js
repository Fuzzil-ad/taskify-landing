// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu after tapping a link
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Sticky header shadow on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = '0 6px 20px rgba(54,79,107,0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});
