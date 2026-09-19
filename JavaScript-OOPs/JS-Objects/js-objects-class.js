// All works fine but we are violating the DRY Principle

const obj1 = {
    fname: 'Ayush',
    lname: 'Das',
    getFullName: function() {
        return `${this.fname} ${this.lname}`
    }
    // __proto__: Object -> always present
}
const obj2 = {
    fname: 'Piyush',
    lname: 'Garg',
    /* getFullName: function() {
        return `${this.fname} ${this.lname}`
        } */
   // __proto__: Object -> always present
}

console.log(obj1.getFullName())
// if getFullName() does not exist in the object -> check happens in it's obj2.__proto__, if the function doesn't exist there too -> throws an Error
console.log(obj2.getFullName())

//! Interesting
obj2.__proto__ = obj1;
console.log(obj2.getFullName())


//! Prototype Inheritance
obj1.__proto__.__proto__ = null;
obj1.__proto__ = null;

//*  In JS everything is an Object, WHY?
// do this in BROWSER
const obj = {}
obj.__proto__
obj.__proto__.__proto__

const arr = [1, 2, 3, 4]
arr.__proto__
arr.__proto__.__proto__

const str = 'Ayush'
str.__proto__
str.__proto__.__proto__