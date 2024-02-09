/**
 * Loads a module and returns its default export.
 * If the default export is a function, it is invoked,
 * and if the result is an instance of SushaWrapper,
 * its get$ method is returned.
 *
 * @param {string} [i=''] - The module to load.
 * @returns {Promise<any>} The default export of the module or the result of invoking it.
 */
window.default$ = window.SushaWrapper.default$ = async function(i = '') {
  let m = (await import(i))?.default;

  switch (typeof m) {
    case 'function':
      m = m();
      if (m instanceof SushaWrapper) {
        return m.get$()
      }

    default:
      return m;
  }
}