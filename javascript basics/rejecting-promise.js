// **! CONSUMING A PROMISE
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
  })
  // ** the promise object can be attached with a failure object as well
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

function validateCart(cart) {
  return false;
}
