/**
 * Attempts to execute a function and retries if it fails.
 * @param {Function} func - The function to attempt.
 * @param {number} maxAttempts - The maximum number of attempts.
 * @param {number} delayBetweenAttempts - The delay between attempts in milliseconds.
 * @returns {Promise} A promise that resolves with the function's result or rejects after all attempts fail.
 */
window.retry$ = (func, maxAttempts, delayBetweenAttempts) => {
  let
    attempts = 0,
    tryFunction = () => {
      attempts++;
      return func().catch(error => {
        if (attempts < maxAttempts) {
          return new Promise(resolve => setTimeout(resolve, delayBetweenAttempts))
            .then(tryFunction);
        }
        throw error;
      });
    };

  return tryFunction();
};