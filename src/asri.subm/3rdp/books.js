window.searchBooks$ = async query => {
  const
    response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`),
    data = await response.json()
  
  return data.items;
};
