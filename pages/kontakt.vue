<template>
  <v-layout row>
    <v-flex xs-12>
      <contact-form />
    </v-flex>
  </v-layout>
</template>

<script>
  import ContactForm from '../components/partials/ContactForm'

  export default {
    name: 'Kontakt',
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Kontakt | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'de'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/kontakt' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/contact' }
        ]
      }
    },
    components: { ContactForm },
    transition: 'slide-left',
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'de')
    }
  }
</script>
