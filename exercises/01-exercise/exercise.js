// 1. Create two variables, a and b, and assign them values. Use arithmetic operators to add, subtract, multiply and divide them. 

let a = 5;
let b = 25;

let sum = a + b;
let diff = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

// 2. Use comparrison operators to check if a is greater than b equal to b or not equal to b.

let comparison = a > b;
let comparison2 = a < b;
let comparison3 = a === b;
let comparison4 = a !== b;
let comparison5 = a <= b;
let comparison6 = a >= b;

console.log(sum);
console.log(diff);
console.log(product);
console.log(quotient);
console.log(remainder);

console.log(comparison);
console.log(comparison2);
console.log(comparison3);
console.log(comparison4);
console.log(comparison5);
console.log(comparison6);

// 3. Write a condition using logical operators that checks if both a is greater than 5 and b is less than 30.

if (a >= 5 && b < 30 ) {
    console.log(a);
    console.log(b);
    document.getElementById('answer').innerHTML = a;
};

// 4. Increment a and decrement b and log the results.
console.log(++a);
console.log(--b);

