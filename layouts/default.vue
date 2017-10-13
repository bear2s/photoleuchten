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

    <toolbar-top
      :products="products"
      @toggleSidebar="drawer = !drawer"/>

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
  import ToolbarTop from '../components/ToolbarTop.vue'
  import SidebarContent from '../components/SidebarContent.vue'

  export default {
    components: {
      PlFooter, ToolbarTop, SidebarContent
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

