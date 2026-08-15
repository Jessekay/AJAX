// 1. Legacy Callback Function (DO NOT MODIFY - WRAP THIS IN STEP 1)
function checkGatewayLegacy(gatewayId, callback) {
  setTimeout(() => {
    if (!gatewayId) {
      callback("Error: Gateway ID missing!", null);
    } else if (gatewayId.startsWith("OFFLINE")) {
      callback("Error: Smart home hub is offline!", null);
    } else {
      callback(null, { id: gatewayId, status: "CONNECTED", batteryLevel: 92 });
    }
  }, 500);
}

// 2. Existing Promise-based functions (DO NOT MODIFY)
function armSecuritySystem(mode) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mode !== "STAY" && mode !== "AWAY") {
        reject("Error: Invalid security mode specified!");
      } else {
        resolve({ mode: mode, doorsLocked: true, alarmArmed: true });
      }
    }, 500);
  });
}

function setThermostatTemperature(targetTemp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (targetTemp < 60 || targetTemp > 80) {
        reject(`Error: Temperature ${targetTemp}°F is out of safe range (60-80°F)!`);
      } else {
        resolve({ targetTemp: targetTemp, currentTemp: 74, mode: "COOLING" });
      }
    }, 500);
  });
}

function checkGateway(gatewayId) {
  return new Promise((resolve, reject) => {
    checkGatewayLegacy(gatewayId, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

checkGateway("OFFLINE-404")
.then((hub) => {
  console.log(`Gateway connected! ${hub.batteryLevel}%`);
  return armSecuritySystem("STAY")
})
.then((security) => {
  console.log(`Security armed in ${security.mode} mode. Doors locked: ${security.doorsLocked}`);
  return setThermostatTemperature(95);
})
.then((thermostat) => {
  return `Thermostat set to ${thermostat.targetTemp}F in ${thermostat.mode} mode!`
})
.catch((err) => {
  console.error("Automation failed", err)
  return "Switch to emergency manual control mode"
})
.then((finalOutcome) => {
  console.log(`Final status message: ${finalOutcome}`);
})

