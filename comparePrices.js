function fetchPriceFn(id) {
  const prices = {
    p1: 25,
    p2: 10,
    p3: 40,
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (prices[id] !== undefined) {
        resolve(prices[id]);
      } else {
        reject(new Error(`No price found for ${id}`));
      }
    }, Math.random() * 300); // random delay to scramble finish order
  });
}

const productIds = ["p1", "p2", "p3", "p4", "p5"];

fetchAllPrices(productIds, fetchPriceFn).then(summary => {
  console.log(summary);
});

async function fetchAllPrices(productIds, fetchPriceFn) {
  const results = await Promise.allSettled(
    productIds.map(id => fetchPriceFn(id))
  );
  const paired = productIds.map((id, index) => {
    return { id: id, result: results[index] };
  });

  const successes = paired.filter(item => item.result.status === "fulfilled");
  const failures = paired.filter(item => item.result.status === "rejected");

  const unavailable = failures.map(item => item.id);
  const prices = successes.map(item => item.result.value);

  const average = prices.length > 0
  ? prices.reduce((sum, price) => sum + price, 0) / prices.length
  : 0;

  const cheapest = successes.reduce((lowest, item) => {
    return item.result.value < lowest.result.value ? item : lowest; 
  }, successes[0]);

    return {
    average: Math.round(average * 100) / 100,
    cheapest: successes.length > 0 ? { id: cheapest.id, price: cheapest.result.value } : null,
    unavailable: unavailable,
  };
}

fetchAllPrices(25, fetchPriceFn);