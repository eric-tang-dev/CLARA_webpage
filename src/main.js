const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

/* Click-to-enlarge screenshots (not interactive app chrome) */
const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');

document.querySelectorAll('.enlarge').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!lightbox || !lightboxImg) return;
    const img = btn.querySelector('img');
    // Prefer the rendered <img> URL so GitHub Pages base path is respected
    // (Vite rewrites src=, but not data-full=).
    const src = img?.currentSrc || img?.src || btn.dataset.full;
    const caption = btn.dataset.caption || '';
    lightboxImg.src = src;
    lightboxImg.alt = img?.alt || '';
    if (lightboxCaption) lightboxCaption.textContent = caption;
    if (typeof lightbox.showModal === 'function') {
      lightbox.showModal();
    }
  });
});

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const targets = document.querySelectorAll(
    '.section .eyebrow, .section h2, .section-lede, .stat-row-two, .framework-grid, .functions-block, .tool-steps, .media-block, .accomplishments, .whats-next, .partner-grid, .research-block, .team-graphics'
  );

  targets.forEach((el) => el.classList.add('fade-up'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

/* Demo video slot (#demo) stays hidden until /assets/clara-demo.mp4 is added
   and the hidden attribute is removed in index.html. */
