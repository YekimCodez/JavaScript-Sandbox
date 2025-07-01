const currentYear = document.getElementById("currentYear");
const birthYear = document.getElementById("birthYear");
const calculateButton = document.getElementById("calculateButton");
let currentAge;

calculateButton.addEventListener("click", calculateAge); {
   currentAge = parseInt(currentYear.value) - parseInt(birthYear.value);
};

function calculateAge() {

    console.log(`Your age is: ${currentAge}`);
}
calculateAge();

