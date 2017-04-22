import { parse, pick } from 'accept-language-parser'

export default function (context) {
  if (!context.isServer) {
    return
  }
  const req = context.req
  const acceptLangHeader = req.headers && req.headers['accept-language']

  context.i18n.locale = context.store.commit('SET_LANG', pick(['en', 'de'], parse(acceptLangHeader)))
  // context.i18n.locale = 'de'
}
