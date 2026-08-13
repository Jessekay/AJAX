function checkConnection(msg) {
  return new Promise((reject) => {
    reject(msg);
    return;
  })
}

checkConnection().then(
  (err) => console.error("Error: check connection!")
)