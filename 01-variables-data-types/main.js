/* const firstName = `Michael`;
const middleName = `Andre`
const lastName = `Doughty`;
let age = 43;
*/

let fullName = `michael andre doughty`;
let nameParts = fullName.split(" ");

for (let i = 0; i < nameParts.length; i++) {
    nameParts[i] = nameParts[i][0].toUpperCase() + nameParts.slice(1).toLowerCase();
}

fullName = nameParts.join(" ");
console.log(fullName);
console.log(nameParts);
document.getElementById("main").innerHTML = fullName;

// Using substring() to make the first index of the string upperCase
/* let reStructuredFirstName = firstName.charAt(0).toUpperCase() + firstName.substring(1);
console.log(reStructuredFirstName);
*/

// Using template literals with slice() to make the first index of a string upperCase
/*
let reStructuredLastName = `${lastName[0].toUpperCase()}${lastName.slice(1)}`;
console.log(reStructuredLastName);
*/

/*
document.getElementById("main").innerHTML = `Hi! my name is ${reStructuredFirstName +" "+reStructuredLastName} and I am ${age} years old.`;

console.log(`Hi! my name is ${reStructuredFirstName +" "+reStructuredLastName} and I am ${age} years old.`);


let names = ['Mikey', 'Michelle', 'Makara', 'James'];
let newNames = names.slice(0);
console.log(newNames);
*/