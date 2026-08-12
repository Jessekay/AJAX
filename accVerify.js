function verifyAccount(accountNumber) {
  return new Promise((resolve, reject) => {
    if (!accountNumber) {
      reject("Error: Account number missing!");
    } else if (accountNumber.startsWith("F")) {
      reject("Error: Account is frozen!");
    } else {
      resolve({ account: accountNumber, balance: 500 });
    }
  });
}

verifyAccount("F999999")
.then((accountObj) => {
  return `Account verified. Balance: ${accountObj.balance}`;
}).catch((err) => {
  console.log(err);
  return "Using temporary guest account with $0 balance"
}).then((status) => {
  console.log("Status:", status);
})