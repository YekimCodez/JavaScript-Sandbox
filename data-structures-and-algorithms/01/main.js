document.getElementById("save").innerHTML = "Fibonacci Sequence";

//Big-O notation time and space complexity
let summation = function (n) {
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum += i;  
        console.log(i);  
    }
    return sum;
}

// Fibonacci sequence

// Problem - Give a number 'n', find the first 'n' elements of the Fibonacci sequence

function fibonacci(n) {
    const fib = [0, 1]
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));

// Big-O = 0(n)

// Problem - Give an integer 'n', find the factorial of that integer.

let factorial = function(n) {
    let result = 1;
    for(let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));


