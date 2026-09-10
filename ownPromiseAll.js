function all(...promises) {
  return new Promise((resolve, reject) => {
    const results = new Array(promises.length);

    let completed = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
      .then(value => {
        results[index] = value;
        completed++;

        if (completed === promise.length) {
          resolve(results);
        }
      }).catch(err => {
        reject(err);
      })
    })
  })
}

let promise1 = new Promise(resolve => {
  resolve("O");
});
 
let promise2 = new Promise(resolve => {
  resolve("K");
});
 
all(promise1, promise2).then(console.log);