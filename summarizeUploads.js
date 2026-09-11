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

const uploads = [
  new Promise(resolve => setTimeout(() => resolve("vacation.jpg"), 300)),
  new Promise((_, reject) => setTimeout(() => reject(new Error("File too large")), 100)),
  new Promise(resolve => setTimeout(() => resolve("beach.png"), 200)),
  new Promise((_, reject) => setTimeout(() => reject(new Error("Unsupported format")), 400)),
];

summarizeUploads(uploads).then(summary => {
  console.log(summary);
});
