// ══════════════════════════════════════════════════════════════
// THE LAST SIGNAL — Main Application JavaScript (Upgraded)
// ══════════════════════════════════════════════════════════════

// ── Starfield Animation ─────────────────────────────────
function createStarfield() {
  const container = document.getElementById('starfield');
  if (!container) return;
  const count = 140;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --duration: ${2 + Math.random() * 4}s;
      animation-delay: ${Math.random() * 5}s;
      opacity: ${0.15 + Math.random() * 0.5};
    `;
    container.appendChild(star);
  }
}

// ── Reading Progress Bar ───────────────────────────────
function setupReadingProgress() {
  const bar = document.getElementById('readingProgress');
  if (!bar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = Math.min(progress, 100) + '%';
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// ── Reading Time Estimator ─────────────────────────────
function estimateReadingTime() {
  const content = document.querySelector('.chapter-content');
  const readTimeDisplay = document.getElementById('readingTime');
  if (!content || !readTimeDisplay) return;

  const text = content.textContent || '';
  const wordCount = text.trim().split(/\s+/).length;
  // Average reading speed: 200 words/minute for hard sci-fi
  const minutes = Math.max(1, Math.round(wordCount / 200));
  readTimeDisplay.textContent = `${minutes} min read`;
}

// ── Scroll-Triggered Reveal Animations ────────────────
function setupScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(el => observer.observe(el));
}

// ── Timeline Item Reveals ─────────────────────────────
function setupTimelineReveals() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach(el => observer.observe(el));
}

// ── Page Fade-In Transition ───────────────────────────
function setupPageTransition() {
  const main = document.querySelector('.main');
  if (main) {
    main.classList.add('page-enter');
  }
}

// ── Smooth Chapter Navigation ─────────────────────────
function setupChapterNav() {
  // Already handled by CSS scroll-behavior: smooth
  // But we can add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'ArrowLeft') {
      const prevLink = document.querySelector('.chapter-nav-bottom a:first-child');
      if (prevLink && !prevLink.classList.contains('nav-disabled')) {
        e.preventDefault();
        window.location.href = prevLink.getAttribute('href');
      }
    }
    if (e.altKey && e.key === 'ArrowRight') {
      const nextLink = document.querySelector('.chapter-nav-bottom a:last-child');
      if (nextLink && !nextLink.classList.contains('nav-disabled')) {
        e.preventDefault();
        window.location.href = nextLink.getAttribute('href');
      }
    }
  });
}

// ── Scroll to Top Button ──────────────────────────────
function setupScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  const toggleVisibility = () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  toggleVisibility();
}

// ── Mobile Sidebar Toggle ─────────────────────────────
function setupMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  // Only set up if we're on mobile
  if (window.innerWidth > 900) return;

  const brand = sidebar.querySelector('.sidebar-brand');
  const links = sidebar.querySelector('.sidebar-links');
  if (!brand || links) return; // Already has toggle structure from sidebar.js

  // The sidebar.js handles mobile toggle now
}

// ── Highlight Current Page in Sidebar ────────────────
function highlightNav() {
  const path = window.location.pathname.replace(/\.html$/, '') || '/';
  document.querySelectorAll('.sidebar-link').forEach(a => {
    const href = a.getAttribute('href').replace(/\.html$/, '') || '/';
    a.classList.toggle('active', href === path);
  });
}

// ── Initialize Everything ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  createStarfield();
  setupReadingProgress();
  estimateReadingTime();
  setupScrollReveals();
  setupTimelineReveals();
  setupPageTransition();
  setupChapterNav();
  setupScrollTop();
  highlightNav();
});
