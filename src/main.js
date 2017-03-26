import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
