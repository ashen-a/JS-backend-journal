// ! Promises are used to handle async operations in JS 

// * suppose we are creating an e-commerce website and for the sake of simplicity cart is just an array of strings 
const cart = ["shoes", "pants", "kurta"];
createOrder(cart); // this will create an order in our DB and will return an orderID
proceedToPayment(orderID); // this api will take your order ID and will take you to the payment page 

// ! The above 2 api's are asynchronous 

// * The 2 async operations using CallBacks
// * The issue here is INVERSION OF CONTROL -> what is this createoRDER api never calls our function back ??
createOrder(cart, function () {
    proceedToPayment(orderID);
})



// ? HOW WE CAN HANDLE THESE TYPE OF SITUATIONS USING PROMISES

const promise = createOrder(cart); // * whenever JS Engine will execute this line, createOrder api will return us a promise -> (promise is nothing but an empty object)
// lines of code
    // * these will start executing and after 5-6 seconds or whatever time it takes what will happen is this empty promise object will be filled with data automatically
    // * {data: undefined} -> {data: orderID} 
// lines of code 

// as soon as the promise object is filled with data it will automatically call this callback function
promise.then(function() {
    proceedToPayment(orderID);
})