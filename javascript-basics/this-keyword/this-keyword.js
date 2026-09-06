// inside non-strict mode

console.log(this); // 'this' keyword in global space represent the global object

function x() {
    console.log(this) // Window: not the same as when logged on Global space
}