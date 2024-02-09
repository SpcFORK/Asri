/**
 * Get an array of unique values from the given array.
 * @param {Array} array - The array to process.
 * @returns {Array} An array of unique values.
 */
window.uniqueValues$ = array => [...new Set(array)]
