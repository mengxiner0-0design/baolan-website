const products = [
  {
    title: 'Product Categories',
    tag: 'Website system',
    desc: 'A clear category map for one-stop restaurant procurement.',
    image: 'images/product-category.svg'
  },
  {
    title: 'Disposable PE Gloves',
    tag: 'Food service',
    desc: 'Clean single-use gloves for dining, kitchen and takeaway scenes.',
    image: 'images/pe-gloves.svg'
  },
  {
    title: 'Wet Wipes',
    tag: 'Individually packed',
    desc: 'Single sachet wipes for restaurants, hotels and delivery kits.',
    image: 'images/wet-wipes.svg'
  },
  {
    title: 'Disposable Aprons',
    tag: 'Back of house',
    desc: 'Protective aprons for kitchen, cleaning and food preparation.',
    image: 'images/apron.svg'
  },
  {
    title: 'Takeaway Bags',
    tag: 'Delivery packaging',
    desc: 'Custom carry bags and food packaging for delivery brands.',
    image: 'images/takeaway-bag.svg'
  },
  {
    title: 'Steamer Paper',
    tag: 'Food liner',
    desc: 'Restaurant-ready liners for steamed buns, dim sum and kitchen prep.',
    image: 'images/steamer-paper.svg'
  },
  {
    title: 'Tablecloth',
    tag: 'Dining setup',
    desc: 'Disposable table covers for dining, events and quick turnover.',
    image: 'images/tablecloth.svg'
  },
  {
    title: 'Napkins',
    tag: 'Tableware',
    desc: 'Soft tissue and napkin options for dine-in and takeaway use.',
    image: 'images/napkin.svg'
  },
  {
    title: 'Disposable Grill',
    tag: 'Outdoor dining',
    desc: 'Convenient single-use grill products for seasonal and outdoor use.',
    image: 'images/disposable-grill.svg'
  },
  {
    title: 'Meal Kit',
    tag: 'Cutlery pack',
    desc: 'Fork, spoon, napkin and condiment packing for takeaway meals.',
    image: 'images/cutlery-pack.svg'
  },
  {
    title: 'Belly Band',
    tag: 'Brand wrap',
    desc: 'Custom paper wraps for meal boxes, sets and retail packaging.',
    image: 'images/belly-band.svg'
  },
  {
    title: 'Custom Labels',
    tag: 'SKU control',
    desc: 'Barcode, batch, size, carton and store-specific labels.',
    image: 'images/labels.svg'
  },
  {
    title: 'Custom Packaging',
    tag: 'OEM / ODM',
    desc: 'Flexible packaging systems with brand colors and bilingual copy.',
    image: 'images/custom-packaging.svg'
  },
  {
    title: 'Restaurant Scene',
    tag: 'Scenario visual',
    desc: 'Front-of-house and back-of-house supply storytelling.',
    image: 'images/restaurant-scene.svg'
  },
  {
    title: 'Brand Display',
    tag: 'Chain identity',
    desc: 'Unified consumable visuals for multi-store restaurant brands.',
    image: 'images/brand-display.svg'
  },
  {
    title: 'Inquiry Zone',
    tag: 'Quote section',
    desc: 'A clean visual background for RFQ and procurement forms.',
    image: 'images/quote-background.svg'
  },
  {
    title: 'Paper Cups',
    tag: 'Drinkware',
    desc: 'Hot and cold cup options with custom print support.',
    image: 'images/paper-cup.svg'
  },
  {
    title: 'Chef Hats',
    tag: 'Kitchen hygiene',
    desc: 'Disposable headwear for kitchen, factory and food preparation.',
    image: 'images/chef-hat.svg'
  },
  {
    title: 'Eco Options',
    tag: 'Sustainable line',
    desc: 'Alternative materials and reduced-plastic procurement options.',
    image: 'images/eco-packaging.svg'
  }
];

const productRoot = document.querySelector('[data-products]');

if (productRoot) {
  productRoot.innerHTML = products.map((product, index) => `
    <article class="product-card reveal" style="transition-delay:${Math.min(index * 35, 420)}ms">
      <img src="${product.image}" alt="${product.title}" loading="lazy" />
      <div>
        <span>${product.tag}</span>
        <h3>${product.title}</h3>
        <p>${product.desc}</p>
      </div>
    </article>
  `).join('');
}

const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

function setHeaderState() {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
}

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

navToggle?.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

nav?.addEventListener('click', event => {
  if (event.target.matches('a')) document.body.classList.remove('nav-open');
});

const revealObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  }
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const parallax = document.querySelector('[data-parallax]');

window.addEventListener('mousemove', event => {
  if (!parallax || window.matchMedia('(max-width: 760px)').matches) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 18;
  parallax.style.transform = `translate3d(${x}px, ${y}px, 0)`;
}, { passive: true });
