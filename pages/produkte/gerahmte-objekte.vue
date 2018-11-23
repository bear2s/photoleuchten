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
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'de')
    },
    head: {
      title: 'Gerahmte Leuchten | Photoleuchten.com  ▶',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [],
      link: [
        { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/gerahmte-objekte' },
        { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/framed-objects' }
      ]
    }
  }
</script>
