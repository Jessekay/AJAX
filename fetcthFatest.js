async function fetchFastest(urls) {
  const result = await Promise.race(urls)
  const fastUrl = result.json()
}