<template>
  <v-layout
    row
    wrap>
    <v-flex
      xs12
      class="text-xs-center headline-container">
      <div style="position: absolute" class="headline-container-inner">
        <h1 class="headline-1 px-2">
          WALL LIGHTS - LIGHT OBJECTS - LIGHT BOXES - ILLUMINATED PHOTOS & PAPERS
        </h1>
        <h2 class="white--text">
          Simple and beautiful design
        </h2>
      </div>
      <pl-img
        :quality="85"
        file-name="t0"
        img-type="jpg"
        sizes="100vw"/>
    </v-flex>
    <v-flex
      xs12
      class="text-xs-center">
      <h3>Welcome to Photoleuchten!</h3>
      <div class="text-xs-center">
        <p>
          Here you will find handcrafted lights made with love: wall lights, light objects, light boxes with photographs that look great unlit and get a whole new look when illuminated.</p>
        <p>
          Due to their different motifs, light colors and strengths, the luminaries fit into many living areas and bring a new atmosphere into a room.
        </p>
        <p>
          If you are looking for an individual piece for residential or business premises, which brings a special, beautiful light in a room, you are in the right place.
        </p>
        <p>
          Special designs with your own motif or in certain sizes are possible at any time.
        </p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    head: {
      title: 'Photoleuchten.com  ▶ | Handcrafted light objects, illuminated photographs',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [],
      link: [
        { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com' },
        { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en' }
      ]
    },
    transition: 'slide-left',
    name: 'AppEn',
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'en')
    }
  }
</script>

<style lang="stylus">
  .headline-container {
    position: relative;
  }
  .headline-container-inner {
    width: 100%;
    position: absolute;
    left: 0;
  }
  @media screen and (max-width: 500px) {
    .headline-1 {
      font-size: 22px;
    }
  }
</style>
