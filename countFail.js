async function countFail(promises) {
  const results = await new Promise(promises);

  const fulfilled = results.filter(result => result.status === 'fulfilled');
}