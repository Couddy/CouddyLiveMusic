// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const iconMenu = document.getElementById('iconMenu');
const iconClose = document.getElementById('iconClose');

function closeMenu(){
  mobileMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  iconMenu.classList.remove('hidden');
  iconClose.classList.add('hidden');
}
menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  iconMenu.classList.toggle('hidden', isOpen);
  iconClose.classList.toggle('hidden', !isOpen);
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

// Reveal au scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('is-visible', entry.isIntersecting);
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));
