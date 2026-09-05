// an actual Promise takes some time to resolve right unlike our previous promise?

// !! normal way 
const promise = new Promise((resolve, reject) {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!");
    }, 10000)

});

function getData() {
    // JS Engine will not wait for promise to be resolved
    p.then((result) => console.log(result));
    console.log("Namaste JavaScript");

}

getData();

// !! async-await way
const p = new Promise((resolve, reject) {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!");
    }, 10000)

});

async function handlePromise() {

    console.log("Hello World!! This will be printed QUICKLY ")

    // JS Engine was waiting for promise to resolve for 10 seconds
    const valueOfResolvedPromise = await p;
    console.log("Namaste JavaScript");
    console.log(valueOfResolvedPromise)

    // An Edge case
    const valueOfResolvedPromise2 = await p;
    console.log("Namaste JavaScript 2");
    console.log(valueOfResolvedPromise2)
}

handlePromise();

// more complicated way of the async-await - CREATING 2 DIFF PROMISES

const p1 = new Promise((resolve, reject) {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!");
    }, 10000)

});

const p2 = new Promise((resolve, reject) {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!");
    }, 5000)

});


async function handlePromise() {

    console.log("Hello World!! This will be printed QUICKLY ")

    // 10 seconds
    const valueOfResolvedPromise = await p1;
    console.log("Namaste JavaScript");
    console.log(valueOfResolvedPromise)

    // 5 seconds
    const valueOfResolvedPromise2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(valueOfResolvedPromise2)
}

handlePromise();

// reversing the timing of the promises 

const p1 = new Promise((resolve, reject) {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!");
    }, 5000)

});

const p2 = new Promise((resolve, reject) {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!");
    }, 10000)

});


async function handlePromise() {

    console.log("Hello World!! This will be printed QUICKLY ")

    // 5 seconds, this will be printed after 5 seconds now
    const valueOfResolvedPromise = await p1;
    console.log("Namaste JavaScript");
    console.log(valueOfResolvedPromise)

    // 10 seconds, will be printed after 10 seconds
    const valueOfResolvedPromise2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(valueOfResolvedPromise2)
}

handlePromise();
