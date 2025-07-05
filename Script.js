document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.();
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;

  if (!name || !email || !destination || !date) {
    alert("Please fill out all fields!");
    return;
  }

  const confirmationMessage = `
    Thank you, ${name}! Your trip to ${destination} on ${date} has been booked.
    A confirmation has been sent to ${email}.
  `;

  document.getElementById('confirmationMessage').textContent = confirmationMessage;

  // Reset the form
  this.reset();
});
