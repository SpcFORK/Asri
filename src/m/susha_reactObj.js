function RJSX_createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function RJSX_createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object' ? child : RJSX_createTextElement(child)
      )
    }
  };
}

window.SushaToReact = SushaElement => {
  if (!SushaElement?.get$) {
    throw new Error('SushaElement must be an instance of SushaWrapper');
  }

  const HTMLnode_ = SushaElement.get$();

  if (!(HTMLnode_ instanceof HTMLElement)) {
    throw new Error('SushaElement must be an instance of HTMLElement');
  }

  function HTMLtoReact(HTMLnode = HTMLnode_) {
    let attrs = HTMLnode.attributes.toJSON();
    
    attrs.methods 
      && delete attrs.methods;
    
    const reformedAttrs = {
      className: HTMLnode.className,
      style: HTMLnode.style.cssText
    }
    
    const ReactNode_ = RJSX_createElement(
      HTMLnode.tagName.toLowerCase(),
      reformedAttrs,
      ...[...HTMLnode.children].map(child => HTMLtoReact(child))
    )
    
    // "Record the component responsible for creating this element."
    ReactNode_._owner = SushaElement;
    
    return ReactNode_;
  }

  return HTMLtoReact();
}