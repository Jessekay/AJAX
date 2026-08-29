async function fetchMultipleAPIs(apiUrls) {
  const fetchPromises = apiUrls.map(url =>
    fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`)
      } else {
        return response.json();
      }
    })
  );

  const settledResults = await Promise.allSettled(fetchPromises);

  const results = [];

  settledResults.forEach((result, index) => {
    if(result.status === 'fulfilled') {
      results.push(result.value)
    } else {
      console.error(`Failed to fetch ${apiUrls[index]}`, result.reason);
    }
  });
  return results;
}


const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6',
];

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

