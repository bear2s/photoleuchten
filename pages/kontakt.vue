<template>
  <v-layout row>
    <v-flex xs-12>
      <contact-form/>
    </v-flex>
  </v-layout>
</template>

<script>
  import ContactForm from '../components/partials/ContactForm'

  export default {
    name: 'Kontakt',
    head: {
      title: 'Kontakt | Photoleuchten.com  ▶',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [],
      link: [
        { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/kontakt' },
        { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/contact' }
      ]
    },
    components: { ContactForm },
    transition: 'slide-left',
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'de')
    }
  }
</script>
