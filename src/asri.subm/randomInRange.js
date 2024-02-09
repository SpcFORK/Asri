/**
 * Generates a random integer between the specified range, inclusive.
 * @param {number} min - The minimum value in the range.
 * @param {number} max - The maximum value in the range.
 * @returns {number} A random integer between min and max.
 */
window.randomInRange$ = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;