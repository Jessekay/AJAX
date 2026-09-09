function orderPizza(pizza) {
  return new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if(success) {
        resolve(`${pizza} is ready!`)
      } else {
        reject('Not available')
      }
    }, 1000);
  });
}

function deliverPizza(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${order} has been delivered!`)
    }, 1000)
  });
}

function eatPizza(delivery) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${delivery} and now it is eaten!`)
    }, 1000);
  })
}

orderPizza('pepperoni')
.then((order) => {
  console.log('step 1:', order);
  return deliverPizza(order)
})
.then((delivered) => {
  console.log('step 2:', delivered);
  return eatPizza(delivered);
})
.then((eaten) => {
  console.log('step 3:', eaten);
})
.catch((error) => {
  console.log('Something went wrong', error);
});

