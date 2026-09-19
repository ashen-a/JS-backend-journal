class Person {

    // constructor() {} -> incase you don't provide a constructor the language interpreter creates a default constructor 

    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;

        // console.log(this.getFullName())
    }
    getFullName() {
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new Person('Ayush', 'Das')
// Internally -> p1.__proto__ = Person.prototype
// Internally -> p2.__proto__ = Person.prototype

const p2 = new Person('Piyush', 'Garg')
// obj2.__proto__ = obj1; if we didn't have the feature of Classes


console.log(p1.fname())
console.log(p1.lname())
console.log(p1.getFullName())
console.log(p2.getFullName())

// for BROWSER
Person.prototype
// The prototype of Person class is being put into the __proto__ of the objects created of it like p1, p2
p1.__proto__


//** Inheritance

class A {
    functionInsideA() {
        
    }
}
class B extends A {
    functionInsideB() {
        
    }
}

const p = new B()
console.log(p.functionInsideA)
console.log(p.functionInsideB)

// Now if we don't want to use extend keyword, do the work yourself
B.prototype = A


