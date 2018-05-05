<template>
  <square-objects/>
</template>

<script>
  import SquareObjects from '../../components/partials/SquareObjects'

  export default {
    transition: 'slide-left',
    components: {SquareObjects},
    asyncData ({store}) {
      return store.dispatch('setLanguageKey', 'de')
    },
    watch: {
      '$store.state.locale' (val) {
        if (val === 'en') this.$router.push({name: 'products-square-objects'})
      }
    }
  }
</script>
