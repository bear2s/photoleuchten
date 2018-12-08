<template>
  <framed-objects/>
</template>

<script>
  import FramedObjects from '../../components/partials/FramedObjects'

  export default {
    components: { FramedObjects },
    transition: 'slide-left',
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'de')
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Gerahmte Leuchten | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'de'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/gerahmte-objekte' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/framed-objects' }
        ]
      }
    }
  }
</script>
