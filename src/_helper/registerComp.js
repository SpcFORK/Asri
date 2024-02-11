/**
 * Register a component in the global Components object.
 * @param {Object} _ - The component to register.
 */
export let registerComp = _ => Object.assign((window.Components ||= {}), {
  _
})

export default {
  registerComp
}