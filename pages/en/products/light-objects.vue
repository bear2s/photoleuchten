<template>
  <round-objects/>
</template>
<script>
  import RoundObjects from '../../../components/partials/RoundObjects'

  export default {
    components: { RoundObjects },
    transition: 'slide-left',
    async created () {
    return this.$store.dispatch('setLanguageKey', 'en')
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Light objects | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Find your light object for the wall. Large sized handmade art lights with integrated LED lighting. Individual frame.'
        }],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/lichtobjekte' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/light-objects' }
        ]
      }
    }
  }
</script>
