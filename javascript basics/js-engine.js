// ! JavaScript Engine is not a Machine, it is just a program written in low level languages

// * JavaScript Runtime Environment contains:
// * JS Engine, APIs, CallBack Queue, MicroTask Queue and Event Loop 
// * A Browser can only execute your JavaScript code because it has the JavaScript Run Time Environment
// * The set of APIs are different in case of Browser and Node.js, there are a few common one's like setTimeout()
// * APIs like setTimeout() and console are present in the run time environment of both the browser and node
// * But internally they are implemented differently

// * JavaScript Engine Architecture
// * Takes Human readable code as input -> PARSING -> COMPILATION -> EXECUTION

// * PARSING -> Code is broken down into TOKENS 
// * There is something called SYNTAX PARSER -> takes the code and converts it into an AST (ABSTRACT SYNTAX TREE)

// * COMPILATION PHASE -> The generated AST is passed to the compilation phase
// * JavaScript has something known as JIT (Just in Time) Compilation
// * Interpreted Language (fast, executed line-by-line) v/s Compiled Language (slow but efficient, the enitre code is compiled first and we get a optimised version of that code which is then executed)
// * JavaScript Engines can use an Interpreter along with a Compiler -> makes it a JIT language 
// * AST goes to the Interpretter then to the EXECUTION as Byte-Code while the job of the compiler is to optimise the code as much as it can on the run-time 
// * In some JavaScript Engines there is something called AOT - AHEAD OF TIME Complilation

// * The EXECUTION PHASE is not possible without 2 major components of the JavaScript Engine
// * Memory Heap( where all the variables and functions are assigned memory ) & CallStack
// * Garbage Collector -> uses an Algorithm known as Mark & Sweep Algorithm
// * read later : Inlining, copy eligion, Inline Catching

// * V8 Engine ->  Ignition is their Interpretter and Turbo Fan is the optimising Compiler


 