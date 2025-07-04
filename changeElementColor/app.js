// Get div element
const container = document.querySelector('.container');

// Create a new div element and append it to the container
const newDiv = document.createElement('div');
newDiv.classList.add('box');
newDiv.style.cursor = 'pointer'; // Change cursor to pointer on hover
container.appendChild(newDiv);

// Create a paragraph element and append it to the new div
const paragraph = document.createElement('p');
paragraph.textContent = 'This is a paragraph inside the new div.';
paragraph.classList.add('text');
paragraph.style.color = 'blue'; // Change text color to blue
paragraph.style.textAlign = 'center'; // Center the text

// Append the paragraph to the new div
newDiv.appendChild(paragraph);

//Append the container to the body
document.body.appendChild(container);

// Add an event listener to the new div
newDiv.addEventListener('click', () => {
    // Change the background color of the new div when clicked
    if( newDiv.style.backgroundColor === 'lightgreen'){
        newDiv.style.backgroundColor = 'lightcoral'; // Change to light coral
        paragraph.style.color = 'white'; // Change text color to white   
    } else {
        newDiv.style.backgroundColor = 'lightgreen'; // Change to light green
        paragraph.style.color = 'blue'; // Change text color to blue
    }   
});
