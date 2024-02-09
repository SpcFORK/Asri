window.SushaDropdown = window.SushaWrapper.SushaDropdown = class SushaDropdown {
  /**
   * Represents a dropdown component.
   */
  SushaDropdown = SushaDropdown

  /**
   * The main container element for the dropdown.
   */
  main = div()

  /**
   * The state of the dropdown, true if open.
   */
  state = false;

  /**
   * Constructs a SushaDropdown instance.
   *
   * @param {HTMLElement} top - The top element of the dropdown.
   * @param {...HTMLElement} inners - The inner elements of the dropdown.
   */
  constructor(top, ...inners) {
    this.topHeight = top.offsetHeight;
    this.innersHeight = inners.map(i => i.offsetHeight).reduce((a, b) => a + b, 0);
    this.top = div(top);
    this.inners = div(...inners);

    this.top.on$('click', () => this.state ? this.close() : this.open());

    let singleFlag = inners.length == 1;

    // ---

    {
      if (!singleFlag) {
        this.main.appendChildren$(
          this.top.get$(),
          this.inners.get$()
        )
      }

      else {
        let listElements = []

        for (let inner of inners) {
          // Create a list element for each inner content
          let listElement = div()
          listElement.append$(inner.get$())
          listElements.push(listElement)
        }

        this.inners = div(...listElements);

        this.main.appendChildren$(
          this.top.get$(),
          this.inners.get$()
        )
      }
    }

    // ---

    this.close();
  }

  /**
   * Opens the dropdown.
   */
  open() {
    // Open the dropdown
    this.inners.style$({
      display: 'block',
      height: this.innersHeight + 'px',
      marginTop: this.topHeight + 'px'
    })

    this.state = true;
  }

  /**
   * Closes the dropdown.
   */
  close() {
    // Close the dropdown
    this.inners.style$({
      display: 'none',
      height: 0,
      marginTop: 0
    })

    this.state = false;
  }
}