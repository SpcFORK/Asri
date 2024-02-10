class Page {
  
  static vv = visualViewport
  vv = Page.vv

  static centerStyle = {
    position: 'absolute',
    top: `${this.vv.height / 2}px`,
    left: `${this.vv.width / 2}px`,
    transform: 'translate(-50%, -50%)',
  }
  centerStyle = Page.centerStyle;

  static centerStyle$ = (el, offset = 0) => el.style$({
    ...this.centerStyle,
    top: `${this.vv.height / 2 + offset}px`
  })
  centerStyle$ = Page.centerStyle$;

  
  
}