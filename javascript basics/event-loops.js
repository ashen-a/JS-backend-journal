// *JavaScript is a SYNCHRONOUS SINGLE-THREADED language
// * CallStack (inside JS Engine) --> If anything comes inside the CallStack it QUICKLY executes it
// * What if we want to execute a piece of code after some delay ??

// * BROWSER -> contains -> JS Engine and things like a LOCAL STORAGE, TIMERS etc.
// * Now the JS Engine needs a way to access the functions of the BROWSER

// * To access all those functions we need WEB-APIs
// * Browsers give JS Engines the facility to use all the functions through a keyword known as WINDOW (GLOBAL OBJECT)
// * window.setTimeout() === setTimeout()
// * The BROWSER WRAPS these superpower APIs inside the GLOBAL OBJECT (window) and give access of this window to the call-stack

// * addEventListener("click", function cb() {
// * console.log("CallBack");
// * })
// * This addEventListener is another superpower given by the BROWSER to the JS Engine through the window object in form of a WEB API which is the DOM API
// * This addEventlistener registers a CallBack in the WEB APIs enviroment on an event and that event is "click" which is attached to it
// * The Event Handler (CallBack function along with the attached event) sits in the Web APIs section waiting for an user to click a button or when we close the BROWSER it gets popped off
// * When a user clicks on a button the cb function gets pushed into the callbacck queue and it waits for it's turn to get executed

// * EVENT LOOP
// * It has only one job -> continously monitor the CallStack and the CallBack Queue


// * How does fetch() Web API works ??
// * fetch() is a web API used to make network calls to the servers to get data
// * It also registers the callback function into the web APIs environment
// ! SAMPLE CODE
// ! fetch("https://api.netflix.com")
// !.then(function cbF() {
// ! console.log("CB Netflix");
// ! });
// ! console.log("End");
// * The cbF function is waiting for data to be returned from the netflix servers

// * MicroTask Queue
// * It is similiar to the callback queue but it has higher priority
// * The callback function cbF goes to the microtask queue
// * The callback function cbT goes inside the callback queue
// * Since the MicroTask queue has higher priority than the callback queue so the EVENT LOOP wil execute it first
// * ALL THE CALLBACK FUNCTIONS THAT COME THROUGH PROMISES GO INTO THE MICROTASK QUEUE 

// ! STARVATION OF THE CALLBACK QUEUE