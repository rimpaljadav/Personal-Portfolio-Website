document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting until validated

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    let isValid = true;
    let errorMessage = '';

    // Validate name
    if (name.value.trim() === '') {
      isValid = false;
      errorMessage += 'Please enter your name.\n';
    }

    // Validate email using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      isValid = false;
      errorMessage += 'Please enter a valid email address.\n';
    }

    // Validate message
    if (message.value.trim().length < 10) {
      isValid = false;
      errorMessage += 'Message should be at least 10 characters.\n';
    }

    if (!isValid) {
      alert(errorMessage);
    } else {
      alert('Message sent successfully!');
      form.reset();
    }
  });
});
