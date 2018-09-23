import Vue from 'vue'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VToolbar,
  VMenu,
  VTooltip,
  VTextField,
  VTextarea,
  VForm,
  VGrid,
  VDialog,
  VSubHeader,
  transitions
} from 'vuetify'

import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VToolbar,
    VMenu,
    VTooltip,
    VTextField,
    VForm,
    VGrid,
    VDialog,
    VSubHeader,
    VTextarea,
    transitions
  }
})
