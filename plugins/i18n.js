import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocales from '../locales/en'
import deLocales from '../locales/de'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': enLocales,
      'de': deLocales
    },
    silentTranslationWarn: true
  })

  return app.i18n
}
