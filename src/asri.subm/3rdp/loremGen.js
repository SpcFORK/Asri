/**
 * Fetches and returns Lorem Ipsum text from loripsum.net.
 * @param {number} numParagraphs - The number of paragraphs to generate.
 * @returns {Promise<string>} A promise that resolves with the generated Lorem Ipsum text.
 */
window.generateLoremIpsum = async (numParagraphs) => {
  const response = await fetch(`https://loripsum.net/api/${numParagraphs}`);
  const data = await response.text();
  return data;
};
