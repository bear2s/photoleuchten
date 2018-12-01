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
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Quadratische Leuchten | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'de'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/quadratische-objekte' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/square-objects' }
        ]
      }
    }
  }
</script>
