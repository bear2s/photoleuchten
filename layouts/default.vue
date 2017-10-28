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
            <pl-img fileName="logo"
                    img-type="png"
                    sizes="252px"
                    height="40px"
                    width="auto"
                    class="pt-1"></pl-img>
          </nuxt-link>
        </v-toolbar-title>
      </v-toolbar>

      <sidebar-content
        ref="sidebar"
        :items="items"
        :products="products"/>

    </v-navigation-drawer>

    <v-toolbar fixed app>
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-sm-and-up">
        <img src="~/assets/img/menu.png" width="24px"/>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <nuxt-link to="/" class="logo-link">
          <pl-img fileName="logo"
                  img-type="png"
                  sizes="252px"
                  height="40px"
                  width="auto"
                  class="hidden-xs-only pt-1"></pl-img>
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
            ? `handgefertigte Lichtobjekte, illuminierte Rahmen, Fotos mit Hintergrundbeleuchtung,
            Papiere mit Hintergrundbeleuchtung, Rahmen in verschiedenen Formen und Größen erhältlich,
            LED-Beleuchtung, individuelle Kundenanfertigung möglich`
            : `handcrafted light objects, illuminated frames, photos with background lighting,
            papers with background lighting, frames available in various shapes and sizes,
            LED lighting, individual customer production possible`
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
          {icon: 'info', title: this.$t('links.about'), to: this.isDe ? '/about' : '/ueber'},
          {icon: 'mail', title: this.$t('links.contact'), to: '/' + this.$t('links.contact')}
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

