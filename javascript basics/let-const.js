console.log(b)
console.log(a) //! this gives a ReferenceError -> CANNOT ACCESS 'a' BEFORE INITIALIZATION
let a = 10;
var b = 100;

//! Syntax Error
// let a = 100;
// var a = 10

const b = 1000; //* you have to initialize at the same line