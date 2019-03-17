export const state = () => ({
  locales: ['en', 'de'],
  locale: 'en'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export const actions = {
  setLanguageKey ({ commit }, payload) {
    commit('SET_LANG', payload)
    return Promise.resolve(true)
  }
}
