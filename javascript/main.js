// ========================
// CURSOR GLOW
// ========================
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

// ========================
// SCROLL REVEAL
// ========================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars when they come into view
      entry.target.querySelectorAll('.skill-bar[data-width]').forEach((bar) => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el) => revealObserver.observe(el));

// ========================
// SEND MESSAGE BUTTON
// ========================
const sendBtn = document.getElementById('sendBtn');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    sendBtn.textContent = '✅ Pesan Terkirim!';
    sendBtn.style.background = 'var(--accent2)';

    setTimeout(() => {
      sendBtn.textContent = 'Kirim Pesan →';
      sendBtn.style.background = '';
    }, 3000);
  });
}

function slidecert(btn, direction) {
  const slider = btn.closest('.cert-slider');
  const slides = slider.querySelector('.cert-slides');
  const dots = slider.querySelectorAll('.dot');
  const total = slider.querySelectorAll('.cert-slide').length;

  let current = parseInt(slides.dataset.current || 0);
  const newIndex = current + direction;

  // Batas: tidak bisa kurang dari 0 atau lebih dari total-1
  if (newIndex < 0 || newIndex >= total) return;

  current = newIndex;
  slides.dataset.current = current;

  slides.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach(d => d.classList.remove('active'));
  dots[current].classList.add('active');

  // Update tampilan tombol (opsional: redup kalau di batas)
  const prevBtn = slider.querySelector('.slider-btn.prev');
  const nextBtn = slider.querySelector('.slider-btn.next');
  prevBtn.style.opacity = current === 0 ? '0.3' : '1';
  nextBtn.style.opacity = current === total - 1 ? '0.3' : '1';
}