import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify, {
  theme: {
    primary: '#FF9900',
    accent: '#FFFFFF',
    secondary: '#424242',
    info: '#FFFFFF',
    warning: '#ffb300',
    error: '#B71C1C',
    success: '#2E7D32'
  },
  minifyTheme: function (css) {
    return process.env.NODE_ENV === 'production'
      ? css.replace(/[\s|\r\n|\r|\n]/g, '')
      : css
  }
})
