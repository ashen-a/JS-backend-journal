// * This forms a closure
function outer() {
    var a = 10;
    function inner() {
        console.log(a)
    }
    return inner;
}
outer()();

// * This also forms a closure
function outer() {
    function inner() {
        console.log(a)
    }
    var a = 10;
    return inner;
}
outer()();

// * This forms a closure although we have used 'let' instead of 'var' which is block-scoped
function outer() {
    function inner() {
        console.log(a)
    }
    let a = 10;
    return inner;
}
outer()();

// * This still forms a closure because inner function forms a closure with it's outer env and 'b' is also a part of the outer env
function outer(b) {
    function inner() {
        console.log(a, b)
    }
    let a = 10;
    return inner;
}
outer("hello world")();


function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c)
        }
        let a = 10;
        return inner;
    }
    return outer;
} 
var close = outest()("hello world");
close();

// ! Conflicting names but still forms a closure 
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c)
        }
        let a = 10; // * if we did not have this line then let = 100 will be printed
        return inner;
    }
    return outer;
} 
var a = 100; // in GLOBAL SCOPE
var close = outest()("hello world"); // ! 10 
close();
// * The two 'a' variables are different variables


// ! Data Hiding
function counter() {
    var count = 0;
    function incrementCounter() {
        count++;
    }
}

console.log(count); // * cannot be accessed

// ! DOUBT 
function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}
var counter1 = counter();
counter1();
counter1();
var counter2 = counter();
counter2();
counter2();counter2();counter2();counter2();

// ! Making the above code more scalable using a CONSTRUCTOR FUNCTION
function Counter() {
    var count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementCounter = function() {
        count--;
        console.log(count);
    }
}
var count1 = new Counter(); // ! since this is a constructor function we have to use the 'new' keyword here
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

// * SMART GARBAGE COLLECTION
function a() {
    var x = 0, z = 10;
    return function b() {   // * Although this function forms a closure with both x and z, later z is garbage collected
        console.log(x)
    }
}
var y = a();
y();
