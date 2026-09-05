// * The ability to use functions as values and can be passed in as an argument to another functions and can be returned from functions is known as FIRST-CLASS FUNCTIONS
var b = function (param) {
    console.log(param);
}

b(function(){
   // * passing an anonymous function as a value
});

// ! OR

function xyz() {

};
b(xyz);

// ! We can return an anonymous function from a function
var b = function() {
    return function() {

    }
    //! OR can be a names function
    return function xyz() {

    }
} 
console.log(b())

// ! Funtions are First Class Citizens === First Class Functions === Ability to be used like values