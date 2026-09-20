// Interesting CODE-SNIPPET 
Function.prototype.describe = function() {
    console.log(`Function name is ${this.name}`);
}

function masalaChai() {}
function gingerChai() {}

// here 'name' is just a param to confuse
function greet(name) {
    return `Hello ${name}`
}

greet.describe();
masalaChai.describe();
gingerChai.describe();

// 
// this is function declaration
function add(a, b) {
    return a+b
}

// this is function expression
const substract = function(a, b) {
    return a-b
}

// this is arrow function 
const multiply = (a, b) => a*b

// First-class functions -> a function can be passed to another function and can be returned from another function as well
function applyOperation(a, b, operation) {
    return operation(a, b)
}
const result = applyOperation(5, 4, (x,y) => x / y)
console.log(result)

// closures
function createCounter() {
    let count = 0;
    return function() {
        count++
        return count
    }
}

const counter = createCounter();
console.log(counter());


// IIFE - Immediately Invoked Function Expression
(function() {
    console.log('Ayush')
})()
