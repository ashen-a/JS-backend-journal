Object.prototype.chai = function() {
    console.log("chai aur code")
}
console.log(Object.prototype); 

const obj = {x: 1, y:2}
obj.chai()
console.log(obj.__proto__)

