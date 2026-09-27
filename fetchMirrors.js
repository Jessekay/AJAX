async function fetchFastest(urls, timeoutMs) {
  const fetchPromises = urls.map(url => fetch(url).then(res => {
    if (!res.ok) throw new Error(`Mirror failed: ${url}`);
    return res;
  }));

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('All mirrors timed out')), timeoutMs)
);

try {
  const res = await Promise.race([...fetchPromises, timeoutPromise]);
  return await res.json();
} catch (error) {
  throw error;
}
}

fetchFastest([
  'https://httpbin.org/delay/3',
  'https://httpbin.org/delay/1',
  'https://httpbin.org/delay/5'
], 4000).then(data => console.log("Winner:", data))
        .catch(err => console.log("Failed:", err.message));