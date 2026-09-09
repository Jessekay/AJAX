function orderPizza(pizza) {
  return new Promise((resolve, reject) => {
    const success = false;
    setTimeout(() => {
      if(success) {
        resolve('Pizza is ready!')
      } else {
        reject('Not available')
      }
    }, 1500);
  });
}

orderPizza('pepperoni')
.then((order) => {
  console.log(`The order is placed:`, order);
})
.catch((error) => {
  console.log('Something went wrong', error);
  
});