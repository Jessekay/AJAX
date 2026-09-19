let controller = null;

async function startRequest() {
  controller?.abort()
  controller = new AbortController()

  const { signal } = controller;

  try {
    const res = await fetch('api/report', { signal });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    console.log('report loaded', data);

  } catch (error) {
    if (error === 'AbortError') {
      console.log('Request cancelled');
      return;
    }
    console.error(error)
  }
}

async function cancelRequest() {
  controller?.abort();
}