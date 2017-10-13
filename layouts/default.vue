<template>
  <v-app dark>

    <v-navigation-drawer :persistent="true"
                         :permanent="false"
                         :temporary="true"
                         v-model="drawer"
                         app>

      <v-toolbar flat app>
        <v-toolbar-title>
          <nuxt-link to="/" class="logo-link">
            <img src="~/assets/img/logo.png" class="pt-2" height="40px" width="auto"/>
          </nuxt-link>
        </v-toolbar-title>
      </v-toolbar>

      <sidebar-content
        ref="sidebar"
        :items="items"
        :products="products"/>

    </v-navigation-drawer>

    <v-toolbar fixed app>
      <v-toolbar-side-icon class="hidden-sm-and-up"
                           @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <nuxt-link to="/" class="logo-link">
          <img src="~/assets/img/logo.png" class="pt-2 hidden-xs-only" height="40px" width="auto"/>
          <img src="~/assets/img/logo_small.png" class="pt-2 hidden-sm-and-up" height="40px" width="auto"/>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <pl-top-toolbar-items :products="products"></pl-top-toolbar-items>

      <language-select></language-select>

    </v-toolbar>

    <main>
      <v-content>
        <v-container fluid>
          <nuxt/>
        </v-container>
      </v-content>
    </main>

    <pl-footer/>

  </v-app>
</template>

<script>
  import PlFooter from '../components/PlFooter.vue'
  import PlTopToolbarItems from '../components/PlTopToolbarItems.vue'
  import LanguageSelect from '../components/LanguageSelect.vue'
  import SidebarContent from '../components/SidebarContent.vue'

  export default {
    components: {
      PlFooter, PlTopToolbarItems, SidebarContent, LanguageSelect
    },
    data () {
      return {
        drawer: false
      }
    },
    computed: {
      items () {
        return [
          {icon: 'info', title: this.$t('links.about'), to: '/about'},
          {icon: 'mail', title: this.$t('links.contact'), to: '/contact'}
        ]
      },
      products () {
        return [
          {title: this.$t('products.round.headline'), to: '/products/round-objects'},
          {title: this.$t('products.quad.headline'), to: '/products/square-objects'},
          {title: this.$t('products.framed.headline'), to: '/products/framed-objects'}
        ]
      }
    }
  }
</script>

