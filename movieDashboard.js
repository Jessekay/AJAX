async function fetchMovie(url) {
  const res = await fetch(url, { signal: AbortSignal(5000) });

  if (!res.ok) {
    throw new Error(`Request failed ${res.status} ${res.statusText} ${url}`)
  }
  return res.json();
}

async function fetchAllMoviesData(urls) {
  return Promise.all(urls.map(fetchMovie))
}

async function getMovieData() {
  try {
    const [movie, scenes, reviews] = await fetchAllMoviesData([
      'https://jsonplaceholder.typicode.com/albums/1',
      'https://jsonplaceholder.typicode.com/albums/1/photos',
      'https://jsonplaceholder.typicode.com/comments?postId=1'
    ])
  } catch (error) {
    console.error('Failed to load the data', error);
    throw error;
  }
}

