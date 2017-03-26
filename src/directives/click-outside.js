function load (cb) {
  if (document.readyState === 'complete') {
    return setTimeout(cb, 0)
  }

  if (document.readyState === 'interactive') {
    return setTimeout(() => load(cb), 150)
  }

  document.addEventListener('DOMContentLoaded', cb)
}

function directive (e, el, binding, v) {
  let cb = () => true

  if (binding.value) {
    cb = binding.value
  }
  if ((e && e.target) &&
    (e.target !== el && !el.contains(e.target)) &&
    cb(e)
  ) {
    v.context.isActive = false
  }
}

export default {
  bind (el, binding, v) {
    load(() => {
      const click = e => directive(e, el, binding, v)
      document.body.addEventListener('click', click, false)
      el._clickOutside = click
    })
  },

  unbind (el) {
    document.body.removeEventListener('click', el._clickOutside, false)
  }
}
