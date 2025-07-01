// Working with variables

// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin;
let name = "John";
admin = name;
console.log(admin); // This will output "John"

const colorWhite = "#FFFFFF";
const colorBlack = "#000000";

let currentColor = colorWhite;
console.log(currentColor); // This will output "#FFFFFF"

let planetEarth = "Earth";
let currentUser = "John Doe";


// Calculate the age based on a given birthday and the current year.
let currentYear = 2025;
// Prompt the user for their birthday in the format DD.MM.YYYY
// Example: "01.01.2000"
const BIRTHDAY = prompt("Enter your birthday (DD.MM.YYYY): ");
// Split the birthday string to extract the year
let AGE = currentYear - Number(BIRTHDAY.split('.')[2]);
console.log(AGE); // This will output the calculated age based on the current year and birthday