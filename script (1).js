/**
 * Morden Digi Tech — script.js
 * Vanilla JS: Loader, Canvas, Particles, Navbar, Slider, Counter, Reveal
 */

/* ══════════════════════════════════════
   1. LOADING SCREEN
══════════════════════════════════════ */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    // Kick off reveal after loader hides
    setTimeout(revealOnScroll, 100);
  }, 1800);
});

/* ══════════════════════════════════════
   2. FOOTER YEAR
══════════════════════════════════════ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ══════════════════════════════════════
   3. STICKY NAVBAR
══════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ══════════════════════════════════════
   4. HAMBURGER MENU
══════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Close menu on outside click
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

/* ══════════════════════════════════════
   5. CIRCUIT CANVAS ANIMATION
══════════════════════════════════════ */
(function initCircuit() {
  const canvas = document.getElementById('circuitCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, nodes, lines, animFrame;

  const NEON = '#00f0ff';
  const NODE_COUNT = 55;
  const MAX_DIST = 180;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createNodes() {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.6,
      pulse: Math.random() * Math.PI * 2,
    }));
  }

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);

    // Update nodes
    nodes.forEach(n => {
      n.pulse += 0.025;
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.45;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);

          // Occasionally draw L-shaped circuit lines
          if (Math.abs(dx) > 30 && Math.abs(dy) > 30 && Math.random() < 0.3) {
            ctx.lineTo(nodes[i].x, nodes[j].y); // vertical segment
          }
          ctx.lineTo(nodes[j].x, nodes[j].y);

          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      const glow = Math.sin(n.pulse) * 0.4 + 0.6;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * (0.8 + glow * 0.4), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${glow * 0.85})`;
      ctx.fill();

      // Glow halo on bright nodes
      if (glow > 0.85) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, 0.06)`;
        ctx.fill();
      }
    });

    animFrame = requestAnimationFrame(drawFrame);
  }

  function init() {
    cancelAnimationFrame(animFrame);
    resize();
    createNodes();
    drawFrame();
  }

  window.addEventListener('resize', init);
  init();
})();

/* ══════════════════════════════════════
   6. FLOATING PARTICLES IN HERO
══════════════════════════════════════ */
(function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const SYMBOLS = ['</', '{}', '=>', '01', '>>'];
  const COUNT = 14;

  for (let i = 0; i < COUNT; i++) {
    const el = document.createElement('span');
    el.className = 'particle';
    el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

    const size = Math.random() * 10 + 9;
    const startX = Math.random() * 100;
    const delay = Math.random() * 8;
    const dur = Math.random() * 12 + 8;

    el.style.cssText = `
      position: absolute;
      left: ${startX}%;
      bottom: -10%;
      font-family: 'Share Tech Mono', monospace;
      font-size: ${size}px;
      color: rgba(0, 240, 255, ${Math.random() * 0.25 + 0.06});
      animation: floatUp ${dur}s ${delay}s infinite linear;
      pointer-events: none;
      user-select: none;
    `;
    container.appendChild(el);
  }

  // Inject keyframe if not already present
  if (!document.getElementById('floatUpStyle')) {
    const style = document.createElement('style');
    style.id = 'floatUpStyle';
    style.textContent = `
      @keyframes floatUp {
        0%   { transform: translateY(0) rotate(0deg); opacity: 0; }
        10%  { opacity: 1; }
        90%  { opacity: 0.4; }
        100% { transform: translateY(-110vh) rotate(20deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
})();

/* ══════════════════════════════════════
   7. SCROLL REVEAL
══════════════════════════════════════ */
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// Also trigger on scroll (fallback)
document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
});

/* ══════════════════════════════════════
   8. COUNTER ANIMATION (hero stats)
══════════════════════════════════════ */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  let triggered = false;

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current);
    }, 16);
  }

  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !triggered) {
      triggered = true;
      counters.forEach(animateCounter);
    }
  }, { threshold: 0.4 });

  obs.observe(heroSection);
})();

/* ══════════════════════════════════════
   9. TESTIMONIAL SLIDER
══════════════════════════════════════ */
(function initSlider() {
  const track  = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('sliderDots');
  if (!track || !prevBtn || !nextBtn) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const total = cards.length;
  let current = 0;
  let autoTimer;

  // Build dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Review ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  nextBtn.addEventListener('click', () => { next(); resetAuto(); });
  prevBtn.addEventListener('click', () => { prev(); resetAuto(); });

  // Swipe support (touch)
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); resetAuto(); }
  }, { passive: true });

  function startAuto() { autoTimer = setInterval(next, 5000); }
  function resetAuto() { clearInterval(autoTimer); startAuto(); }

  startAuto();
})();

/* ══════════════════════════════════════
   10. ACTIVE NAV LINK ON SCROLL
══════════════════════════════════════ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.id;
      }
    });
    links.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--neon)';
      }
    });
  }, { passive: true });
})();

/* ══════════════════════════════════════
   11. GOOGLE FORM PLACEHOLDER TOGGLE
   (hides placeholder once form URL is set)
══════════════════════════════════════ */
(function checkFormPlaceholder() {
  const iframe = document.querySelector('.form-container iframe');
  const placeholder = document.querySelector('.form-placeholder');
  if (!iframe || !placeholder) return;

  const src = iframe.getAttribute('src') || '';
  if (src.includes('YOUR_GOOGLE_FORM_LINK')) {
    // Show placeholder, hide iframe (already hidden behind placeholder via z-index)
    placeholder.style.display = 'flex';
  } else {
    // Real form link provided — hide placeholder
    placeholder.style.display = 'none';
  }
})();
