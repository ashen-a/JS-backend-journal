// ? HOW WE CAN CONSUME A PROMISE ?

const promise = createOrder(cart);

promise.then(function (orderID) {
  proceedToPayment(orderID);
});

createOrder(cart)
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });
