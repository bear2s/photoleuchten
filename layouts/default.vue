<template>
  <v-app dark>

    <v-navigation-drawer
      :permanent="false"
      v-model="drawer"
      persistent
      fixed
      temporary
      app>

      <v-toolbar
        flat
        app>
        <v-toolbar-title>
          <nuxt-link
            to="/"
            class="logo-link">
            <pl-img
              file-name="logo"
              img-type="png"
              sizes="252px"
              height="40px"
              width="auto"
              class="pt-1"/>
          </nuxt-link>
        </v-toolbar-title>
      </v-toolbar>

      <sidebar-content
        ref="sidebar"
        :items="items"
        :products="products"/>

    </v-navigation-drawer>

    <v-toolbar
      scroll-toolbar-off-screen
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
          to="/"
          class="logo-link">
          <pl-img
            file-name="logo"
            img-type="png"
            sizes="252px"
            height="40px"
            width="auto"
            class="hidden-sm-and-down pt-1"/>
          <img
            src="~/assets/img/logo_small.png"
            class="pt-2 hidden-md-and-up"
            height="40px"
            width="auto">
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer/>

      <pl-top-toolbar-items :products="products"/>

      <language-select/>

    </v-toolbar>

    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>

    <pl-footer/>

  </v-app>
</template>

<script>
  import PlFooter from '../components/PlFooter.vue'
  import PlTopToolbarItems from '../components/PlTopToolbarItems.vue'
  import LanguageSelect from '../components/LanguageSelect.vue'
  import SidebarContent from '../components/SidebarContent.vue'

  export default {
    head () {
      const isDe = this.$store.state.locale === 'de'

      return {
        title: isDe
          ? 'Lichtobjekte - Leuchtkästen - beleuchtete Fotos und Papiere'
          : 'Light Objects - Light Boxes - illuminated Photos and Papers',
        htmlAttrs: {
          lang: this.$store.state.locale
        },
        meta: [{
          hid: 'description',
          name: 'description',
          content: isDe
            ? `Handgefertigte Lichtobjekte, illuminierte Rahmen, Fotos mit Hintergrundbeleuchtung, Papiere mit Hintergrundbeleuchtung, Rahmen in verschiedenen Formen und Größen erhältlich, LED-Beleuchtung, individuelle Kundenanfertigung möglich`
            : `Handcrafted light objects, illuminated frames, photos with background lighting, papers with background lighting, frames available in various shapes and sizes, LED lighting, individual customer production possible`
        }, {
          hid: 'keywords',
          name: 'keywords',
          content: isDe
            ? 'Sylvia Bär, kunst, künstler, künstlerin, lichtobjekte, karlsruhe, handgefertigt, innenarchitektur, lichtsystem, design'
            : 'Sylvia Bär, art, artist, light objects, karlsruhe, handcrafted, interior design, light system, design'
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
      isDe () {
        return this.$store.state.locale === 'de'
      },
      items () {
        return [
          {icon: 'info', title: this.$t('links.about'), to: this.isDe ? '/ueber' : '/about'},
          {icon: 'mail', title: this.$t('links.contact'), to: this.isDe ? '/kontakt' : '/contact'}
        ]
      },
      products () {
        return [
          {
            title: this.$t('products.quad.headline'),
            to: this.isDe
              ? '/produkte/quadratische-objekte'
              : '/products/square-objects'
          },
          {
            title: this.$t('products.round.headline'),
            to: this.isDe
              ? '/produkte/runde-objekte'
              : '/products/round-objects'
          },
          {
            title: this.$t('products.framed.headline'),
            to: this.isDe
              ? '/produkte/gerahmte-objekte'
              : '/products/framed-objects'
          }
        ]
      }
    }
  }
</script>
