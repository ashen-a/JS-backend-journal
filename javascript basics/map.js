const arr = [5, 1, 3, 2, 6];
// * To tranform the above array we use the 'map' function

function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}
function binary(x) {
    return x.toString(2);
}

//* map will run the 'double' function over each and every value of of arr and create a new array 
const doubleoutput = arr.map(double);
const tripleoutput = arr.map(triple);

const binaryoutput = arr.map(binary);
const binaryOutput = arr.map((x) => x.toString(2)); // ! Using Arrow Functions

console.log(doubleoutput);
console.log(tripleoutput);
console.log(binaryoutput);