/**
 * Performs a binary search on a sorted array to find the index of a target element.
 * @param {Array} array - The sorted array to search within.
 * @param {*} target - The element to search for.
 * @returns {number} The index of the target element if found, otherwise -1.
 */
window.binarySearch$ = (array, target) => {
  let 
    left = 0,
    right = array.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } 
    
    else if (array[mid] < target) {
      left = mid + 1;
    } 
    
    else {
      right = mid - 1;
    }
  }
  
  return -1;
};
