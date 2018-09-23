import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      locales: ['en', 'de'],
      locale: 'en'
    },
    getters: {},
    mutations: {
      SET_LANG (state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
      }
    },
    actions: {
      setLanguageKey ({ commit }, payload) {
        commit('SET_LANG', payload)
        return Promise.resolve(true)
      }
    }
  })
}
