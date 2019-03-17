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
    name: 'AboutPage',
    transition: 'slide-left',
    components: {
      AboutContent
    },
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'en')
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'About | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Learn more about PHOTOLEUCHTEN. Take a look at the design and manufacturing process.'
        }],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/ueber' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/about' }
        ]
      }
    }
  }
</script>
