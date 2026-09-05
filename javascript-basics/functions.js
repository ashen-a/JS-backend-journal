a();
b(); // ! TypeError
// * Function Statement aka Function Declaration
function a() {
    console.log("a called");
}

// * Function Expression
// * b is treated like any other variable, it is assigned undefined initially 
var b = function() {
    console.log("b called")
}

// ! The major difference between the above two is HOISTING


// * Anonymous Functions -- used in a place where funtions are used as values
function () {

}

// * Named Function Expression 
var b = function xyz() {
    console.log("Named Function Expression called")
    console.log(xyz); // * This is a valid syntax
}
b();
xyz(); // ! Gives an ReferenceError --> since the function xyz is not created in the GLOBAL SCOPE, only memory for 'b' is allocated

// * Difference between Parameters & Arguments
var z = function (param1, param2) {
    console.log("param1 and param2 are local variables/identifiers for this function")
}
z(1, 2) // * These are known as Arguments

