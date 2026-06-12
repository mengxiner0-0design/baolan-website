const quoteForm = document.getElementById('quoteForm');
const formStatus = document.getElementById('formStatus');

quoteForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const submitButton = quoteForm.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  formStatus.textContent = 'Sending your inquiry, please wait...';

  try {
    const formData = new FormData(quoteForm);
    const response = await fetch(quoteForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    const result = await response.json();

    if (result.success) {
      quoteForm.reset();
      formStatus.textContent = 'Thank you. Your inquiry has been sent successfully. Rita will reply by email or WhatsApp.';
    } else {
      formStatus.textContent = result.message || 'Submission failed. Please email Rita at rita@cnbaolan.com.';
    }
  } catch (error) {
    formStatus.textContent = 'Network error. Please email Rita at rita@cnbaolan.com or contact WhatsApp +86 188 2368 5188.';
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});
