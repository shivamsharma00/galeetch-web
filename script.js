document.addEventListener('DOMContentLoaded', function() {
  const waitlistForm = document.getElementById('waitlist-form');
  
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const emailInput = document.getElementById('email');
      const email = emailInput.value.trim();

      // Simple form submission (replace with your actual logic as needed)
      alert(`Thank you for joining our waitlist, ${email}!`);
      emailInput.value = '';
    });
  }
});
