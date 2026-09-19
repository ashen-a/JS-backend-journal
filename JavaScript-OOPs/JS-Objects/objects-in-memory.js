const person = {
    x: 10,
    firstName: 'Ayush',
    lastName: 'Das',
    hobbies: ["Coding", "Gym"],
    isMarried: false,
    getFullName: function() {
        return 'Ayush Das'
    },
    address: {
        hno: 149,
        street:336,
        countryCode: 'IN',
        state: 'WB',
    }
}
console.log(person.hobbies.push("Toomfolery"))
console.log(person.getFullName())
console.log(person.address) 
console.log(person.address.state)
console.log(person.address.bdsajhbweb)


// representing a real life object in code
// objective of creating an object
const remote = {
    color: 'black',
    brand: 'XYZ',
    dimensions: {height: 1, width: 1},
    turnOff: function() {

    },
    volumeUp: function() {

    }
}


//! Memory related concepts

// with strings / primitives
let x = 'Ayush'
let y = x
console.log(y)
y = 'D'
console.log(y)

/* let p1 = {
    fname:'Ayush',
    lname: 'D',
    }
    let p2 = p1 .. this is not even a copy, this is just a reference passing
    p2.fname = 'Piyush'
    console.log(p2)
    console.log(p1)
    */
   
// What if i just want to copy the object and not the address
// Shallow Copy(...)
/* let obj1 = {
 fname:'Ayush',
    lname: 'D',
    address: {
        h:1,
        s:1
    }
}
obj2 stores the pointer to a different memory location (0x2)
obj1.address -> stores the pointer to the memory location and not the actual object
let obj2 = {
    ...obj1 // spread operator -> doesn't work on inner objects like address here
}

obj2.fname = 'Piyush'
obj2.address.h = 2

console.log(obj2) // { fname: 'Piyush', lname: 'D', address: { h: 2, s : 1} }
console.log(obj1) // { fname: 'Ayush', lname: 'D', address: { h: 2, s : 1} } */

// Deep Copy
let p1 = {
    fname: 'Ayush',
    lname: 'D',
    address: {
        h:1,
        s:1
    }
}
const p1KaString = JSON.stringify(p1)
console.log(p1KaString) // p1 is converted to a string
let p2 = JSON.parse(p1KaString) // converted back into an object

p2.fname = 'Piyush'
p2.address.h = 'Hacked'

console.log(p1)
console.log(p2)

/* 
Object -> String: Serialization
String -> Object: De-Serialization
 */