
// Create a function called `withTimeout` that accepts:

// - An asynchronous operation.
// - A timeout duration.

// The function should:

// - Return the operation's result if it finishes before the timeout.
// - Reject with a timeout error if it takes too long.
// - Cancel the operation using `AbortController` when the timeout occurs.
// - Clear the timeout when the operation finishes.
// - Properly handle errors from the original operation.

// Use this endpoint for testing:

// ```
// https://httpbin.org/delay/5
// ```

// Example:

// ```jsx
// withTimeout(
//     signal => fetch("https://httpbin.org/delay/5", { signal }),
//     3000
// );
// ```

// Test with operations that:

// - Finish before the timeout.
// - Finish around the timeout.
// - Take longer than the timeout.
// - Fail before the timeout.

// The timeout should **not** be reported as an operation error, and an operation error should **not** be reported as a timeout.



class TimeoutError extends Error {
  constructor(ms) {
    super(`Operation timed out after ${ms}ms`);
    this.name = "TimeoutError";
  }
}

function withTimeout(operation, duration) {
  const controller = new AbortController();
  let timeoutId;

  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      const err = new TimeoutError(duration);
      reject(err);          // reject first so the timeout wins the race
      controller.abort(err); // then cancel the operation
    }, duration);
  });

  // Promise.resolve().then also catches synchronous throws from operation
  const operationPromise = Promise.resolve().then(() =>
    operation(controller.signal)
  );

  return Promise.race([operationPromise, timeoutPromise]).finally(() =>
    clearTimeout(timeoutId)
  );
}