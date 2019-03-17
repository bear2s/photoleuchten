<template>
  <v-layout
    row
    wrap>
    <v-flex
      xs12
      class="text-xs-center">
      <home-intro-inner :is-absolute="false" />
      <no-ssr>
        <home-parallax-section />
      </no-ssr>
      <h3 class="text-xs-center">Welcome to Photoleuchten!</h3>
      <div class="text-xs-center mt-3">
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
  import HomeIntroInner from '../../components/partials/HomeIntroInner'

  export default {
    name: 'AppEn',
    components: {
      HomeParallaxSection: () => import('../../components/partials/HomeParallaxSection'),
      Collection,
      HomeIntroInner
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Photoleuchten.com  ▶ | Handcrafted light objects, illuminated photographs',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Here you will find handcrafted art lights made with love. With LED lighting. For living room, bedroom, dining room, kitchen, ..., office and business premises.'
        }],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en' }
        ]
      }
    },
    transition: 'slide-left',
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'en')
    }
  }
</script>
