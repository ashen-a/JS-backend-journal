/**
 * Multiple Comments
 * 
 * Undefined v/s null 
 * null -> empty
 * undefined -> doesn't have a defination
 * 
 * variable === placeholder
 * 
 */


// objects
let teaTypes = ["lemon tea", "orange tea", "oolong tea"]
let user = {firstname: "ayush", lastname: "das"}

console.log(typeof(user))

let balance = 120;
let anotherBalance = new Number(120);
console.log(balance);
// this is a complex data-type
console.log(anotherBalance);
console.log(anotherBalance.valueOf());

console.log(typeof balance)
console.log(typeof anotherBalance)

let isActive = true;
let isReallyActive = new Boolean(true);

let firstname = null
let lastname = undefined
console.log(firstname)
console.log(lastname)

let username = 'ayush'
let greetMessage = `hello ${username}`
console.log(greetMessage)

const obj = {
    "first name": 'ayush',
    isLoggedIn: true
}
// altho const the primitives inside can be changed
obj['first name'] = 'mr. a'
obj.lastname = 'd'

console.log(obj['first name'])
console.log(obj.lastname)
console.log(obj)
console.log(typeof obj)

let anotherUser = ['mr.a', 'd', true]
console.log(anotherUser[0])

// don't rely on JavaScript's implicit type conversion
console.log('1' + 1)
let isValue = true;
console.log(Number(isValue) + 1)
let isVal = "2abc"
console.log(Number(isVal)) // NaN
console.log(typeof Number(isValue)) // number

console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN

let arr = []
console.log(arr.length)
console.log(arr.length === 0)

