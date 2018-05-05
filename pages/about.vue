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
    name: 'About',
    transition: 'slide-left',
    components: {
      AboutContent
    },
    asyncData ({store}) {
      return store.dispatch('setLanguageKey', 'en')
    },
    watch: {
      '$store.state.locale' (val) {
        if (val === 'de') this.$router.push('ueber')
      }
    }
  }
</script>
