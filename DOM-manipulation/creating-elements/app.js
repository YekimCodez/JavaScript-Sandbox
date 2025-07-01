const elementsContainer = document.querySelector('#elementsContainer');
const button = document.querySelector('#createButton');
createButton.addEventListener('click', () => {
  const newElement = document.createElement('li');
  newElement.textContent = 'This is a new element created by JavaScript!';
  newElement.style.backgroundColor = 'lightblue';
  newElement.style.padding = '10px';
  newElement.style.marginTop = '10px';
  elementsContainer.appendChild(newElement);

  console.log(newElement)
});


const container = document.querySelector("#container");
const button2 = document.querySelector("#button2");
button2.addEventListener("click", (e) => {
    e.preventDefault()
    const button2 = document.createElement("button");
    button2.innerText = "A button click made me";
    container.appendChild(button2);
});