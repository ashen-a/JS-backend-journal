### What is async ?
- async is a keyword used before a function to create a async function
- now what is an async function ? -> in code
- by property of an async function it will always return a promise
- either it returns a promise or if it returns a normal value like a string then this function will automatically wrap this value inside a promise and return a promise 

### Code Snippet
This function returns a Promise
>async function getData() {
>    return "Namaste";
>} 

Inside dataPromise we have a promise
>const dataPromise = getData();
>console.log(data)

Promise {<fulfilled>: 'Namaste'} 
Prototype: Promise 
PromiseState: fulfilled
PromiseResult: 'Namaste'

### now how to get the data out of dataPromise? using .then() we handle promises

>dataPromise.then((result) => console.log(result));

### Returning an actual promise this time 

>const promise = new Promise((resolve, reject) => {
>    resolve("Promise Resolved Value!!!")
>})
>
>async function getData() {
>    return promise;
>}
>
>const dataPromise = getData();
>
>dataPromise.then((res) => console.log(res));
or we can
>getData().then((res) => console.log(res));


## Using async with await

- async and await combo is used to handle promises

how we handled promises before async-await before came in picture

>const p = new Promise((resolve, reject) => {
>    resolve("Promise Resolved Value!!");
>});

>function getData() {
>    p.then((res) => console.log(res));
>}

>getData();

Now using async-await

- await is a keyword that can only be used inside a async function
- you write this await keyword in front of a promise and it resolves the promise 

>const promise = new Promise((resolve, reject) => {
>    resolve("Promise Resolved Value!!");
>});

>async function handlePromise() {
>    // handling promise from this function
>    const valueOfResolvedPromise = await promise;
>    console.log(valueOfResolvedPromise);
>}

>handlePromise();


## Magic of async-await

### the normal way

>const promise = new Promise((resolve, reject) {
>    setTimeout(() => {
>        resolve("Promise Resolved Value!!!");
>    }, 10000)

>});

>function getData() {
>    // JS Engine will not wait for promise to be resolved
>    p.then((result) => console.log(result));
>    console.log("Namaste JavaScript");
    
>}

>getData();

### what's happening with the async-await way 

- JS Engine was waiting for promise to resolve for however long it takes

>const p = new Promise((resolve, reject) {
>    setTimeout(() => {
>        resolve("Promise Resolved Value!!!");
>    }, 10000)
>
>});

>async function handlePromise() {

>    const valueOfResolvedPromise = await p;
>    console.log("Namaste JavaScript");
>    console.log(valueOfResolvedPromise)
>}

>handlePromise();

- An Interesting case in the async-await way:

>async function handlePromise() {

>    console.log("Hello World!! This will be printed QUICKLY ")

>    // JS Engine was waiting for promise to resolve for 10 seconds
>    const valueOfResolvedPromise = await p;
>    console.log("Namaste JavaScript");
>    console.log(valueOfResolvedPromise)

    // Will JS Engine wait for this again or print everything together after 10 sec ?? YES EXACTLY IT PRINTS EVERYTHING TOGETHER AFTER 10 SEC
>    const valueOfResolvedPromise2 = await p;
>    console.log("Namaste JavaScript 2");
>    console.log(valueOfResolvedPromise2)
>}

- Creating 2 different promises and different resolves times

>const p1 = new Promise((resolve, reject) {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!");
    }, 10000)

});

>const p2 = new Promise((resolve, reject) {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!");
    }, 5000)

});


>async function handlePromise() {

    console.log("Hello World!! This will be printed QUICKLY ")

    // taking 10 seconds to resolve
    const valueOfResolvedPromise = await p1;
    console.log("Namaste JavaScript");
    console.log(valueOfResolvedPromise)

    // Although this was resolved in 5 seconds it had to wait for 10 seconds and all of it was printed together
    const valueOfResolvedPromise2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(valueOfResolvedPromise2)
}

>handlePromise();

- reversing the timings of p1(5000 ms) and p2(10000 ms)

>const p1 = new Promise((resolve, reject) {
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

>handlePromise();

## NOW WHAT'S ACTUALLY HAPPENING UNDER THE HOOD OF ASYNC-AWAIT ABNORMALITY?

- JavaScript is a SYNCHRONOUS SINGLE THREADED LANGUAGE
- JS has only one CALLSTACK
- JS waits for NO-ONE, it may appear so sometimes like in this case

- Initially the Call Stack is empty, the function handlePromise() is called and it registers itself in the CallStack. First line of the function that is logging "Hello World!! " is logged immediately onto the console.
- When it encounters await p1, the function handlePromise() suspends itself and free's up the CallStack and when the promise p1 is resolved it is called again in the CallStack and continues from where it left -> logs "Namaste JavaScript 1 & Promise Resolved Value!!!" 
- Encounters await p2 again and the same process continues -> freeing up the CallStack -> Calling itself back again once the promise is resolved -> logging on the console 

- JS does not let the CallStack to be BLOCKED 
- The page does not FREEZE UP

#### Important misunderstanding

A Promise starts running as soon as it’s created, not when you await it.

For example, if p1 is declared at the start of the program with a 10-second timer, the countdown begins immediately. By the time execution reaches await p1, the promise has already been working in the background. The await doesn’t start the timer — it simply pauses execution until the promise resolves.

Meanwhile, p2 also started its own timer when it was declared. If p2 has a 5-second timer, then 5 seconds later it’s already resolved — even if the code hasn’t reached await p2 yet.

So, when execution finally reaches await p2, there’s no extra waiting. The promise is already settled, so JavaScript just grabs its value instantly and assigns it to val2. That’s why you see both results printed close together.

### working with fetch()

- When you call this fetch() it gives you a promise
- The function will suspend at await and will resume after this fetch call has been successfully fulfilled 

>const data = await fetch(API_URl);

- fetch() returns a response object
- fetch() is basiccally a promise when it is resolved it gives you a response object
- The response object has a body which is a readable stream
- Response.json() is again a Promise and when it is resolved it gives you a result/value
- fetch() => Response.json() => jsonValue

### Handling errors in async-await using try-catch

>const API_URl = "https://api.github.com/users/ashen-a";

>async function handlePromise() {
>  try {
>    const data = await fetch(API_URl);
>    const jsonValue = await data.json();
>  } 
>  catch (err) {
>    console.log(err);
>  }
  
>  console.log(jsonValue);

>}
>handlePromise();

// traditional way of catching errors
// handlePromise returns a Promise since it is an async function
>handlePromise().catch((err) => console.log(err));

### async-await is just a syntactical sugar over then & catch