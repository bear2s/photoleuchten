<template>
  <round-objects/>
</template>
<script>
  import RoundObjects from '../../components/partials/RoundObjects'

  export default {
    components: { RoundObjects },
    transition: 'slide-left',
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'de')
    },
    watch: {
      '$store.state.locale' (val) {
        if (val === 'en') this.$router.push({ name: 'products-round-objects' })
      }
    }
  }
</script>
