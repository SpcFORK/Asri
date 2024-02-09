window.CHUBtoSusha = text => {
  const p = tag('template')

  p.html$(CHUBparse(text))
  let c = p.get$().content.children

  if (!c) return text;

  return new SushaWrapper(c[0])
}