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
console.log(person.hobbies)
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
let fname = 'Ayush'
let fname2 = fname
console.log(fname2)
fname2  = 'Piyush'
console.log(fname2)

//! mechanism in case of Objects
// What if i just want to copy the object and not the address
/* let p1 = {
    fname:'Ayush',
    lname: 'D',
}
let p2 = p1
p2.fname = 'Piyush'
console.log(p2)
console.log(p1)
 */

// Shallow Copy(...)
/* let obj1 = {
 fname:'Ayush',
    lname: 'D',
    address: {
        h:1,
        s:1
    }
}
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

console.log(p2)
console.log(p1)