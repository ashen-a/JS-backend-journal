// Error: .forEach function does not exist on arr variable 


if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(userFunction) {
        const originalArray = this  // current object ki taraf point karta hai

        for (let i = 0; i < this.length; i++) {
            // for every value call the userFunction
            userFunction(originalArray[i], i);
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6]
// First step is to understand the Signature 
// Signature: No return; function input: value, index; calls my function for every value
// in this context, forEach is being called by 'arr' so this = arr
const res = arr.forEach(function (value, index){
    console.log(`Value at Index ${index} is ${value}`)
})
console.log(res)    // undefined: does not return anything

const newRes = arr.myForEach(function (value, index){
console.log(`My For Each Value at Index ${index} is ${value}`)
})
console.log(newRes)


// Writing polyfill for .map function
// Signature - Returns a new Array; Iterates over each element; performs the function given by the user (userFunction) 
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFunction) {
        const res = []

        for(let i = 0; i < this.length; i++) {
            const newVal = userFunction(this[i], i)
            res.push(newVal)
        }

        return res;
    } 
}


const n = arr.map((element) => element * 2);
console.log(n)
const n2 = arr.myMap((element, index) => {
    if (index % 2 == 0){
        return element * 3
    } else {
        return element
    }
});
console.log(n2)

// Filter function
// Signature: Returns a new array | input: userFunction | agar userFunction true return karta hai toh current value ko new array mai include kar leta hai

if(!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(userFunction) {
        const res = []
        
        for (let i = 0; i < this.length; i++) {
            if (userFunction(this[i])) {
                res.push(this[i])
            }           
        }
        return res
    }
}

const n3 = arr.filter((element) => element % 2 == 0)
console.log(n3)
const n4 = arr.myFilter((element) => element % 3 == 0)
console.log(n4)