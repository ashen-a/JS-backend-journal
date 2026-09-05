// **! CONSUMING A PROMISE
// ?? What if we want to go to proceedToPayment even if the cart is not validated
const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;     // ** this orderid is passed down the chain
  })
  .catch(function (err) {   // ** now this will only be concerned with the errors on top of this chain
    console.log(err.message);
  })
  // ** No matter what happens the below code will definitely be called
  .then(function(orderId) {
    return proceedToPayment(orderId);
  })
  .then(function(paymentInfo) {
    console.log(paymentInfo);
    return paymentInfo;
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
  return false;
}
