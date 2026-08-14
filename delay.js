function getMessage(msg) {
  return new Promise((resolve, reject) => {
    console.log("Waiting...");
    setTimeout(() => {
      resolve(msg);
    },2000)
  })
}

getMessage().then(
  (data) => console.log("Hey Dev Guillain!")
)