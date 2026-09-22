async function fetchUrl(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }
  return res.json();
}

async function fetchMultipleApis(urls) {
  return Promise.all(urls.map(fetchUrl));
}

async function getResponse() {

  try {
      const [...url] = await fetchMultipleApis([
      'https://jsonplaceholder.typicode.com/posts/4',
      'https://jsonplaceholder.typicode.com/posts/5',
      'https://jsonplaceholder.typicode.com/posts/6'
    ])
    return {...url}
  } catch (error) {
    console.log('Failed', error.message)
    throw error;
  }
}

getResponse().then(data => console.log(data));

