<template>
  <v-layout row>
    <v-flex
      xs12
      class="text-xs-center text-xs-justify">
      <h1 class="text-xs-center">{{ $t('coming_soon') }}</h1>
      <pl-img
        blur-up
        file-name="b0"
        img-type="jpg"
        sizes="100vw"/>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    transition: 'slide-left',
    asyncData ({store}) {
      return store.dispatch('setLanguageKey', 'en')
    },
    watch: {
      '$store.state.locale' (val) {
        if (val === 'de') this.$router.push({name: 'produkte-gerahmte-objekte'})
      }
    }
  }
</script>
