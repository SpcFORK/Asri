/**
 * Flattens a nested array into a single-level array.
 * @param {Array} array - The array to flatten.
 * @returns {Array} - The new flattened array.
 */
window.flattenArray$ = array => 
  array.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flattenArray$(curr) : curr), []);
