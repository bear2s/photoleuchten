import { parse, pick } from 'accept-language-parser'

export default function ({app, store, isServer, req, hotReload, route}) {
  let langKey = ''
  if (hotReload || !isServer) return
  const acceptLangHeader = (req.headers && req.headers['accept-language']) || ''
  if (route.name.includes('produkte') || route.name.includes('kontakt')) {
    langKey = 'de'
  } else if (route.name.includes('products') || route.name.includes('contact')) {
    langKey = 'en'
  } else {
    langKey = pick(['en', 'de'], parse(acceptLangHeader))
  }
  store.dispatch('setLanguageKey', langKey)
  app.i18n.locale = store.state.locale
}
