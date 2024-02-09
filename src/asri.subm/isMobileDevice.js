/**
 * Determines if the current device is a mobile device based on the user agent.
 * @returns {boolean} True if the device is mobile, false otherwise.
 */
window.isMobileDevice$ = _ => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  .test(navigator.userAgent);
