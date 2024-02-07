window.typeThis$ = val =>
  Array.isArray(val)
    ? "Array"
    : val?.constructor
      ? val.constructor.name
      : typeof val