window.flattenArray$ = array => 
  array.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr), []);
