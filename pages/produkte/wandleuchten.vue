<template>
  <wall-lights />
</template>

<script>
  import WallLights from '../../components/partials/WallLights.vue'

  export default {
    name: 'WallLightsPageDe',
    transition: 'slide-left',
    components: { WallLights },
    asyncData ({ store }) {
      return store.dispatch('setLanguageKey', 'de')
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Wandleuchten | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'de'
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Finde Deine handgemachte  Wandleuchte in der Motivauswahl. Fotokunst in netzbetriebenen LED-Leuchtrahmen aus Holz für die Wand mit unterschiedlichen Fotografien.'
          }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/produkte/wandleuchten' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/products/wall-lights' }
        ]
      }
    }
  }
</script>
