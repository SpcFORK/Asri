/**
 * Get the type of the given value.
 * @param {*} val - The value to check.
 * @return {string} - The type of the value.
 */
window.typeThis$ = val =>
  Array.isArray(val)
    ? "Array"
    : val?.constructor
      ? val.constructor.name
      : typeof val;