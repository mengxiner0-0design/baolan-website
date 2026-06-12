document.getElementById('quoteForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const subject = encodeURIComponent('Ready2BBQ Inquiry - Disposable Charcoal Grill Bento Box');
  const body = encodeURIComponent(`Hello Rita,

I am interested in Ready2BBQ products. Please contact me with quotation and customization details.

Name: ${data.get('name') || ''}
Company: ${data.get('company') || ''}
Email: ${data.get('email') || ''}
Phone / WhatsApp: ${data.get('phone') || ''}
Country: ${data.get('country') || ''}
Estimated Quantity: ${data.get('quantity') || ''}
Product Interest: ${data.get('interest') || ''}

Message:
${data.get('message') || ''}

Thank you.`);
  window.location.href = `mailto:rita@cnbaolan.com?subject=${subject}&body=${body}`;
});
