/**
 * Retrieves the browser's preferred language
 * @returns {string} The language code
 */
window.getBrowserLanguage$ = _ => 
  navigator.language || navigator.userLanguage;