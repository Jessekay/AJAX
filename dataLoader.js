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
      const success = true; // try flipping this to false later
      if (success) resolve({ theme: "dark", language: "en" });
      else reject(new Error("Failed to load settings"));
    }, 700);
  });
}

