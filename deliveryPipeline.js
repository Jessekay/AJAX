// Legacy Callback Function (DO NOT EDIT)
function verifyCustomerLegacy(customerId, callback) {
  setTimeout(() => {
    if (!customerId) {
      callback("Error: Customer ID missing!", null);
    } else if (customerId.startsWith("BANNED")) {
      callback("Error: Customer account is banned!", null);
    } else {
      callback(null, { id: customerId, name: "Alex", vip: true });
    }
  }, 500);
}

// Existing Promise-based functions (DO NOT EDIT)
function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount <= 0) {
        reject("Error: Payment amount must be greater than $0");
      } else {
        resolve({ transactionId: "TX-99812", status: "PAID" });
      }
    }, 500);
  });
}

function assignDriver(address) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!address) {
        reject("Error: Delivery address is required!");
      } else {
        resolve({ driverName: "Sam", eta: "15 mins" });
      }
    }, 500);
  });
}


function verifyCustomer(customerId) {
  return new Promise((resolve, reject) => {
    verifyCustomerLegacy(customerId, (err, result) => {
      if (err) {
        reject(err)
        return;
      } else {
        resolve(result)
      }
    })
  })
}

verifyCustomer("CUST-100")
.then((customer) => {
  console.log("Customer is verified:", customer.id);
  return processPayment(50);
})
.then((paymentRes) => {
  console.log(`Payment is confirmed: ${paymentRes.transactionId}`);
  return assignDriver("123 Main St");
})
.then((driverRes) => {
  return `Driver ${driverRes.driverName} is on the way! ETA ${driverRes.eta}`
})
.catch((err) => {
  console.error("Pipeline Failed", err);
  return "Order saved to draft queue"
})
.then((finalOutcome) => {
  console.log("Final order output:", finalOutcome);
})