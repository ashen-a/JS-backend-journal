// ! literally filter based on the given condition and CREATES A NEW ARRAY
const arr = [5, 1, 3, 2, 6];

//* filter odd values

function isOdd(x) {
    return x % 2;
}

function isEven(x) {
    return x % 2 === 0;
}

function isGreater(x) {
    return x > 4;
}

const outputOdd = arr.filter(isOdd)
const outputEven = arr.filter(isEven)
const outputGreater = arr.filter(isGreater)

console.log(outputOdd);
console.log(outputEven);
console.log(outputGreater);