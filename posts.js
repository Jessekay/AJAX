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
}


const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6',
];

