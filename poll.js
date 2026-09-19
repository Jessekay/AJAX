async function pollUntilDone(maxAttempts) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const res = await fetch('api/job-status');
    const data = await res.json();

    if (data.status === 'ok') return data;

    if (attempt < maxAttempts) {
      return new Promise((resolve) => {
        setTimeout(resolve, 2000)
      });
    }
  }
  throw new Error(`Job not done after ${maxAttempts} attempts`);
}

pollUntilDone(10)