/** This is obsolete, unless you want a ton of pre-genned HTML Lorems */
window.generateLoremIpsum$ = async (numParagraphs) => {
  const response = await fetch(`https://loripsum.net/api/${numParagraphs}`);
  const data = await response.text();
  return data;
};
