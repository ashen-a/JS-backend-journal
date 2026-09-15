const radius = [3, 1, 2, 4];

// * CallBack functions
const area = function(radius) {
    return Math.PI * radius * radius;
}

// * CallBack functions
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

// * A Generic function that takes the logic and calculates based upon that
// * Higher Order Functions
const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

// ! map functionality
console.log(radius.map(area));  // * === console.log(calculate(radius, area));


console.log(calculate(radius, area));   // ! we are passing the logic to be calcuated 
// console.log(calculate(radius, circumference));

// ! For argument sake making the map and calculate functions exactly similiar 
// * When we put something in the prototype it is available to all the arrays
// * this points to arr 

Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};
console.log(radius.map(area));
console.log(radius.calculate(area));
