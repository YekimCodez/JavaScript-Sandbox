// Functions

// let count = 0;

// function counter() {
    
//     count++;
//     document.getElementById("output").innerHTML = count;
//     console.log("It works!! " + count);

//     if (count % 10 === 0) {
//         alert(`The count is now ${count}`);
//     }
// };

// document.querySelector('button').onclick = counter;


// Hello world function

let createhelloWorld = function() {

    return function() {
        return "Hello World!";
    }
};
createhelloWorld();

let x = 114;
let y = 215;
let z = 351;

let sum = x % y * z;

console.log(Math.PI);
// PI produces a decimal/floating point number

console.log(Math.round(Math.trunc(Math.PI)));
// trunc returns the integer part of a decimal/floating point number by removing the fractional digits

console.log(Math.ceil(3.5));
// rounds up and returns the smallest integer greater than or equal to a given number

console.log(Math.floor(3.5)); 
// rounds down and returns the largest integer less than or equal to a given number

console.log(Math.pow(2, 4));
console.log(Math.pow(2, 10));
console.log(Math.pow(2, 20));
console.log(Math.pow(5, 2));

console.log(Math.min(2, 5, 9, 21));

let numbers = [1, [2, 3,], 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(parseInt(numbers)));
console.log(Math.min(parseInt(numbers)));

let myNum = Math.round(Math.random()) * 10 + 1;
console.log(typeof myNum);

// Conversion between data types
let stringTemperature = "100";
let conversion = parseInt(stringTemperature);
console.log("This is a: " + typeof(conversion) + " " + conversion);

let numberTemperature = 100;
let conversion2 = toString(numberTemperature);
console.log("This is a: " + typeof conversion2 + " " + numberTemperature);

let convertedNumber = Number(numberTemperature);
console.log("Converted to a number: " + convertedNumber * 100);

console.log(convertedNumber === 100);


// document.getElementById('output').innerHTML = Math.round(sum);

// console.log(sum);

let greeting = function(name){
    return "Hello, " + name;
}
console.log(greeting("Mike"));

let customers = function(cus1, cus2) {
    return "Hello, " + cus1 +" & "+ cus2;
}
console.log(customers("Steve","Mike"));

// 1. Create a function called add that takes two parameters and returns their sum.

let add = function(num1, num2) {
    //define a function add() and enter two parameters
    return num1 + num2;    
}
console.log(add(34, 42)); //Use the function instead of adding the numbers directly

// 2. Write a function called multiply and that takes two numbers and returns the result.

let multiply = function(prod1, prod2) {
    return prod1 * prod2;
}
console.log(multiply(241, 342)); // Use the function with parameters

// 3. Create a function called isEven that checks if a number is even (returns true) or odd (returns false).

let isEven = function(numbers) {    
    if (numbers % 2 === 0) {

        document.getElementById("output").innerHTML = numbers + " is an even number";

        console.log(numbers + " is an Even number");
    } else {

        document.getElementById("output").innerHTML = numbers + " is an Odd number";

        console.log(numbers + " is an Odd number");
    }
}
isEven(103); // Pass number as argument

// 4. Write a function called compareNumbers that takes two numbers and returns "The first number is greater" if the number is larger or "The second number is greater" if the second is larger or "The numbers are equal if both numbers are the same".

let compareNumbers = function(firstNum, secondNum) {
    if(firstNum > secondNum) {

        document.getElementById("result").innerHTML = " The first number is greater. " + firstNum;

        console.log("The first number is greater. " + firstNum);
    } else if (firstNum < secondNum) {

        document.getElementById("result").innerHTML = "The second number is greater. " + secondNum;

        console.log("The second number is greater. " + secondNum);
    } else {

        document.getElementById("result").innerHTML = "The numbers are equal, both numbers are the same. " + firstNum + " & " + secondNum;

        console.log("The numbers are equal, both numbers are the same. " + firstNum + " & " + secondNum);
    }
}
compareNumbers(25, 30); //Pass two numbers as arguments


// Function Scope 
let outerVar = 10;

let demoFunction = function() {
    let innerVar = 20;
    console.log(outerVar);

    console.log(innerVar);
}
demoFunction();
 





