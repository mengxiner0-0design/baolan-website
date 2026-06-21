const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealItems.forEach((item) => revealObserver.observe(item));

const quoteForm = document.getElementById('quoteForm');
const formNote = document.getElementById('formNote');

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const name = formData.get('name') || '';
    const company = formData.get('company') || '';
    const email = formData.get('email') || '';
    const product = formData.get('product') || '';
    const quantity = formData.get('quantity') || '';
    const market = formData.get('market') || '';
    const message = formData.get('message') || '';

    const subject = encodeURIComponent(`Inquiry - ${product || 'Beauty Salon Supplies'}`);
    const body = encodeURIComponent(
`Hello BeautyPro Supply,

I would like to request a quotation.

Name: ${name}
Company: ${company}
Email: ${email}
Product Interest: ${product}
Quantity: ${quantity}
Market: ${market}
Message: ${message}

Please get back to me with suitable options.
`
    );

    window.location.href = `mailto:sales@example.com?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = 'Your email client should open now. Replace sales@example.com with your real business email before publishing.';
    }
  });
}
