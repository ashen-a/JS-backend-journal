{
  //* Compound Statements
  var a = 10;
  console.log(a);
}

//* if only expects one statement, we use {} to execute multiple statements
if (true) console.log("hello JS");

var a = 1000; //* gets SHADOWED inside the BLOCK by the same named variable
let b = 100;//* separate memory space
{
  var a = 10; // HOISTED in GLOBAL SCOPE
  let b = 20; // HOISTED in a different memory space that is reserved for this block
  const c = 30; // same as 'let'
  console.log(a); // 10
  console.log(b); // 20
  console.log(c);
}
//* cannot access let and const outside this block
console.log(a); // 10
console.log(b); // 100
console.log(c);

const c = 1000;
function x() {
    const c = 10;
    console.log(c)
}
x();
console.log(c)

let a = 10;
//! ERROR
{
    var a = 20; 
}

let a = 20;
//* VALID
function x() {
    var a = 20;
}

var a = 10;
//* VALID SYNTAX
{
    let a = 20;
}

//* LEXICAL SCOPE
const a = 20;
{
    const a = 100;
    {
        const a = 200;
        console.log(a)  //! 200
    }
}