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