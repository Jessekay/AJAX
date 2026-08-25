function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) {
        reject("User ID is required!");
      } else {
        resolve({ id: userId, username: "dev_jesse", role: "admin" });
      }
    }, 500);
  });
}

function fetchUserPosts(role) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (role !== "admin") {
        reject("Access denied: Admin role required to view posts.");
      } else {
        resolve(["Post 1: Async/Await Guide", "Post 2: Advanced Promises"]);
      }
    }, 500);
  });
}

async function loadDashboard(userId) {
  try {
    const user = await fetchUser(userId)
    console.log(`User loaded: ${user.username}`);

    const posts = await fetchUserPosts(user.role)
    console.log(`Posts are loaded: ${user.posts}`);

  } catch (err) {
      console.error("Dashboard error:", err);
  }
}

loadDashboard("USER-100")
