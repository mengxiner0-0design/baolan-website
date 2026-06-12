document.getElementById('quoteForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const subject = 'Ready2BBQ Inquiry';
  const body = `Hello Rita,\n\nI am interested in Ready2BBQ products.\n\nFull Name: ${data.get('name') || ''}\nCompany: ${data.get('company') || ''}\nEmail: ${data.get('email') || ''}\nPhone / WhatsApp: ${data.get('phone') || ''}\nCountry: ${data.get('country') || ''}\nEstimated Quantity: ${data.get('quantity') || ''}\nProduct Interest: ${data.get('interest') || ''}\n\nMessage:\n${data.get('message') || ''}\n\nThank you.`;

  window.location.href = `mailto:rita@cnbaolan.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
