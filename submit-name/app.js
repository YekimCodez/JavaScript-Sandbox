const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const submitButton = document.querySelector('#submit');
const message = document.querySelector('#message');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the input fields
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();

  // Check if both fields are filled
  if (firstNameValue && lastNameValue) {
    message.textContent = `Hello, ${firstNameValue} ${lastNameValue}!`;
    message.style.color = 'green';
  } else {
    message.textContent = 'Please fill in both fields.';
    message.style.color = 'red';
  }

  // Clear the input fields after submission
    firstName.value = '';
    lastName.value = '';
});