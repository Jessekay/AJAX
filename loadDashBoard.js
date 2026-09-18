async function loadDashboard() {
  try {
    const [user, todos] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/api/user').then(res => {
      console.log(res.status, res.ok);
      res.json()
    }),
    fetch('https://jsonplaceholder.typicode.com/api/todos').then(res => {
      console.log(res.status, res.ok);
      res.json()
    })
  ]);
    return {
      user, todos 
    };
  } catch (error) {
    console.error(error)
  }
}

loadDashboard().then(console.log)