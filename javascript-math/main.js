// JavaScript mathematical operators
// +, -, %, *, /, 

const a = 11;
const b = 10;

console.log(a + b);
console.log(a % b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

let subTotal = (13 + 1) * 5;
let shipping = 0.5 * (13 + 1);
let total = subTotal + shipping;
console.log(subTotal);
console.log(shipping);
console.log(total);
console.log(subTotal > shipping);
console.log(total < subTotal);
let newTotal = (5 + 6 > 4 + 5) && (20 > 5 + 6);
console.log(newTotal);


// the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy
let buy = (15 < 8) && (5 > 2);
console.log(buy);
