import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '~store'

Vue.use(VueI18n)

console.log('here') // eslint-disable-line
export default new VueI18n({
  locale: store.state.locale,
  fallbackLocale: 'en',
  messages: {
    'en': require('~/locales/en.json'),
    'de': require('~/locales/de.json')
  }
})
