<template>
  <round-objects/>
</template>
<script>
  import RoundObjects from '../../../components/partials/RoundObjects'

  export default {
    components: { RoundObjects },
    transition: 'slide-left',
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'en')
    },
    head: {
      title: 'Round light objects | Photoleuchten.com  ▶',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [],
      link: [
        { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/runde-objekte' },
        { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/round-objects' }
      ]
    }
  }
</script>
