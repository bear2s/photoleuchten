<template>
  <wall-lights />
</template>

<script>
  import WallLights from '../../../components/partials/WallLights.vue'

  export default {
    name: 'WallLightsPageEn',
    transition: 'slide-left',
    components: { WallLights },
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'en')
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Wall lights | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/wandleuchten' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/wall-lights' }
        ]
      }
    }
  }
</script>
