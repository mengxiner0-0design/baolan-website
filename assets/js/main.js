const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#mainNav');

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
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const quoteForm = document.querySelector('#quoteForm');
const modal = document.querySelector('#quoteModal');
const quoteText = document.querySelector('#quoteText');
const copyQuote = document.querySelector('#copyQuote');
const modalClose = document.querySelector('.modal-close');

function closeModal() {
  if (modal) modal.hidden = true;
}

if (quoteForm && modal && quoteText) {
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const company = data.get('company') || '未填写';
    const products = data.get('products') || '未填写';
    const quantity = data.get('quantity') || '未填写';
    const contact = data.get('contact') || '未填写';
    quoteText.value = `餐饮耗材一站式采购询价\n\n公司/品牌：${company}\n采购产品：${products}\n数量和要求：${quantity}\n联系方式：${contact}\n\n请根据以上清单协助整理产品方案、包装方式、是否可定制、MOQ、交期和报价。`;
    modal.hidden = false;
  });
}

if (copyQuote && quoteText) {
  copyQuote.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(quoteText.value);
      copyQuote.textContent = '已复制';
      setTimeout(() => (copyQuote.textContent = '复制询价信息'), 1200);
    } catch (error) {
      quoteText.focus();
      quoteText.select();
      document.execCommand('copy');
    }
  });
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) {
  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
}
