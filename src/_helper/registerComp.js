/**
 * Register a component in the global Components object.
 * @param {Object} _ - The component to register.
 */
export let registerComp = _ => {
  let
    n = _.name || _.constructor.name,
    err = e_ => (
      console.warn(`[WARN] Component ${n} already exists.`),
      'exists'
    )

  return (
    (!window[n]) && Object.assign((window.Components ||= {}), {
      [n]: _
    })
  ) ?? err()
}

export default {
  registerComp
}