console.log("Hello Javascript, CodeSnippet")
//* better comment
//! better comment

var x = 1;
//! we can invoke these functions before evee initialising them because of HOISTING
a();
b();
console.log(x)

function a() {
    var x = 10;
    console.log(x)  //* fetches the value of x from LOCAL memory
}

function b() {
    var x = 100
    console.log(x)  
}

//! Every EXECUTION CONTEXT will have it's own memory and all the EXECUTION CONTEXT will run independently of one another 