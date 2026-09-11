async function summarizeUploads(uploads) {
  const results = await Promise.allSettled(uploads)

  const fulfilled = results.filter(result => result.status === 'fulfilled');
  const rejected = results.filter(result => result.status === 'rejected');

  const succeeded = fulfilled.map(result => result.value);
  const failed = rejected.map(result => result.reason.message);

  return {
    successCount: succeeded.length,
    failureCount: failed.length,
    succeeded: succeeded,
    failed: failed
  };
}