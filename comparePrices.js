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
}