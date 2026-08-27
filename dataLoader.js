function getUserProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user profile");
      resolve({ name: "Alice", id: 1 });
    }, 1000);
  });
}

function getNotifications() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched notifications");
      resolve(["New message", "Friend request"]);
    }, 500);
  });
}

function getAccountSettings() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched account settings");
      const success = false;
      if (success) resolve({ theme: "dark", language: "en" });
      else reject(new Error("Failed to load settings"));
    }, 700);
  });
}

Promise.all([getUserProfile(), getNotifications(), getAccountSettings()])
.then((results) => {
  const [profile, notifications, settings] = results;
  console.log('Profile loaded', profile, notifications, settings);
})
.catch((err) => {
  console.error("Failed to load", err.message);
})

