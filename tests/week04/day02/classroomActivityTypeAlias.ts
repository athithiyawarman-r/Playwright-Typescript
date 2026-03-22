type methods = "UPI" | "CreditCard" | "PayPal";

function makePayment (paymentMethod: methods) {
  console.log(`Payment method: ${paymentMethod}`);
}

makePayment("UPI");
makePayment("CreditCard");