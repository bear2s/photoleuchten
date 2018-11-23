<template>
  <round-objects/>
</template>
<script>
  import RoundObjects from '../../components/partials/RoundObjects'

  export default {
    head: {
      title: 'Runde Leuchten | Photoleuchten.com  ▶',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [],
      link: [
        { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/runde-objekte' },
        { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/round-objects' }
      ]
    },
    components: { RoundObjects },
    transition: 'slide-left',
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'de')
    }
  }
</script>
