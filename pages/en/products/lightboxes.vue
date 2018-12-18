<template>
  <square-objects/>
</template>

<script>
  import SquareObjects from '../../../components/partials/SquareObjects'

  export default {
    name: 'Lightboxes',
    transition: 'slide-left',
    components: { SquareObjects },
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'en')
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Photo lightboxes | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/leuchtkaesten' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/lightboxes' }
        ]
      }
    }
  }
</script>
