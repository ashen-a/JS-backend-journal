// it is always a good practice to start with some value as the variablemay hold some GARBAGE VALUE
let sum = 0;

let countdown = new Array()
let j = 6   
while (j-- > 0) {
    countdown.push(j)
}
console.log(countdown)


let teaCollection = new Array()
let tea;
do {
    // node.js doesn't support 'prompt', run this code snippet on the browser
    tea = prompt(`Enter your favourite tea (type "stop" to finish)`)
    if (tea !== "stop") {
        teaCollection.push(tea)
    }

} while (tea !== "stop");


let multipliedNumbers = new Array()
let numbers = [2, 4, 6]
for (let i = 1; i < array.length; i++) {
    res = numbers[i] * 2    
    multipliedNumbers.push(res)
}

