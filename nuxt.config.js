import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
// import { join } from 'path'

// const resolve = (dir) => join(__dirname, dir)

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'photoleuchten.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'photoleuchten lichtobjekte' },
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
    dir: 'docs'
  },
  render: {
    resourceHints: false
  },
  router: {
    // not working with generate / static site
    // middleware: ['lang']
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://photoleuchten.com',
    cacheTime: 1000 * 60 * 15,
    generate: true, // Enable me when using nuxt generate
    priority: 0.5
  },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '~/assets/style/app.styl',
      lang: 'styl'
    }
  ],
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
    extractCSS: false,
    babel: {
      plugins: [
        ['transform-imports', {
          'vuetify': {
            'transform': 'vuetify/es5/components/${member}', // eslint-disable-line
            'preventFullImport': true
          }
        }]
      ]
    },
    /*
     ** Run eslint on save
     */
    extend (config, ctx) {
      if (!ctx.dev) {
        config.plugins.push(
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 15
          }),
          new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10000
          })
        )
      }

      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
      // config.module.rules.forEach(rule => {
      //   if (rule.test.toString() === '/\\.styl(us)?$/') {
      //     rule.oneOf.forEach(one => {
      //       one.use && one.use.push({
      //         loader: 'vuetify-loader',
      //         options: {
      //           theme: resolve('./assets/style/theme.styl')
      //         }
      //       })
      //     })
      //   }
      // })
    }
  }
}
