<template>
  <v-layout row>
    <v-flex
      xs12
      class="text-xs-center text-xs-justify">
      <h1 class="text-xs-center">{{ $t('coming_soon') }}</h1>
      <pl-img
        blur-up
        file-name="b0"
        img-type="jpg"
        sizes="100vw"/>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    transition: 'slide-left',
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'en')
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Framed light objects | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/gerahmte-objekte' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/framed-objects' }
        ]
      }
    }
  }
</script>
