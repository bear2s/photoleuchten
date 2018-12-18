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
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Light objects | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/lichtobjekte' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/light-objects' }
        ]
      }
    }
  }
</script>
