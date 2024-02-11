import { registerComp } from '/src/_helper/registerComp.js'

/**
 * Represents a page component with methods for styling and viewport calculations.
 */
export class Page {

  /**
   * The visual viewport of the page.
   */
  static vv = visualViewport
  vv = Page.vv

  /**
   * Default styles to center an element in the page.
   */
  static centerStyle = {
    position: 'absolute',
    top: `${this.vv.height / 2}px`,
    left: `${this.vv.width / 2}px`,
    transform: 'translate(-50%, -50%)',
  }
  centerStyle = Page.centerStyle;

  /**
   * Get the viewport height.
   * @returns {number} The height of the viewport.
   */
  static vv_h = _ => this.vv.height;
  vv_h = Page.vv_h

  /**
   * Get half of the viewport height.
   * @returns {number} Half of the viewport height.
   */
  static vv_hhalf = _ => (this.vv.height / 2)
  vv_hhalf = Page.vv_hhalf

  /**
   * Scale from the bottom of the viewport by a certain offset.
   * @param {number} [offset=0] - The offset to scale by.
   * @returns {number} The scaled value.
   */
  static scaleBottomBy_vvh = (offset = 0) => (this.vv_h() * offset)
  scaleBottomBy_vvh = Page.scaleBottomBy_vvh

  /**
   * Calculate a position based on half the viewport height and a scaling offset.
   * @param {number} [offset=0] - The offset to apply to the calculation.
   * @returns {number} The calculated position.
   */
  static screenify = (offset = 0) => this.vv_hhalf() + this.scaleBottomBy_vvh(offset)
  screenify = Page.screenify

  /**
   * Apply centered styling to an element with an optional offset.
   * @param {HTMLElement} el - The element to style.
   * @param {number} [offset=0] - The offset to apply to the top position.
   */
  static centerStyle$ = (el, offset = 0) => el.style$({
    ...this.centerStyle,
    top: `${screenify(offset)}vh`
  })
  centerStyle$ = Page.centerStyle$;

  // ---

  container = section()

  /**
   * Create a stretchable page container.
   *
   * This container scales to a proper size based on the viewport height
   * and a multiple of the entry height.
   *
   * @param {number} len - The length to scale the container by.
   * @param {SushaWrapper} entry - The entry point for appending the container.
   */
  constructor(len = 0, entry) {
    this.container.style$({
      position: 'relative',
      width: '100%',
      height: `${this.vv_h()}px`,
      // overflow: 'hidden',
    })

    if (len > 0) {
      this.container.style$({
        height: `${this.scaleBottomBy_vvh(len + 1)}px`
      })
    }

    if (entry) {
      entry.append(this.container.get$())
    }
  }

}

registerComp(Page)

export default {
  Page
}