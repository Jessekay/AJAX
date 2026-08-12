function delay(ms) {
  return new Promise((reject, resolve) => {
    if (ms === undefined || ms < 0) {
      reject("The number must be positive");
      return;
    }

    setTimeout(() => {
      resolve(`Successfully waited ${ms}`);
    })
  },5000);
}

delay(5000).then(
  (data) => console.log(data),
  (error) => console.error(error)
);