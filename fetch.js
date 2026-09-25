async function fetchData(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Request Filed! ${res.status} ${res.statusText}`)
  }
  return  res.json();
}

async function fetchAllData(ids) {
  const settled = Promise.allSettled(ids.map(fetchData))
  return (await settled).map((result, i) => {
    if (result.status === 'fulfilled') {
      return { id: ids[i], success: true, data: result.value }
    } else {
      return { id: ids[i], success: false, error: result.reason.message  }
    }
  })
}

async function getData() {
  const result = fetchAllData([2 ,99])
  return result;
}

getData()
.then(results => {
  results.forEach(r => {
    console.log('Id:', r.id);
    console.log('Status:', r.success);
    console.log('Data:', r.data ?? r.error);
  })
});