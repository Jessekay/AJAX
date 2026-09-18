async function loadDashboard() {
  try {
    const [user, todos] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/api/user').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/api/todos').then(res => res.json())
  ]);
    return {
      user, todos 
    };
  } catch (error) {
    console.error(error)
  }
}

loadDashboard().then(console.log)