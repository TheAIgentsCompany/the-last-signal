// Sidebar navigation component
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  sidebar.innerHTML = `
    <div class="sidebar-brand">
      <h1>The Last Signal</h1>
      <div class="subtitle">A Space Chronicle</div>
    </div>

    <div class="sidebar-section">Prologue</div>
    <a href="/blog/prologue.html" class="sidebar-link"><span class="icon">⟡</span> The Arrow and the Void</a>

    <div class="sidebar-section">Part I — Lost</div>
    <a href="/blog/part-1/accident.html" class="sidebar-link"><span class="icon">⊙</span> The Accident</a>
    <a href="/blog/part-1/ship.html" class="sidebar-link"><span class="icon">◈</span> The Ship That Remains</a>

    <div class="sidebar-section">Part II — Staying Alive</div>
    <a href="/blog/part-2/daily-log.html" class="sidebar-link"><span class="icon">☰</span> Daily Log</a>
    <a href="/blog/part-2/silence.html" class="sidebar-link"><span class="icon">◌</span> The Silence</a>

    <div class="sidebar-section">Part III — Signals</div>
    <a href="/blog/part-3/signals.html" class="sidebar-link"><span class="icon">⌇</span> The Calculus of Rescue</a>

    <div class="sidebar-section">Epilogue</div>
    <a href="/blog/epilogue.html" class="sidebar-link"><span class="icon">✦</span> Return</a>

    <div style="margin:1rem 1.2rem 0;border-top:1px solid var(--border-dim);padding-top:1rem;">
      <div class="sidebar-section" style="padding:0 0 0.3rem;color:#f87171;">📖 Survival Manual</div>
      <a href="/manual/life-support.html" class="sidebar-link"><span class="icon">◉</span> I. Life Support</a>
      <a href="/manual/eva-emergency.html" class="sidebar-link"><span class="icon">◉</span> II. Emergency EVA</a>
      <a href="/manual/psychological.html" class="sidebar-link"><span class="icon">◉</span> III. Psychological</a>
      <a href="/manual/navigation.html" class="sidebar-link"><span class="icon">◉</span> IV. Navigation</a>
      <a href="/manual/rationing.html" class="sidebar-link"><span class="icon">◉</span> V. Rationing</a>
      <a href="/manual/improvisation.html" class="sidebar-link"><span class="icon">◉</span> VI. Improvisation</a>
    </div>

    <div style="margin-top:auto;padding:1rem 1.2rem;border-top:1px solid var(--border-dim);">
      <a href="/" class="sidebar-link" style="font-size:0.7rem;color:var(--text-muted);">
        <span class="icon">⌂</span> Back to Home
      </a>
    </div>
  `;

  // Highlight active link
  const path = window.location.pathname.replace(/\.html$/, '') || '/';
  sidebar.querySelectorAll('.sidebar-link').forEach(a => {
    const href = a.getAttribute('href').replace(/\.html$/, '') || '/';
    a.classList.toggle('active', href === path);
  });
});
