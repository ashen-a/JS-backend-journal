// **! CONSUMING A PROMISE
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // * this async operation returns us a promise
console.log(promise);              // ** Promise {<pending>} -> since JS takes 5 seconds to resolve the Promise

promise.then(function (orderId) {
  console.log(orderId);
  // ** proceedToPayment(orderId);
});

// **! PRODUCER END
// ** Writing your Promise
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // * createOrder
    // * validateCart
    // * orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // * logic to creatOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId); // ** whatever we resolve over here it gets stored in the callback function line:6
      }, 5000);           // ** resolving the promise after 5 seconds
    }
  });
  return pr;
}

function validateCart(cart) {
  return true; // for the sake of simplicity we are just returning true
}
