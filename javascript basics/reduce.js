// ! The reduce function is basically used at a place where you have to take all the elements of an array and come up with a single value out of them
const arr = [5, 1, 3, 2, 6];

// * to find sum of all the elements, iterate over all the values and give the max value etc.

// ! Non-Functional Programming way for sum

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));

// ! Using reduce function -> takes 2 arguments -> 1st is the function & 2nd is the initial value passed to the acc 
const output = arr.reduce(function (acc, curr) {
    // here acc === sum && curr === arr[i]
    acc = acc + curr;
    return acc;
}, 0);

console.log(output);


// ! Non-Functional Programming way for max

function findMax(arr) {
    let max = arr[i];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));


// ! Using reduce
const output = arr.reduce(function(acc, curr) {
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, arr[0]);
