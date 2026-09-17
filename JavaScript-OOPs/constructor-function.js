function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;
}
// 'this' keyword refers to the newly created object inside a constructor function
// we have created a blueprint now we want to create an object or instance from 'this' constuctor function

let myCar = new Car("Toyota", "Camry");
console.log(myCar);
let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);

function Tea(type) {
    this.type = type
    this.describe = function() {
        // this keyword provides the context to whoever is using 
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Tea("lemon tea")
console.log(lemonTea)
console.log(lemonTea.describe())