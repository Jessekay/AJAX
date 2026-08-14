// 1. Legacy Callback Function (DO NOT MODIFY - WRAP THIS IN STEP 1)
function verifyPassengerLegacy(passengerId, callback) {
  setTimeout(() => {
    if (!passengerId) {
      callback("Error: Passenger ID missing!", null);
    } else if (passengerId.startsWith("FLAGGED")) {
      callback("Error: Account suspended due to unpaid balance!", null);
    } else {
      callback(null, { id: passengerId, name: "Jordan", rating: 4.9 });
    }
  }, 500);
}

// 2. Existing Promise-based functions (DO NOT MODIFY)
function estimateFare(distanceInKm) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (distanceInKm <= 0) {
        reject("Error: Invalid trip distance!");
      } else {
        const fare = distanceInKm * 2.5 + 3.00; // $2.50/km + $3 base fee
        resolve({ distance: distanceInKm, totalFare: fare });
      }
    }, 500);
  });
}

function dispatchDriver(driverType) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (driverType === "XL" || driverType === "Comfort") {
        resolve({ driverName: "Dave", carModel: "Toyota RAV4", eta: "4 mins" });
      } else {
        reject("Error: No drivers available for requested ride type!");
      }
    }, 500);
  });
}

function verifyPassenger(passengerId) {
  return new Promise((resolve, reject) => {
    verifyPassengerLegacy(passengerId, (err, result) => {
      if (err) {
        reject(err)
        return;
      } else {
        resolve(result)
      }
    })
  })
}

verifyPassenger("FLAGGED-99")
.then((passenger) => {
  console.log(`Rating: ${passenger.rating}`);
  return estimateFare(8);
})
.then((fareResult) => {
  console.log(`Estimated fare for ${fareResult.distance} km: ${fareResult.totalFare}`);
  return dispatchDriver("Economy")
})
.then((driverResult) => {
  console.log(`Driver ${driverName} ${carModel} is arriving in ${eta}!`);
})
.catch((err) => {
  console.error(`Booking Failed: ${err}`);
  return "Ride request saved to draft queue"
})
.then((finalOutcome) => {
  console.log(`Final Outcome:`, finalOutcome);
})