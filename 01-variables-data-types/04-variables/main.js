// Ways to declare variables
// var, let , const

let firstName = "Mike";
let lastName = "Doughty";

// console.log(firstName, lastName, age); // Here the variable age is inaccessible because it hasn't been defined/declared ast yet.

console.log(firstName, lastName);

// Declare variables first

let age = 40; //  if age is not delared before the console.log and thus cannot be used.

console.log(age);

let score;

score = 1;
score = 10;

console.log(score++);


// const variables cannot be reassigned(Uncaught TypeError; assignment to constant variable.)
const x = 100;
x = 200;