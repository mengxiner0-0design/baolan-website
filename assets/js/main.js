const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const form = document.getElementById('quoteForm');
const modal = document.getElementById('quoteModal');
const quoteText = document.getElementById('quoteText');
const closeBtn = document.querySelector('.modal-close');
const copyBtn = document.getElementById('copyQuote');

if (form && modal && quoteText) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const text = [
      '【餐饮耗材采购询价】',
      `公司/品牌：${data.get('company') || ''}`,
      `采购产品：${data.get('products') || ''}`,
      `数量和定制要求：${data.get('quantity') || ''}`,
      `联系方式：${data.get('contact') || ''}`,
      '',
      '请根据以上信息提供产品方案、包装建议、MOQ、单价、打样和交期。'
    ].join('\n');
    quoteText.value = text;
    modal.hidden = false;
  });
}
if (closeBtn && modal) closeBtn.addEventListener('click', () => modal.hidden = true);
if (copyBtn && quoteText) copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(quoteText.value);
    copyBtn.textContent = '已复制';
    setTimeout(() => copyBtn.textContent = '复制询价信息', 1200);
  } catch {
    quoteText.select();
    document.execCommand('copy');
  }
});
