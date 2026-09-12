async function countPassFail(promises) {
  const results = await new Promise.allSettled(promises);

  const fulfilled = results.filter(result => result.status === 'fulfilled');
  const rejected = results.filter(result => result.status === 'rejected');

  return {
    passed: fulfilled.length,
    failed: rejected.length
  }
}