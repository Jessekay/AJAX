function createAlarm(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Wake up ${name}`)
    }, delay)

    if (delay < 2000) {
      reject('Delay is not sufficient!')
    }
  })
}

createAlarm('Chris', 1000)
.then(
  (data) => console.log(data),
  (error) => console.log(error)
);