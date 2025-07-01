// Create a form element 
const form = document.createElement('form');

// Set the form's ID and class
form.id = 'todo-form';
form.className = 'todo-form';

// Append the form to the body
document.body.appendChild(form);

// Append the form to the container
const container = document.querySelector('.container');
form.appendChild(container);

// Create a heading element
const heading = document.createElement('h1');
heading.textContent = 'Todo List';
heading.className = 'todo-heading';

// Create an input element
const input = document.createElement('input');
input.type = 'text';
input.id = 'myInput';
input.className = 'input-field';
input.required = true; // Make the input field required

// Create a button element
const button = document.createElement('button');
button.type = 'submit';
button.className = 'submit-btn';
button.id = 'task-btn';
button.textContent = 'Add task';
input.placeholder = 'Enter your task here';

// Append the heading, input, and button to the container
container.appendChild(heading);
container.appendChild(input);
container.appendChild(button);

// Add an event listener to the form to handle the submit event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the value of the input field
    const taskValue = input.value.trim();
    
    // Check if the input is not empty
    if (taskValue) {
        // Create a new paragraph element for the task
        const taskElement = document.createElement('p');
        taskElement.textContent = taskValue;
        
        // Append the task element to the container
        container.appendChild(taskElement);
        
        // Clear the input field
        input.value = '';
    } else {
        alert('Please enter a task.');
    }
});

// Log the elements to the console  
console.log(container);
console.log(input);
console.log(button);



