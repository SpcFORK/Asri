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