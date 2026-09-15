// * What is a Callback Function in JavaScript ?
setTimeout(function () {
  console.log("Inside setTimeout");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
  // this is a Callback Function
});
// * JavaScript is a synchronous single-threaded language -- oneline at a time and in order



// * Deep about Event Listeners
document.getElementById("clickMe")
.addEventListener("click", function xyz() {
    console.log("Button Clicked");
})

let count = 0;
document.getElementById("clickMe")
.addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
})

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz() {
    console.log("Button Clicked");
})  
}


// * Garbage Collection & removeEventListeners

