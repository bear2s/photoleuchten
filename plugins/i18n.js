import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '~store'

Vue.use(VueI18n)

export default new VueI18n({
  locale: store.state.locale,
  fallbackLocale: 'de',
  messages: {
    'en': require('~/locales/en.json'),
    'de': require('~/locales/de.json')
  }
})
