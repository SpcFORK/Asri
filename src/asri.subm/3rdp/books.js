/**
 * Asynchronously searches for books using the Google Books API.
 * @param {string} query - The search query for books.
 * @returns {Promise<Array>} A promise that resolves to an array of book items.
 */
window.searchBooks$ = async query => {
  const
    response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`),
    data = await response.json()
  
  return data.items;
};
