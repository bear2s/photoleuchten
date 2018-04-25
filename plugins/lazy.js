import 'lazysizes'

document.addEventListener('lazybeforeunveil', (e) => {
  const bg = e.target.getAttribute('data-bg')

  if (bg) {
    e.target.style.backgroundImage = bg
  }
});

(function (window, factory) {
  const globalInstall = function () {
    factory(window.lazySizes)
    window.removeEventListener('lazyunveilread', globalInstall, true)
  }

  factory = factory.bind(null, window, window.document)

  if (typeof module === 'object' && module.exports) {
    factory(require('lazysizes'))
  } else if (window.lazySizes) {
    globalInstall()
  } else {
    window.addEventListener('lazyunveilread', globalInstall, true)
  }
}(window, function (window, document, lazySizes) {
  'use strict'
  if (!window.addEventListener) { return }

  let rAF = window.requestAnimationFrame || setTimeout

  let addObserver = function () {
    let connect, disconnect, observer, connected
    let lsCfg = lazySizes.cfg
    let attributes = {'data-bgset': 1, 'data-include': 1, 'data-poster': 1, 'data-bg': 1, 'data-script': 1}
    let regClassTest = '(\\s|^)(' + lsCfg.loadedClass
    let docElem = document.documentElement

    let setClass = function (target) {
      rAF(function () {
        lazySizes.rC(target, lsCfg.loadedClass)
        if (lsCfg.unloadedClass) {
          lazySizes.rC(target, lsCfg.unloadedClass)
        }
        lazySizes.aC(target, lsCfg.lazyClass)
      })
    }

    let onMutation = function (mutations) {
      let i, len, mutation, target
      for (i = 0, len = mutations.length; i < len; i++) {
        mutation = mutations[i]
        target = mutation.target

        if (!target.getAttribute(mutation.attributeName)) { continue }

        if (target.localName === 'source' && target.parentNode) {
          target = target.parentNode.querySelector('img')
        }

        if (target && regClassTest.test(target.className)) {
          setClass(target)
        }
      }
    }

    if (lsCfg.unloadedClass) {
      regClassTest += '|' + lsCfg.unloadedClass
    }

    regClassTest += '|' + lsCfg.loadingClass + ')(\\s|$)'

    regClassTest = new RegExp(regClassTest)

    attributes[lsCfg.srcAttr] = 1
    attributes[lsCfg.srcsetAttr] = 1

    if (window.MutationObserver) {
      observer = new MutationObserver(onMutation)

      connect = function () {
        if (!connected) {
          connected = true
          observer.observe(docElem, {subtree: true, attributes: true, attributeFilter: Object.keys(attributes)})
        }
      }
      disconnect = function () {
        if (connected) {
          connected = false
          observer.disconnect()
        }
      }
    } else {
      docElem.addEventListener('DOMAttrModified', (function () {
        let runs
        let modifications = []
        let callMutations = function () {
          onMutation(modifications)
          modifications = []
          runs = false
        }
        return function (e) {
          if (connected && attributes[e.attrName] && e.newValue) {
            modifications.push({target: e.target, attributeName: e.attrName})
            if (!runs) {
              setTimeout(callMutations)
              runs = true
            }
          }
        }
      })(), true)

      connect = function () {
        connected = true
      }
      disconnect = function () {
        connected = false
      }
    }

    addEventListener('lazybeforeunveil', disconnect, true)
    addEventListener('lazybeforeunveil', connect)

    addEventListener('lazybeforesizes', disconnect, true)
    addEventListener('lazybeforesizes', connect)
    connect()

    removeEventListener('lazybeforeunveil', addObserver)
  }

  addEventListener('lazybeforeunveil', addObserver)
}))
