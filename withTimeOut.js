async function withTimeOut(promise, ms) {
  const timeOutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject (new Error("Taking too long, try again later."))
  }, ms);
});

return Promise.race([promise, timeOutPromise]);
}