"use strict";

console.log(this)

function x() {
    console.log(this)   // undefined in strict mode
}