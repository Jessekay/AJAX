async function checkServers(urls) {
  const results = await Promise.allSettled(
    urls.map(url => fetch(url))
  );


  const statuses = results.map(result => {
    if (result.status === 'fulfilled') {
      return "UP";
    } else {
      return "DOWN";
    }
  });
  return statuses;
}

const testUrls = [
  "https://jsonplaceholder.typicode.com/users",       // real, working endpoint
  "https://jsonplaceholder.typicode.com/nonexistent", // valid domain, bad path
  "https://this-domain-does-not-exist-12345.com",     // DNS failure — guaranteed reject
];

checkServers(testUrls).then(statuses => {
  console.log(statuses);
});