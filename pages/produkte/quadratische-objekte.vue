<template>
  <square-objects/>
</template>

<script>
  import SquareObjects from '../../components/partials/SquareObjects'

  export default {
    name: 'QuadratischeObjekte',
    transition: 'slide-left',
    components: { SquareObjects },
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'de')
    },
    head: {
      title: 'Quadratische Leuchten | Photoleuchten.com  ▶',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [],
      link: [
        { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/quadratische-objekte' },
        { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/square-objects' }
      ]
    }
  }
</script>
