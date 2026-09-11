async function fetchAllPrices(productIds, fetchPriceFn) {
  const results = await Promise.allSettled(
    productIds.map(id => fetchPriceFn(id))
  );
}