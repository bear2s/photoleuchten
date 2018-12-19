<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :permanent="false"
      persistent
      fixed
      temporary
      app>

      <v-toolbar
        flat
        app>
        <v-toolbar-title>
          <nuxt-link
            :to="isDe ? '/' : '/en'"
            class="logo-link">
            <pl-img
              file-name="logo"
              alt="Logo photoleuchten.com"
              img-type="png"
              sizes="252px"
              height="40px"
              width="auto"
              class="pt-1" />
          </nuxt-link>
        </v-toolbar-title>
      </v-toolbar>

      <sidebar-content
        ref="sidebar"
        :items="items"
        :products="products" />

    </v-navigation-drawer>

    <v-toolbar
      scroll-off-screen
      fixed
      app>
      <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click="drawer = !drawer">
        <img
          src="~/assets/img/menu.png"
          width="24px">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <nuxt-link
          :to="isDe ? '/' : '/en'"
          class="logo-link">
          <pl-img
            alt="photoleuchten.com Logo"
            title="photoleuchten.com"
            file-name="logo"
            img-type="png"
            sizes="252px"
            height="40px"
            width="auto"
            class="hidden-sm-and-down pt-1" />
          <img
            alt="photoleuchten.com Logo"
            title="photoleuchten.com"
            src="~/assets/img/logo_small.png"
            class="pt-2 hidden-md-and-up"
            height="40px"
            width="auto">
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />

      <pl-top-toolbar-items :products="products" />

      <language-select />

    </v-toolbar>

    <v-content>
      <no-ssr>
        <home-parallax-section />
      </no-ssr>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <pl-footer />

  </v-app>
</template>

<script>
  import PlFooter from '../components/PlFooter.vue'
  import PlTopToolbarItems from '../components/PlTopToolbarItems.vue'
  import LanguageSelect from '../components/LanguageSelect.vue'
  import SidebarContent from '../components/SidebarContent.vue'
  import Parallax from 'vue-parallaxy'
  import HomeParallaxSection from '../components/partials/HomeParallaxSection'

  export default {
    name: 'Home',
    head () {
      return {
        title: this.isDe
          ? 'Lichtobjekte - Leuchtkästen - beleuchtete Fotos und Papiere'
          : 'Light objects - Light boxes - illuminated Photos and Papers',
        htmlAttrs: {
          lang: this.$store.state.locale || 'de'
        },
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.isDe
            ? `Handgefertigte Lichtobjekte, illuminierte Rahmen, Fotos mit Hintergrundbeleuchtung, Papiere mit Hintergrundbeleuchtung, Rahmen in verschiedenen Formen und Größen.`
            : `Handcrafted light objects, illuminated frames, photos with background lighting, papers with background lighting, frames various shapes and sizes.`
        }]
      }
    },
    components: {
      HomeParallaxSection,
      Parallax,
      PlFooter,
      PlTopToolbarItems,
      SidebarContent,
      LanguageSelect
    },
    data () {
      return {
        drawer: false
      }
    },
    computed: {
      items () {
        return [
          { icon: 'info', title: this.$t('links.about'), to: this.isDe ? '/ueber' : '/en/about' },
          { icon: 'mail', title: this.$t('links.contact'), to: this.isDe ? '/kontakt' : '/en/contact' }
        ]
      },
      products () {
        return [
          {
            title: this.$t('products.quad.headline'),
            to: this.isDe
              ? '/produkte/leuchtkaesten'
              : '/en/products/lightboxes'
          },
          {
            title: this.$t('products.wall_lights.headline'),
            to: this.isDe
              ? '/produkte/wandleuchten'
              : '/en/products/wall-lights'
          },
          {
            title: this.$t('products.lightobjects.headline'),
            to: this.isDe
              ? '/produkte/lichtobjekte'
              : '/en/products/light-objects'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
