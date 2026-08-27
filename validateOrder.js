function validateCart(cartId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Validating cart ${cartId}...`);
      const items = [
        { name: "Shoes", price: 60, inStock: true },
        { name: "Hat", price: 20, inStock: true },
      ];
      const allInStock = items.every((item) => item.inStock);
      if (allInStock) resolve(items);
      else reject(new Error("Some items are out of stock"));
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = items.reduce((sum, item) => sum + item.price, 0);
      console.log(`Calculated total: $${total}`);
      resolve(total);
    }, 300);
  });
}

function applyDiscount(total, code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (code === "SAVE10") {
        const discounted = total * 0.9;
        console.log(`Discount applied. New total: $${discounted}`);
        resolve(discounted);
      } else {
        reject(new Error("Invalid discount code"));
      }
    }, 300);
  });
}

function createOrder(finalPrice) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Order created for $${finalPrice}`);
      resolve({ orderId: "ORD123", finalPrice });
    }, 200);
  });
}

validateCart("cart-001")
.then((items) => calculateTotal(items))
.then((total) => applyDiscount(total, "SAVE10") )
.then((finalPrice) => createOrder(finalPrice)).catch((err) => { console.error("Failed", err) })
.finally(() => {console.log("Process finished");
});