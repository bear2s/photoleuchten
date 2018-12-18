<template>
  <square-objects/>
</template>

<script>
  import SquareObjects from '../../components/partials/SquareObjects'

  export default {
    name: 'Leuchtkaesten',
    transition: 'slide-left',
    components: { SquareObjects },
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'de')
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Photo-Leuchtkästen | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'de'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/leuchtkaesten' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/light-boxes' }
        ]
      }
    }
  }
</script>
