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
