function processPayment(cardToken, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!cardToken) {
        reject("Payment Error: Invalid card token!");
      } else if (amount <= 0) {
        reject("Payment Error: Amount must be greater than $0!");
      } else {
        resolve({ paymentId: "PAY-88219", status: "CHARGED", amount: amount });
      }
    }, 500);
  });
}

function generateInvoice(paymentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!paymentId) {
        reject("Invoice Error: Payment ID required!");
      } else {
        resolve({ invoiceNum: "INV-2026-001", downloadUrl: "https://pdf.link/inv001" });
      }
    }, 500);
  });
}

async function checkout(cardToken, amount) {
  try {
    const payment = await processPayment(cardToken, amount);
    console.log(`Payment successfully made ${payment.paymentId} for payment ${payment.amount}`);

    const invoice = await generateInvoice(payment.paymentId);
    console.log(`Invoice ready: ${invoice.invoiceNum} at ${invoice.downloadUrl}`);

  } catch (error) {
    console.error(`Checkout failed: ${error}`);
  }
}

checkout("TOKEN-1234", 150)