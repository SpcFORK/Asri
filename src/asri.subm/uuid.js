/**
 * Generates a pseudo-random UUID (Universally Unique Identifier).
 * @returns {string} A string representing the UUID.
 */
window.generateUUID$ = _ => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(/[xy]/g, c => {
    const 
      r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8)
    
    return v.toString(16);
  });
