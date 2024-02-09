/**
 * Shuffles the elements of the given array in place.
 * 
 * @param {Array} array - The array to shuffle.
 * @return {Array} The shuffled array.
 */
window.shuffleArray$ = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};