### Read javascript.info for the fundamental syntax

### Internal Mechanism

we will be using the Node.js software 

before the code run-time
code file -> parsed into -> syntax tree 
 
followed by

JIT compiler takes the syntax tree
-> Byte Code -> Machine Code -> code execution

### extra concepts which I missed earlier
```js
const teas = [
    "Green tea",
    "Black tea",
    "Oolong tea",
    "White tea",
    "Herbal tea"
];


const index = teas.indexOf("oolong tea");
if (index > -1) {
    teas.splice(index, 1)
}


// only include teas that are caffeinated
teas.filter 
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");

// to sort in alphabetical order
console.log(teas.sort())




```