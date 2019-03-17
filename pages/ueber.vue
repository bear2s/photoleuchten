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
    name: 'UeberPage',
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Ueber | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'de'
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Erfahre mehr über PHOTOLEUCHTEN. Werfe einen Blick in den Entwurfs- und Herstellungsprozess.'
          }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/ueber' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/about' }
        ]
      }
    },
    transition: 'slide-left',
    components: {
      AboutContent
    },
    async created () {
      return this.$store.dispatch('setLanguageKey', 'de')
    }
  }
</script>
