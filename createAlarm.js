async function createAlarm(name, time) {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (time < 2) {
          reject("Delay is not sufficient")
        } else {
          resolve(`Wake up ${name}`);
        }
      }, time * 1000);
    });
  } catch (error) {
    console.error("Failed");
  }
}

createAlarm('John', 1).then((message) => {
    console.log(message) // output "Wake up John" after 4 seconds
}).catch((error) => {
    console.error(error)
})

