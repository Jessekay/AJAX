function getProfile(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json());
}

function getOrders(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(res => res.json());
}

function getWeather(city) {
  return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`).then(res => res.json());
}

async function loadDashboard(userId, lat, lon) {
  try {
    const [profile, orders, weather] = await Promise.all([
      getProfile(userId), getOrders(userId), getWeather(lat, lon)
    ]);

    console.log('Profile:', profile.name, profile.email);
    console.log('Orders: ', orders.length, 'items');
    console.log('Weather:', weather.current_weather.temperature, 'C');
    
    
    
  } catch (error) {
    console.error('Failed to load the dashboard', error.message);
  }
}

loadDashboard(3, -1.94, 30.06);