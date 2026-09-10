const promise1 = 89;
const p2 = 'Jesse';
const p3 = true;

Promise.all([promise1, p2, p3]).then((values) => {
  console.log(values);
})