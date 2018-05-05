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
    components: {ContactForm},
    transition: 'slide-left',
    asyncData ({store, route}) {
      return store.dispatch('setLanguageKey', 'de')
    },
    watch: {
      '$store.state.locale' (val) {
        if (val === 'en') this.$router.push('contact')
      }
    }
  }
</script>
