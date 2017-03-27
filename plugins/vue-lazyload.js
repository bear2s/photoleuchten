import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('../assets/img/loading-spin.svg')
})
