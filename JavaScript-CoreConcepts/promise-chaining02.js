// **! CONSUMING A PROMISE
const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;     // ** this orderid is passed down the chain
  })
  .then(function(orderId) {
    // ** this also returns a promise object
    return proceedToPayment(orderId);
  })
  .then(function(paymentInfo) {
    console.log(paymentInfo);
    return paymentInfo;
  })
  .catch(function (err) {
    console.log(err.message);
  });

// **! PRODUCER END
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
    ///
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful"); 
    });
}

function validateCart(cart) {
  return true;
}
