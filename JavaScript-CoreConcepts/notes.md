> WINDOW is a global object which is created along with the GLOBAL EXECUTION CONTEXT
> So whenever any JAVASCRIPT PRG is run :
 A GLOBAL OBJECT is created (in case of browsers is known as 'window')
 A GEC is created
 A 'this' variable is created (Even for the functional execution context)

> Wherever JS is running, the browser, the server they must have a JS Engine  

> All the JavaScript Engines have this responsibility to create the GLOBAL OBJECT

> this === window -> at GLOBAL LEVEL

> Whenever you create any variables or functions in the GLOBAL SPACE they get attached get attached to the GLOBAL OBJECT (window)
> To access those : console.log(window.a)

> JS is a loosely typed language meaning it does not attaches it's variables to any data type

> The Scope Chain
> Whenever an EXECUTION CONTEXT is created a LEXICAL ENVIRONMENT is also created
> LEXICAL ENVIRONMENT is the LOCAL MEMORY along with the LEXICAL ENVIRONMENT of it's PARENT
> LEXICAL ? in hierarchy/ in order
> function a() 
{
    var b = 10
    c()
    function c() {
        // FUNCTION c IS LEXICALLY INSIDE FUNCTION a, IT HAS ACCESS TO IT'S LOCAL MEMORY + LEXICAL ENVIRONMENT OF IT'S PARENT(a)
    }
} 
> For function a it points to the LEXICAL ENV of it's parent that is GLOBAL 
> AT Global level the reference to the LEXICAL ENV points to null 
> This chain of LEXICAL ENVIRONMENTS and the PARENT REFERENCES is THE SCOPE CHAIN

> HOISTING in 'let'
> let, const are also allocated memory but they are stored on a different memory space(BLOCK) than GLOBAL and you cannot access these let, const declarations before you have put in some value in them

> That phase from HOISTING till the variable is INITIALISED with some value is TEMORAL DEAD ZONE

> TypeError, SyntaxError and ReferenceError

> Block Scope
> A Block is combining multiple JS statements into a group
> WHY?
> We group multiple statements in a block so that we can use it where JS expects one statement 
> SHADOWING behaves the same in a FUNCTION SCOPE
> Every BLOCK has it's own LEXICAL SCOPE

> CLOSURE is a function binded together with it's lexical environment 
> function along with it's lexical scope bundles together forms a closure
> USES of Closures:
- Module Design Pattern
- Currying
- Function like once
- memoize
- maintaining state in async world 
- setTimeouts
- Iterators

> Interesting syntax
> outer()()
> the outer function has an inner function and we are returning the inner function so by doing outer()() we are receiving the inner function and calling it at the same time

> Disadvantages of CLOSURES
- There could be an over-consumption of memory whenever a CLOSURE is formed and those CLOSED OVER variables are not GARBAGE-COLLECTED

> GARBAGE COLLECTION
> Modern browsers and JS engines like Chrome and V8 SMARTLY COLLECT the GARBAGE-VARIABLES