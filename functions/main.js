// JavaScript Functions
let msg = 'Sign up to receive our eekly newsletter for 10% off!';
let updateMessage = function() {
    let x = document.getElementById('message');
    x.textContent = msg;
}
updateMessage();

function sayHello() {
    console.log('Hello');
}
sayHello();