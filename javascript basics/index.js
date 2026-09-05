var a = 10;
function b() {
    var x = 10;
}

console.log(window.a);
console.log(a)  //! when you haven't put anything in front of 'a' it automatically assumes you are referring to the GLOBAL SPACE
console.log(this.a)

a = undefined;  //! you should never do this

//* The Scope Chain

function a() {
    c();
    function c() {
        console.log(b)  // 10 is printed
    }
}
var b = 10;

function a() {
    var b = 10;
    c()
    function c() {
        
    }
}
a()
console.log(b)  //! says b is not defined


