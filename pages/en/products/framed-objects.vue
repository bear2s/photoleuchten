<template>
  <framed-objects />
</template>

<script>
  import FramedObjects from '../../../components/partials/FramedObjects'

  export default {
    name: 'FramedObjectsPage',
    components: { FramedObjects },
    transition: 'slide-left',
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'en')
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Framed light objects | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'en'
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
