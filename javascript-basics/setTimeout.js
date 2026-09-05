// ! setTimeout() has trust-issues
console.log("Start")

setTimeout(function cb() {
    console.log("CallBack");
}, 5000);

console.log('End');

// 10000 lines of code that take 10 seconds approx to execute

// ! "DON'T BLOCK THE MAIN THREAD" 
// ! we will be blocking the main thread for 10 seconds now
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate <= startDate + 10000){
    endDate = new Date().getTime(); // this will be updated constantly
}

console.log("While expires")


// ! CONCEPT
// * To get the date and time
// * let startDate = new Date();
// * gives the time in millisecond 
// * let curretnTime = new Date().getTime(); 
// * Read about what is the CONCURENCY MODEL