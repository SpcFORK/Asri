/**
 * Creates a throttled function that only invokes `func` at most once per every `delay` milliseconds.
 *
 * @param {Function} func The function to throttle.
 * @param {number} delay The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
window.throttle$ = (func, delay) => {
  let lastExecuted = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastExecuted >= delay) {
      func.apply(this, args);
      lastExecuted = now;
    }
  };
};
