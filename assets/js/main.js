/* ============================================
   LOGIAI — Main JavaScript
   ============================================ */

// ---- Sticky Nav ----
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
}, { passive: true });

// ---- Mobile Hamburger ----
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

// ---- Active Nav Link ----
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ---- Scroll Reveal Animation ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('[data-reveal]').forEach(el => {
  revealObserver.observe(el);
});

// ---- Counter Animation ----
function animateCounter(el, start, end, duration, suffix = '') {
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * (end - start) + start);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Observe counter elements
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = 'true';
      const el = entry.target;
      const end = parseInt(el.dataset.count) || 0;
      const suffix = el.dataset.suffix || '';
      animateCounter(el, 0, end, 1500, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => {
  counterObserver.observe(el);
});

// ---- Contact Form ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      contactForm.style.display = 'none';
      const success = document.querySelector('.form-success');
      if (success) {
        success.style.display = 'block';
      }
    }, 1200);
  });
}

// ---- Smooth hover effects on cards ----
document.querySelectorAll('.signal-card, .loop-card, .pattern-card, .margin-card, .vision-block').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.willChange = 'transform, box-shadow';
  });
  card.addEventListener('mouseleave', function () {
    this.style.willChange = 'auto';
  });
});

// ---- Parallax subtle effect on hero ----
const heroBgShapes = document.querySelectorAll('.hero-bg-shape, .hero-bg-shape-2');
if (heroBgShapes.length) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroBgShapes.forEach((shape, i) => {
      shape.style.transform = `translateY(calc(-50% + ${scrolled * (i === 0 ? 0.1 : -0.05)}px))`;
    });
  }, { passive: true });
}
