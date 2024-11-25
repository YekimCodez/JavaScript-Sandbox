let firstName = "Mike";
let lastName = "Doe";

// console.log(firstName, lastName, age); // Here the variable age is inaccessible because it hasn't been defined/declared ast yet.

console.log(firstName, lastName);

// Declare variables first

let age = 40; //  if age is not delared before the console.log and thus cannot be used.

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);  