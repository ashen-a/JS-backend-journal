function x() {
    var a = 7;
    function y() {
        console.log(a)  //* checks for 'a' in local memory then in the lexical env of it's parent
    }
    y()
}
x()

function x() {
    var a = 7;
    function y() {
        console.log(x)
    }
    return y;   //! Not just a function is being returned but a CLOSURE (function + lexcial scope) is returned
}
//!     WHEN FUNCTIONS ARE RETURNED FROM ANOTHER FUNCTION THEY STILL MAINTAIN THEIR LEXICAL SCOPE, Y function remembers it's lexical scope that is where it came from 
var z = x();    //* We know after this line the execution context of x is popped off the call stack
console.log(z)  //* literally prints the function y

// many lines of code
//* What will happen when we now invoke z, 'a' is not in the global scope and the function x is popped off !!!
z();    //! it will still print 7

