<template>
  <v-layout
    row
    wrap>
    <no-ssr>
      <v-flex
        v-if="$vuetify.breakpoint.smAndDown"
        xs12 class="text-xs-center headline-container">
        <h1>
          WALL LIGHTS - LIGHT OBJECTS - LIGHT BOXES - ILLUMINATED PHOTOS & PAPERS
        </h1>
        <div style="position: absolute" class="headline-container-inner">
          <h2 class="white--text px-3">
            Simple and beautiful design
          </h2>
        </div>
        <pl-img
          :quality="85"
          file-name="t0"
          img-type="jpg"
          sizes="100vw" />
      </v-flex>
    </no-ssr>
    <v-flex
      xs12
      class="text-xs-center">
      <h3>Welcome to Photoleuchten!</h3>
      <div class="text-xs-center">
        <p>
          Here you will find handcrafted lights made with love: wall lights, light objects, light boxes with photographs
          that look great unlit and get a whole new look when illuminated.</p>
        <p>
          Due to their different motifs, light colors and strengths, the luminaries fit into many living areas and bring
          a new atmosphere into a room.
        </p>
        <p>
          If you are looking for an individual piece for residential or business premises, which brings a special,
          beautiful light in a room, you are in the right place.
        </p>
        <p>
          The wall lights and light objects come in different formats and sizes. All lights are equipped with
          energy-saving LED technology.
        </p>
        <p>
          Special designs with your own motif or in certain sizes are possible at any time.
        </p>
      </div>
    </v-flex>
    <collection />
    <v-flex xs12 class="text-xs-center pb-5">
      <v-btn large outline to="/en/contact">
        Contact
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import Collection from '../../components/partials/Collection'

  export default {
    // layout: 'home',
    components: { Collection },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Photoleuchten.com  ▶ | Handcrafted light objects, illuminated photographs',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en' }
        ]
      }
    },
    transition: 'slide-left',
    name: 'AppEn',
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'en')
    }
  }
</script>
