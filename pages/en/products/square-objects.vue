<template>
  <square-objects/>
</template>

<script>
  import SquareObjects from '../../../components/partials/SquareObjects'

  export default {
    transition: 'slide-left',
    components: { SquareObjects },
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'en')
    },
    head: {
      title: 'Square light objects | Photoleuchten.com  ▶',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [],
      link: [
        { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/quadratische-objekte' },
        { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/square-objects' }
      ]
    }
  }
</script>
