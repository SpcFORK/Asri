/**
 * Merges multiple objects into a single object.
 * Objects are merged from left to right, with the rightmost object's properties
 * overwriting those of the previous ones if they exist.
 * Nested objects are merged recursively.
 *
 * @param {...Object} objects - An array of objects to merge.
 * @returns {Object} The merged object.
 */
window.mergeObjects$ = (...objects) => objects.reduce((merged, obj) => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      merged[key] = mergeObjects$(merged[key] || {}, obj[key]);
    } else {
      merged[key] = obj[key];
    }
  });
  return merged;
}, {});