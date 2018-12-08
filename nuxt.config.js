import nodeExternals from 'webpack-node-externals'

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  head: {
    title: 'photoleuchten.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'photoleuchten lichtobjekte' },
      {
        hid: 'robots',
        name: 'robots',
        content: process.env.NODE_ENV === 'production' ? 'index, follow' : 'noindex, nofollow'
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  generate: {
    dir: 'docs',
    subFolders: false
  },
  modern: process.env.NODE_ENV === 'production' ? 'client' : false,
  render: {
    resourceHints: false,
    static: {
      maxAge: '7d'
    }
  },
  css: [
    {
      src: '~/assets/style/app.styl',
      lang: 'styl'
    }
  ],
  modules: ['@nuxtjs/google-gtag', 'nuxt-trailingslash-module', '@nuxtjs/sitemap'],
  'google-gtag': {
    id: 'UA-98426053-1'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://photoleuchten.com',
    cacheTime: 1000 * 60 * 15,
    generate: true,
    exclude: [
      '/', 'https://photoleuchten.com/'
    ],
    routes: [
      {
        url: 'https://photoleuchten.com',
        priority: 1
      }
    ]
  },
  /*
   ** Plugins
   */
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/vueSetup.js',
    '~/plugins/i18n.js'
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    transpile: [/^vuetify/],
    plugins: [new VuetifyLoaderPlugin()],
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[name].[contenthash].css'
    },
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    },
    optimization: {
      runtimeChunk: false,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /node_modules[\\/](vue|vue-loader|vue-router|vuex|vue-meta|core-js|@babel\/runtime|axios|webpack|setimmediate|timers-browserify|process|regenerator-runtime|cookie|js-cookie|is-buffer|dotprop|vue-i18n|accept-language-parser|slugify|vue-ls|eventemitter3|lodash.debounce|nuxt\.js)[\\/]/,
            chunks: 'all',
            priority: 10,
            name: true
          }
        }
      }
    },
    /*
     ** Run eslint on save
     */
    extend (config, ctx) {
      if (process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
