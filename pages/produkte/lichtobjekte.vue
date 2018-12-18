<template>
  <round-objects/>
</template>
<script>
  import RoundObjects from '../../components/partials/RoundObjects'

  export default {
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Lichtobjekte | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'de'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/lichtobjekte' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/light-objects' }
        ]
      }
    },
    components: { RoundObjects },
    transition: 'slide-left',
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'de')
    }
  }
</script>
