<template>
  <square-objects/>
</template>

<script>
  import SquareObjects from '../../components/partials/SquareObjects'

  export default {
    transition: 'slide-left',
    components: {SquareObjects},
    asyncData ({store, route}) {
      return store.dispatch('setLanguageKey', 'en')
    },
    watch: {
      '$store.state.locale' (val) {
        if (val === 'de') this.$router.push({name: 'produkte-quadratische-objekte'})
      }
    }
  }
</script>
