<template>
  <v-layout
    row
    wrap>
    <no-ssr>
      <v-flex
        xs12
        class="text-xs-center headline-container">
        <h1>
          WANDLEUCHTEN - LICHTOBJEKTE - LEUCHTKAESTEN - BELEUCHTETE PHOTOS & PAPIERE
        </h1>
        <div style="position: absolute" class="headline-container-inner">
          <h2 class="white--text px-3">
            handgefertigte Design-Leuchten, Unikate aus Fotografien & Licht
          </h2>
        </div>
        <pl-img
          :quality="85"
          file-name="t0"
          img-type="jpg"
          sizes="100vw" />
      </v-flex>
    </no-ssr>
    <v-flex
      class="text-xs-center"
      xs12>
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

  export default {
    name: 'App',
    // layout: 'home',
    components: { Collection },
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
            content: 'Mit Liebe hergestellte, handgemachte Wandleuchten, Lichtobjekte und Leuchtkästen mit Fotografien, die unbeleuchtet und beleuchtet toll aussehen.'
          }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en' }
        ]
      }
    },
    transition: 'slide-left',
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'de')
    }
  }
</script>
