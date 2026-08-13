function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve()
    } else {
      reject()
      return;
    }
  })
}

checkAge(18).then(
  (data) => console.log("You are allowed to enter"),
  (error) => console.error("You are not allowed to enter")
)