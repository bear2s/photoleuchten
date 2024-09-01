<template>
  <v-layout
    row
    wrap>
    <v-flex
      class="text-xs-center"
      xs12>
      <home-intro-inner :is-absolute="false"/>
      <no-ssr>
        <home-parallax-section />
      </no-ssr>
      <h3 class="text-xs-center">Willkommen bei Photoleuchten!</h3>
      <div class="text-xs-center mt-3">
        <p>
          Hier findet Ihr mit Liebe hergestellte, handgemachte Leuchten: Wandleuchten, Leuchtkästen, Lichtobjekte mit
          Fotografien, die unbeleuchtet toll aussehen und beleuchtet einen völlig neuen Look bekommen.
        </p>
        <p>
          Die Leuchten passen durch ihre unterschiedlichen Motive, Lichtfarben - und Stärken in viele Wohnbereiche und
          bringen eine neue Atmosphäre in einen Raum.
        </p>
        <p>
          Wer ein individuelles Stück für Wohn- oder Geschäftsräume sucht, das ein besonderes Licht in einen Raum
          bringt, ist hier richtig.
        </p>
        <p>
          Die Wandleuchten und Lichtobjekte gibt es in verschiedenen Formaten und Größen und können individuell
          angepasst werden.
        </p>
        <p>
          Alle Leuchten sind mit stromsparender LED-Technik ausgestattet.
        </p>
        <p>
          Sonderanfertigungen mit eigenen Motiven oder in bestimmten Größen sind jederzeit möglich.
        </p>
      </div>
    </v-flex>
    <collection />
    <v-flex xs12 class="text-xs-center py-5">
      <v-btn large outline to="/kontakt">
        Kontakt
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import Collection from '../components/partials/Collection'
  import HomeIntroInner from '../components/partials/HomeIntroInner'

  export default {
    name: 'App',
    components: {
      HomeIntroInner,
      HomeParallaxSection: () => import('../components/partials/HomeParallaxSection'),
      Collection
    },
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Photoleuchten.com  ▶ | Handgefertigte Lichtobjekte, beleuchtete Fotografien',
        htmlAttrs: {
          lang: 'de'
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Mit Liebe hergestellte, handgemachte Leuchten. Mit LED-Beleuchtung. Für Wohnzimmer, Schlafzimmer, Esszimmer, Küche,..., Büro- und Geschäftsräume..'
          }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en' }
        ],
        script: [
          {
            hid: 'gtm',
            innerHTML: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P6GCHQFK');
            `,
            type: 'text/javascript',
          }
        ],
        noscript: [
          {
            hid: 'noscript-gtm',
            innerHTML: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6GCHQFK"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }
        ],
        __dangerouslyDisableSanitizers: ['script', 'noscript']
      }
    },
    transition: 'slide-left',
    async created () {
      await this.$store.commit('SET_LANG', 'de')
    }
  }
</script>
