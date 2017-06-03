import { parse, pick } from 'accept-language-parser'

export default function ({isServer, req, store, i18n}) {
  if (!isServer) {
    return
  }
  const acceptLangHeader = req.headers && req.headers['accept-language']

  console.log('---------------------->', acceptLangHeader) //eslint-disable-line

  store.commit('SET_LANG', pick(['en', 'de'], parse(acceptLangHeader)))
  i18n.locale = store.state.locale
}
