async function fetchFastest(urls, timeoutMs) {
  const fetchPromises = urls.map(url => fetch(url));

  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('All mirrors timed out')), timeoutMs)
);

try {
  const res = await Promise.race([...fetchPromises, timeoutMs]);
  return await res.json();
} catch (error) {
  throw error;
}
}