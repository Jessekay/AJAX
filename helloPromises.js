function getMessage(msg) {
  return new Promise((resolve, reject) => {
    resolve(msg);
  })
}

getMessage()
.then(
    (data) => console.log("Hello from Promise")
    )