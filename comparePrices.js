async function fetchAllPrices(productIds, fetchPriceFn) {
  const results = await Promise.allSettled(
    productIds.map(id => fetchPriceFn(id))
  );
  const paired = productIds.map((id, index) => {
    return { id: id, result: results[index] };
  })
}