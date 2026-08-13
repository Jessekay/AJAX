function checkInventoryLegacy(itemId, quantity, callback) {
  setTimeout(() => {
    if (!itemId) {
      callback("Invalid item ID provided!", null);
    } else if (quantity > 10) {
      callback(`Item ${itemId} out of stock for quantity ${quantity}!`, null);
    } else {
      callback(null, { itemId: itemId, quantity: quantity, pricePerUnit: 25 });
    }
  }, 1000);
}

function checkInventory(itemId, quantity) {
  return new Promise((resolve, reject) => {
    checkInventoryLegacy(itemId, quantity, (err, data) => {
      if (err) {
        reject(err)
        return;
      } else {
        resolve(data);
      }
    });
  }).then((data) => {
    const totalCost = data.quantity * data.pricePerUnit;
    return `Order confirmed for Item ${data.itemId}! Total cost: ${totalCost}`
    return transformedData;
  }).catch((err) => {
    console.error(err);
    return "Order placed on back order (No immediate charge)";
  }).then((finalMessage) => {
    console.log("Final message:", finalMessage);
  })
}

checkInventory('ITEM-101', 15);