<template>
  <v-layout row>
    <v-flex xs12>
      <about-content />
    </v-flex>
  </v-layout>
</template>
<script>
  import AboutContent from '../components/partials/AboutContent'

  export default {
    name: 'Ueber',
    head: {
      title: 'Ueber | Photoleuchten.com  ▶',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [],
      link: [
        { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/ueber' },
        { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/about' }
      ]
    },
    transition: 'slide-left',
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'de')
    },
    components: {
      AboutContent
    }
  }
</script>
