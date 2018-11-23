<template>
  <v-layout row>
    <v-flex xs12>
      <about-content />
    </v-flex>
  </v-layout>
</template>
<script>
  import AboutContent from '../../components/partials/AboutContent'

  export default {
    name: 'About',
    transition: 'slide-left',
    components: {
      AboutContent
    },
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'en')
    },
    head: {
      title: 'About | Photoleuchten.com  ▶',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [],
      link: [
        { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/ueber' },
        { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/about' }
      ]
    }
  }
</script>
