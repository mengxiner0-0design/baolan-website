const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.product-card');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const value = btn.dataset.filter;
    cards.forEach(card => {
      const show = value === 'all' || card.dataset.category === value;
      card.classList.toggle('hidden', !show);
    });
  });
});
