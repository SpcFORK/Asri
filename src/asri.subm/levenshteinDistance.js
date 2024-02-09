/**
 * Calculate the Levenshtein distance between two strings.
 * @param {string} s1 - The first string.
 * @param {string} s2 - The second string.
 * @returns {number} The Levenshtein distance.
 */
window.levenshteinDistance$ = (s1, s2) => {
  const 
    len1 = s1.length,
    len2 = s2.length,
    matrix = Array.from(
      { length: len1 + 1 },
      (_, i) => Array.from(
        { length: len2 + 1 },
        (_, j) => (i === 0 ? j : (j === 0 ? i : 0))
      )
    );

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[len1][len2];
};
