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
    transition: 'slide-left',
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'de')
    },
    components: {
      AboutContent
    },
    watch: {
      '$store.state.locale' (val) {
        if (val === 'en') this.$router.push('about')
      }
    }
  }
</script>
