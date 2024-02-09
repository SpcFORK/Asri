/**
 * Checks if the user has set their system to use dark mode.
 * @returns {boolean} True if dark mode is enabled, false otherwise.
 */
window.isDarkMode$ = _ => window.matchMedia
  && window.matchMedia('(prefers-color-scheme: dark)')
    .matches;
