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
    name: 'Contact',
    components: {ContactForm},
    transition: 'slide-left',
    asyncData ({store, route}) {
      return store.dispatch('setLanguageKey', 'en')
    },
    watch: {
      '$store.state.locale' (val) {
        if (val === 'de') this.$router.push('kontakt')
      }
    }
  }
</script>
