const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'step 1');
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'step 2 failed');
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, 'step 3 has failed');
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
}).catch((err) => {
  console.error(err);
})