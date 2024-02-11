import { registerComp } from '/src/_helper/registerComp.js'

/**
 * No operation function.
 */
const noop = _ => { },

/**
 * Asynchronous no operation function.
 */
  Anoop = async _ => { },

/**
 * Dispatches a custom event on the provided element.
 *
 * @param {HTMLElement} el - The element on which to dispatch the event.
 * @param {string} eventName - The name of the event.
 * @param {Object} [data={}] - Additional data to pass with the event.
 * @returns {CustomEvent} The dispatched event.
 */
  qEvent = (el, eventName, data = {}) => {
    const event = new CustomEvent(eventName, {
      detail: {
        element: el,
        data
      },
      bubbles: true,
      cancelable: true
    })

    {
      (el?.get$
        ? el.get$()
        : el
      ).dispatchEvent(event)
    }

    return event
  }

/**
 * Starts a render loop for the given entry element.
 *
 * @async
 * @function RenderLoop
 * @param {HTMLElement} entry - The entry element to render.
 * @param {Function} [fn=Anoop] - The function to execute each frame.
 * @param {number} [delay=0] - Delay before each invocation of `fn`.
 * @returns {number} The requestAnimationFrame identifier for the render loop.
 */
export async function RenderLoop(entry, fn = Anoop, delay = 0) {
  let
    rAF_ = requestAnimationFrame,
    STOP = false,

    render = async _ => {
      await sleep(delay)

      const
        res = await fn?.({
          entry,
          rAF: rAF_,
          stop: _ => STOP = true
        })

      if (STOP) return;

      const numeric_ = rAF_(render)

      qEvent(entry, 'render', {
        ...res,
        numeric_: numeric_
      })
    }

  return rAF_(render)
}

/**
 * Creates a packRenderer function for the given element.
 *
 * @function packRenderer
 * @param {HTMLElement} element - The element for which to create the renderer.
 * @returns {Function} A function that starts a render loop when invoked.
 */
export const packRenderer = element => (
  (fn = Anoop, delay = 0) => {
    return RenderLoop(element, fn, delay)
  }
)

{
  [RenderLoop, packRenderer].map(registerComp)
}

export default {
  RenderLoop,
  packRenderer
}