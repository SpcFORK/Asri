/**
 * Deep clones an object using JSON serialization.
 * @param {Object} obj - The object to clone.
 * @returns {Object} A deep clone of the original object.
 */
window.deepClone$ = obj => JSON.parse(JSON.stringify(obj));
