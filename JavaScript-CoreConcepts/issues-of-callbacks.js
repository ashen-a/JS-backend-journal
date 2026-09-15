// * JavaScript is a synchronous single-threaded language
// ? JavaScript waits for none but what if we want it to wait for a specific part of the code 
// * CallBacks are a powerful way to do asynchronous tasks in JS


console.log("Namaste")

setTimeout(function() {
    console.log("JavaScript")
}, 5000);

console.log("Season 2")

// Illustration 2
const cart = ["shoes", "pants", "kurta"];

api.createOrder();

// * only after we have created an Order we must proceed to Payments -> async task

api.proceedToPayment();

// !
api.createOrder(cart, function (){
    api.proceedToPayment()
});

// * we have to call this api only after we have done with the payments
api.showOrderSummary();

api.createOrder(cart, function (){
    api.proceedToPayment(function (){
        api.showOrderSummary();
    })
});
// ! 2 MAJOR PROBLEMS
// ! THIS IS TURNING OUT TO BE A CALLBACK HELL // PYRAMID OF DOOM
// ! INVERSION OF CONTROL