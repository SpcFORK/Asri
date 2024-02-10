window.CHUBtoHTMLNodes = text => {
  const p = tag('template')

  p.html$(CHUBparse(text))
  let c = p.get$().content.children

  if (!c) return text;
  return c[0];
}

window.CHUBtoSusha = text => {
  return new SushaWrapper(CHUBtoHTMLNodes(text))
}