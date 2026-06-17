const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

const quoteForm = document.querySelector('#quoteForm');
const quoteModal = document.querySelector('#quoteModal');
const quoteText = document.querySelector('#quoteText');
const copyQuote = document.querySelector('#copyQuote');
const closeModal = document.querySelector('.modal-close');

function getValue(form, name, fallback = '未填写') {
  const value = form.elements[name]?.value?.trim();
  return value || fallback;
}

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = `餐饮一站式采购询价\n\n公司/品牌：${getValue(quoteForm, 'company')}\n采购产品：${getValue(quoteForm, 'products')}\n数量和要求：${getValue(quoteForm, 'quantity')}\n联系方式：${getValue(quoteForm, 'contact')}\n\n请协助整理产品方案、包装方案、MOQ、单价、交期和运输方案。`;
    quoteText.value = text;
    quoteModal.hidden = false;
  });
}

if (closeModal) closeModal.addEventListener('click', () => quoteModal.hidden = true);
if (quoteModal) quoteModal.addEventListener('click', (event) => {
  if (event.target === quoteModal) quoteModal.hidden = true;
});
if (copyQuote) copyQuote.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(quoteText.value);
    copyQuote.textContent = '已复制';
    setTimeout(() => copyQuote.textContent = '复制询价信息', 1200);
  } catch (error) {
    quoteText.select();
    document.execCommand('copy');
  }
});
