/**
 * Splits an array into chunks of a specified size.
 * @param {Array} array - The array to be chunked.
 * @param {number} size - The size of each chunk.
 * @returns {Array[]} An array containing the chunked arrays.
 */
window.chunkArray$ = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};
