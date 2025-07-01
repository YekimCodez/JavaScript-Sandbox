// numbers

// let num = 2 + 2;
// console.log(num);

// const age = 43;

// // Constants 
// let radius = 5;
// const pi = 3.14;
// let area;

// area = pi * radius * radius;
// console.log(typeof area);

// let num1 = 5/0;
// console.log(num1);

// // String Data Types
// let firstName = "Mike";
// console.log(firstName);

// let userName = "Student Prodigy"
// console.log(userName);

// const gameId = `My name is ${firstName}, I am ${age} and ${userName} is my player name.`;
// console.log(gameId);
// const gameId1 = "My name is + firstName +, I am + age + and + userName + is my player name.";
// console.log(gameId);

// let num2 = 2.998e8;
// let prod1 = num2 * 10;
// console.log(prod1);

// let num3 = 10;
// console.log(num3 * num3 * 10);

// let mood = "light";
// console.log(mood);

// mood = "dark";
// console.log(mood);

// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log("Luigi's debt is " + luigisDebt);
// console.log(`Luigi's debt is ${luigisDebt}`);

// let name = prompt("");
// console.log(name);


// const buttonA = document.querySelector("#button_A");
// const main = document.querySelector("#main");

// let count = 1;

// buttonA.onclick = () => {
//     buttonA.textContent = "Try again!"
//     main.textContent = `${count} clicks so far`;
//     count += 1;
//     // console.log(count);
// }

// console.log((3 + 2) - 76 * (1 + 1));
// console.log(23 + 97);
// console.log(23 + 97 + 34 + 45 + 49 +104)
// console.log((4 + 6 + 9) / 77);
// console.log();


// let a = 10;
// console.log(a);

// const max = 57;
// const min = 10;
// const actual = max - 13;
// const percentage = actual / max;
// const final = percentage / actual * max + min % a;


// const product = min * max;
// console.log(max);
// console.log(min);
// console.log(actual);
// console.log(percentage);
// console.log(final);

// const firstName = `Michael`;
// // const middleName = `Andre`
// const lastName = `Doughty`;
// let age = 43;
// age = 44;


// let fullName = `michael andre doughty`;
// let nameParts = fullName.split("");



// for (let i = 0; i < nameParts.length; i++) {
//     nameParts[i] = nameParts[i][0].toUpperCase() + nameParts.slice(1).toLowerCase();
// }

// fullName = nameParts.join(" ");
// console.log(fullName);
// console.log(nameParts);
// document.getElementById("main").innerHTML = fullName;

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

const addTask = document.getElementById("add");