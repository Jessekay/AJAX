async function fetchUrl(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000)});

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText} (${url})`);
  }
  return res.json();
}

async function fetchAllUrls(urls) {
  return Promise.all(urls.map(fetchUrl))
}

async function getUserDashboard() {
  try {
    const [user, posts, todos] = await fetchAllUrls([
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/posts?userId=1',
    'https://jsonplaceholder.typicode.com/todos?userId=1'
  ]);

  return { user, posts, todos }

  } catch (error) {
    console.error('Failed to load the dashboard', error);
    throw error;
  }
}

getUserDashboard().then(({user, posts, todos}) => {
  console.log('User:', user.name, `${user.email}`);
  console.log('Posts:', posts.length);
  console.log('Todos:', todos.length);
})
.catch(error => console.log('Failed', error.message));

fetchAllUrls(['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/posts?userId=1', 'https://jsonplaceholder.typicode.com/todos?userId=1']);