async function summarizeUploads(uploads) {
  const results = await Promise.allSettled(uploads)

  const fulfilled = results.filter(result => result.status === 'fulfilled');
  const rejected = results.filter(result => result.status === 'rejected');
}