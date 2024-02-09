/**
 * Scrolls the window to the specified element smoothly.
 * @param {Element} element - The DOM element to scroll to.
 */
window.scrollToElement$ = element => {
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/**
 * Scrolls the window to the top smoothly.
 */
window.scrollToTop$ = _ => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
