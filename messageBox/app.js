// Get the button element
const button = document.querySelector('.btn');

// Get the message box element
const message = document.querySelector('.message');

// Get the input element
const messageInput = document.querySelector('.message__input');

// Get the message box title element
const h2Message = document.querySelector('.message_box_title');

// Get error message element
const errorMessage = document.querySelector('.error__message');

// Add event listener to the message box title element
h2Message.addEventListener('mouseover', (event) => {
    if(event.target.textContent === 'Message Box') {
        event.target.style.color = 'blue'; // Change text color to blue on hover
        h2Message.textContent = 'Type your message!';
    } else {
        event.target.style.color = ''; // Reset text color when not hovering
        h2Message.textContent = 'Message Box'; // Reset text content
    }     
});

button.addEventListener('click', () => {
    // Get the value from the input field
    const messageText = messageInput.value;

    // Check if the input is not empty
    if (messageText.trim() !== '') {
        // Set the text content of the message box
        message.textContent = messageText;
        // Clear the input field
        messageInput.value = '';
        // Clear any previous error message
        errorMessage.textContent = '';
    } else {
        // If input is empty, show an error message
        errorMessage.textContent = 'Please enter a message!';
        errorMessage.style.color = 'red'; // Change error message color to red
    } 
});