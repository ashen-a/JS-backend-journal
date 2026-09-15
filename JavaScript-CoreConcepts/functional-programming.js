// * What are Higher Order Functions? -> Functions that take another function as an argument or return a function from it 
function x() {
    console.log("Namaste JS");
} 
// ! y is the higher order function, x is the callback function
function y(x) {
    x();
}

// * Calculating Area of 4 circles
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

// * To calculate Circumference now
const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

// ! THIS IS HOW EVERYONE GENERALLY WRITES CODE BUT WE NEED A BETTER WAY TO WRITE IT
// ! DRY Principle -> DON'T REPEAT YOURSELF
