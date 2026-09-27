async function pingWithFailover(primaryUrl, backupUrls, timeoutMs) {

  const allFetch = [primaryUrl, ...backupUrls];
  const fetchPromises = allFetch.map(url => fetch(url)
  .then(res => {
    if (!res.ok) {
      throw new Error(`Server failed`);
    }
      return res;
  })
)

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('All servers unreachable')), timeoutMs)
  });



  try {
    const res = await Promise.race([...fetchPromises, timeoutPromise]);
    return await res.json();
  } catch (error) {
    throw error
  }
}