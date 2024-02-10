window.CHUBtoHTMLNodes = text => {
  const p = tag('template')

  p.html$(CHUBparse(text))
  let c = p.get$().content.children

  if (!c) return text;
  return [c[0].tagName, c[0].children];
}

window.CHUBtoSusha = text => {
  let n_ = CHUBtoHTMLNodes(text)
  return new tag(n_[0], ...n_[1])
}