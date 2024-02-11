export const stringInvoke = fn => `(${fn})()`

Object.assign(window, {
  stringInvoke
})

export default {
  stringInvoke
}