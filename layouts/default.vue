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
            :to="$store.state.locale === 'de' ? '/' : '/en'"
            class="logo-link">
            <pl-img
              file-name="logo"
              alt="Logo photoleuchten.com"
              img-type="png"
              sizes="252px"
              height="45"
              width="248"
              class="nav-logo pt-1" />
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
          :to="$store.state.locale === 'de' ? '/' : '/en'"
          class="logo-link">
          <pl-img
            alt="photoleuchten.com Logo"
            title="photoleuchten.com"
            file-name="logo"
            img-type="png"
            sizes="252px"
            height="45"
            width="248"
            class="nav-logo hidden-sm-and-down pt-1" />
          <img
            alt="photoleuchten.com Logo"
            title="photoleuchten.com"
            src="~/assets/img/logo_small.png"
            class="pt-2 hidden-md-and-up logo"
            height="85"
            width="85">
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />

      <pl-top-toolbar-items :products="products" />

      <v-btn
        flat
        href="https://www.etsy.com/shop/photoleuchten"
        target="_blank"
        icon
        class="shop-link">
        <pl-img
          icon
          file-name="shopping_cart"
          :alt="$store.state.locale === 'de' ? 'Zum pl Shop bei Etsy' : 'Etsy pl shop'"
          img-type="png"
          sizes="24px"
          height="24"
          width="24"
          class="shopping-cart-icon pt-1" />
      </v-btn>

      <language-select />

    </v-toolbar>

    <v-content>
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

  export default {
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

<style>
  .nav-logo, .logo {
    height: 45px!important;
    width: auto!important;
  }

  .shopping-cart-icon {
    height: 24px!important;
    width: auto!important;
  }
</style>
