<template>
  <round-objects/>
</template>
<script>
  import RoundObjects from '../../components/partials/RoundObjects'

  export default {
    components: {RoundObjects},
    transition: 'slide-left',
    asyncData ({store}) {
      return store.dispatch('setLanguageKey', 'en')
    },
    watch: {
      '$store.state.locale' (val) {
        if (val === 'de') this.$router.push({name: 'produkte-runde-objekte'})
      }
    }
  }
</script>
