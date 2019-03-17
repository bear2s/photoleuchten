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
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Finde dein Lichtobjekt für die Wand. Großformatige handgemachte Kunst-Leuchten mit integrierter LED-Beleuchtung. Individuelle Rahmen.'
          }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/lichtobjekte' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/light-objects' }
        ]
      }
    },
    components: { RoundObjects },
    transition: 'slide-left',
    async created () {
    return this.$store.dispatch('setLanguageKey', 'de')
    }
  }
</script>
