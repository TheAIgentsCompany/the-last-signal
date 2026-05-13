// Starfield animation
function createStarfield() {
  const container = document.getElementById('starfield');
  if (!container) return;
  const count = 120;
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
      opacity: ${0.2 + Math.random() * 0.5};
    `;
    container.appendChild(star);
  }
}

// Highlight current page in sidebar
function highlightNav() {
  const path = window.location.pathname.replace(/\.html$/, '') || '/';
  document.querySelectorAll('.sidebar-link').forEach(a => {
    const href = a.getAttribute('href').replace(/\.html$/, '') || '/';
    a.classList.toggle('active', href === path);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createStarfield();
  highlightNav();
});
