// Input fields for:

// div container
const container = document.createElement('div');
document.body.appendChild(container);

// form element
const form = document.createElement('form');
container.appendChild(form);

// First name
const firstNameInput = document.createElement('input');
firstNameInput.type = 'text';

// Last name
const lastNameInput = document.createElement('input');
lastNameInput.type = 'text';

// Favorite color (e.g., blue, red, #00ff00)
const favoriteColorInput = document.createElement('input');
favoriteColorInput.type = 'text';

// A submit button
const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';

// A paragraph for the message display
const messageParagraph = document.createElement('p');

// Append elements to the container
form.appendChild(firstNameInput);
form.appendChild(lastNameInput);
form.appendChild(favoriteColorInput);
form.appendChild(submitButton);
form.appendChild(messageParagraph);
container.appendChild(form);

// Add placeholders
firstNameInput.placeholder = 'First Name';
lastNameInput.placeholder = 'Last Name';
favoriteColorInput.placeholder = 'Favorite Color (e.g., blue, #00ff00)';

// Style the container
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.marginTop = '50px';
container.style.height = '100vh';
container.style.padding = '1rem';
container.style.fontFamily = 'Arial, sans-serif';
container.style.backgroundColor = "rgb(0, 128, 157)";

// Style the form
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '10px';
form.style.width = '300px';
form.style.backgroundColor = 'white';
form.style.padding = '20px';
form.style.borderRadius = '10px';    

// Style the inputs
firstNameInput.style.padding = '10px';
lastNameInput.style.padding = '10px';
favoriteColorInput.style.padding = '10px';
submitButton.style.padding = '10px';
submitButton.style.cursor = 'pointer';

// style the submit button
submitButton.style.backgroundColor = 'rgb(255, 118, 1)';
submitButton.style.color = 'white';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '5px';

// Style the message paragraph
messageParagraph.style.marginTop = '20px';
messageParagraph.style.fontSize = '18px';

// Add event listener for form submission
form.addEventListener('submit', function(event)  {
    event.preventDefault(); // Prevent the default form submission
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const favoriteColor = favoriteColorInput.value.trim();
    if (firstName && lastName && favoriteColor) {
        // Display the greeting message
        messageParagraph.textContent = `Hello, ${firstName} ${lastName}! Your favorite color is ${favoriteColor}.`;
        messageParagraph.style.color = favoriteColor; // Change text color to favorite color
        container.style.backgroundColor = favoriteColor; // Change background color to favorite color
        firstNameInput.value = ''; // Clear the input fields
        lastNameInput.value = '';
        favoriteColorInput.value = '';
    } else {
        // Display an error message
        messageParagraph.textContent = 'Please fill in all fields.';
        messageParagraph.style.color = 'red'; // Set error message color to red
    }   
}); 


